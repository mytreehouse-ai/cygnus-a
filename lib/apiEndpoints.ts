import { aiChatSchema } from "@/schema/aiChat";
import apiClient from "./apiClient";
import { z } from "zod";

export function getAiChat(query: z.infer<typeof aiChatSchema>) {
  return apiClient.get("/ai/langchain/assistant", {
    params: query,
  });
}
