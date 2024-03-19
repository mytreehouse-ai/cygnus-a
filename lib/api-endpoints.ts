import { aiChatSchema } from "@/schema/ai-chat";
import apiClient from "./api-client";
import { z } from "zod";

export function getAiChat(query: z.infer<typeof aiChatSchema>) {
  return apiClient.get("/ai/langchain/assistant", {
    params: query,
  });
}
