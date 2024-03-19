import { create } from "zustand";

interface Message {
  id: number;
  type: "You" | "AI";
  content: string;
}

interface Store {
  messages: Message[];
  addMessage: (message: Message) => void;
}

export const useAiChatStore = create<Store>((set) => ({
  messages: [],
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
