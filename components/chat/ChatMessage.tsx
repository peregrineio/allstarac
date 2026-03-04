"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import type { ChatMessage as ChatMessageType } from "@/lib/chat/types";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === "bot";
  const isEmergency = message.isEmergency;

  // Format timestamp
  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Parse markdown-like formatting (bold with **)
  const formatText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn("flex", isBot ? "justify-start" : "justify-end")}
    >
      <div className={cn("max-w-[85%]", isBot ? "mr-auto" : "ml-auto")}>
        {/* Message Bubble */}
        <div
          className={cn(
            "px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap",
            isBot
              ? cn(
                  "bg-white border rounded-[12px] rounded-bl-[4px]",
                  isEmergency
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200"
                )
              : "bg-[#0B2545] text-white rounded-[12px] rounded-br-[4px]"
          )}
        >
          {/* Emergency Icon */}
          {isEmergency && (
            <div className="flex items-center gap-2 mb-2 text-red-600">
              <Phone className="w-4 h-4 animate-pulse" />
              <span className="text-xs font-semibold uppercase">
                Emergency Service
              </span>
            </div>
          )}

          {/* Message Text */}
          <div className={cn(isBot && "text-gray-700")}>
            {formatText(message.text)}
          </div>

          {/* Links */}
          {message.links && message.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
              {message.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors",
                    link.href.startsWith("tel:")
                      ? "bg-[#E8630A] text-white hover:bg-[#d45a09]"
                      : "bg-[#0B2545] text-white hover:bg-[#0D2F5E]"
                  )}
                >
                  {link.href.startsWith("tel:") && (
                    <Phone className="w-3 h-3" />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Timestamp */}
        <p
          className={cn(
            "text-[11px] text-gray-400 mt-1",
            isBot ? "text-left" : "text-right"
          )}
        >
          {formatTime(message.timestamp)}
        </p>
      </div>
    </motion.div>
  );
}
