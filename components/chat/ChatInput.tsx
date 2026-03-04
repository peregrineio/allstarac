"use client";

import { useState, type RefObject, type FormEvent } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  inputRef?: RefObject<HTMLInputElement | null>;
}

export function ChatInput({ onSend, disabled, inputRef }: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 px-4 py-3 bg-white border-t border-gray-200"
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask us anything..."
        disabled={disabled}
        className={cn(
          "flex-1 px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg outline-none transition-colors",
          "focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className={cn(
          "w-10 h-10 flex items-center justify-center rounded-lg transition-colors",
          value.trim() && !disabled
            ? "bg-[#E8630A] text-white hover:bg-[#d45a09]"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        )}
        aria-label="Send message"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
