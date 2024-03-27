import { z } from "zod";

export const aiChatSchema = z.object({
  query: z.string(),
  collection_name: z.string(),
  thread_id: z.string(),
  llm: z.string().optional(),
});
