import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/api-client";
import { z } from "zod";
import { aiChatSchema } from "@/schema/ai-chat";

const getAiChatQuery = async (query: z.infer<typeof aiChatSchema>) => {
  const url = "/ai/langchain/assistant";
  try {
    const response = await apiClient.get<{ ai_suggestion: string }>(url, {
      params: query,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch ai chat", error);
    throw new Error("Failed to fetch ai chat");
  }
};

const useAiChatQuery = (params: z.infer<typeof aiChatSchema>) => {
  return useQuery({
    queryKey: ["ai-chat", JSON.stringify(params)],
    queryFn: () => getAiChatQuery(params),
    enabled: !!params.query,
  });
};

export default useAiChatQuery;
