"use client";

import { useEffect, useRef } from "react";
import { X, Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage as ChatMessageComponent } from "./ChatMessage";
import { QuickReplies } from "./QuickReplies";
import { TypingIndicator } from "./TypingIndicator";
import { ChatInput } from "./ChatInput";
import type { ChatMessage } from "@/lib/chat/types";

interface ChatWindowProps {
  messages: ChatMessage[];
  isTyping: boolean;
  onSendMessage: (text: string) => void;
  onQuickReply: (text: string) => void;
  onClose: () => void;
}

export function ChatWindow({
  messages,
  isTyping,
  onSendMessage,
  onQuickReply,
  onClose,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Auto-focus input when chat opens
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Get quick replies from the last bot message
  const lastBotMessage = [...messages].reverse().find((m) => m.role === "bot");
  const quickReplies = lastBotMessage?.quickReplies;

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0B2545] to-[#0D2F5E] text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Star className="w-5 h-5 text-[#E8630A]" fill="#E8630A" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Allstar Assistant</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-white/70">Online</span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
          aria-label="Close chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 bg-gray-50">
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessageComponent key={message.id} message={message} />
          ))}

          {/* Typing Indicator */}
          {isTyping && <TypingIndicator />}

          {/* Quick Replies (show after last bot message) */}
          {!isTyping && quickReplies && quickReplies.length > 0 && (
            <QuickReplies replies={quickReplies} onSelect={onQuickReply} />
          )}

          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <ChatInput
        onSend={onSendMessage}
        disabled={isTyping}
        inputRef={inputRef}
      />
    </div>
  );
}
