// Allstar AC & Heating - Chat Type Definitions

export interface ChatLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  timestamp: Date;
  quickReplies?: string[];
  links?: ChatLink[];
  isEmergency?: boolean;
}

export interface ChatResponse {
  text: string;
  quickReplies?: string[];
  links?: ChatLink[];
  isEmergency?: boolean;
}

export interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  hasGreeted: boolean;
  conversationStartedAt: Date | null;
  transcriptSent: boolean;
}

export interface ChatTranscriptPayload {
  messages: ChatMessage[];
  startedAt: string;
  page: string;
  device: "mobile" | "desktop";
}
