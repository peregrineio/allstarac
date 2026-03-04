"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import { matchResponse, getInitialGreeting } from "@/lib/chat/matcher";
import type { ChatMessage, ChatState } from "@/lib/chat/types";

// Generate unique ID for messages
function generateId(): string {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Detect device type
function getDeviceType(): "mobile" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  return window.innerWidth < 768 ? "mobile" : "desktop";
}

export function ChatWidget() {
  const pathname = usePathname();
  const [state, setState] = useState<ChatState>({
    isOpen: false,
    messages: [],
    hasGreeted: false,
    conversationStartedAt: null,
    transcriptSent: false,
  });
  const [isTyping, setIsTyping] = useState(false);
  const autoGreetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inactivityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Send transcript to API
  const sendTranscript = useCallback(async () => {
    if (state.transcriptSent || state.messages.length < 2) return;

    const userMessageCount = state.messages.filter((m) => m.role === "user").length;
    if (userMessageCount < 2) return;

    try {
      await fetch("/api/chat-transcript", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: state.messages,
          startedAt: state.conversationStartedAt?.toISOString() || new Date().toISOString(),
          page: pathname,
          device: getDeviceType(),
        }),
      });
      setState((prev) => ({ ...prev, transcriptSent: true }));
    } catch (error) {
      // Silently fail - don't break the UI
      console.log("Chat transcript:", state.messages);
    }
  }, [state.messages, state.conversationStartedAt, state.transcriptSent, pathname]);

  // Reset inactivity timer
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    // Send transcript after 2 minutes of inactivity
    inactivityTimeoutRef.current = setTimeout(() => {
      sendTranscript();
    }, 2 * 60 * 1000);
  }, [sendTranscript]);

  // Add bot message with typing delay
  const addBotMessage = useCallback(
    (response: ReturnType<typeof matchResponse>) => {
      setIsTyping(true);

      // Random delay between 1-1.5 seconds for realism
      const delay = 1000 + Math.random() * 500;

      setTimeout(() => {
        const botMessage: ChatMessage = {
          id: generateId(),
          role: "bot",
          text: response.text,
          timestamp: new Date(),
          quickReplies: response.quickReplies,
          links: response.links,
          isEmergency: response.isEmergency,
        };

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
        setIsTyping(false);
        resetInactivityTimer();
      }, delay);
    },
    [resetInactivityTimer]
  );

  // Handle sending a message
  const handleSendMessage = useCallback(
    (text: string) => {
      const userMessage: ChatMessage = {
        id: generateId(),
        role: "user",
        text,
        timestamp: new Date(),
      };

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
        conversationStartedAt: prev.conversationStartedAt || new Date(),
      }));

      // Get response from matcher
      const response = matchResponse(text);
      addBotMessage(response);
    },
    [addBotMessage]
  );

  // Handle quick reply click
  const handleQuickReply = useCallback(
    (text: string) => {
      handleSendMessage(text);
    },
    [handleSendMessage]
  );

  // Toggle chat open/closed
  const toggleChat = useCallback(() => {
    setState((prev) => {
      const newIsOpen = !prev.isOpen;

      // If opening and no messages yet, show greeting
      if (newIsOpen && prev.messages.length === 0) {
        const greeting = getInitialGreeting();
        const greetingMessage: ChatMessage = {
          id: generateId(),
          role: "bot",
          text: greeting.text,
          timestamp: new Date(),
          quickReplies: greeting.quickReplies,
          links: greeting.links,
        };
        return {
          ...prev,
          isOpen: newIsOpen,
          messages: [greetingMessage],
          hasGreeted: true,
          conversationStartedAt: new Date(),
        };
      }

      // If closing, send transcript
      if (!newIsOpen) {
        sendTranscript();
      }

      return { ...prev, isOpen: newIsOpen };
    });
  }, [sendTranscript]);

  // Close chat
  const handleClose = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
    sendTranscript();
  }, [sendTranscript]);

  // Auto-greeting logic
  useEffect(() => {
    if (state.hasGreeted) return;

    // On /contact page, trigger after 5 seconds
    // Otherwise, trigger after 30 seconds
    const delay = pathname === "/contact" ? 5000 : 30000;

    autoGreetTimeoutRef.current = setTimeout(() => {
      if (!state.hasGreeted && !state.isOpen) {
        const greeting = getInitialGreeting();
        const greetingMessage: ChatMessage = {
          id: generateId(),
          role: "bot",
          text: greeting.text,
          timestamp: new Date(),
          quickReplies: greeting.quickReplies,
          links: greeting.links,
        };

        setState((prev) => ({
          ...prev,
          isOpen: true,
          messages: [greetingMessage],
          hasGreeted: true,
          conversationStartedAt: new Date(),
        }));
      }
    }, delay);

    return () => {
      if (autoGreetTimeoutRef.current) {
        clearTimeout(autoGreetTimeoutRef.current);
      }
    };
  }, [pathname, state.hasGreeted, state.isOpen]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (autoGreetTimeoutRef.current) clearTimeout(autoGreetTimeoutRef.current);
      if (inactivityTimeoutRef.current) clearTimeout(inactivityTimeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-[9999] w-[60px] h-[60px] md:w-[60px] md:h-[60px] rounded-full bg-[#0B2545] text-white shadow-lg flex items-center justify-center hover:bg-[#0D2F5E] transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={state.isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {state.isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              {/* Pulse animation when closed */}
              <span className="absolute -inset-1 rounded-full bg-[#E8630A] opacity-30 animate-ping" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[9998] w-[calc(100vw-48px)] md:w-[380px] h-[calc(80vh-100px)] md:h-[520px] max-h-[600px]"
          >
            <ChatWindow
              messages={state.messages}
              isTyping={isTyping}
              onSendMessage={handleSendMessage}
              onQuickReply={handleQuickReply}
              onClose={handleClose}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
