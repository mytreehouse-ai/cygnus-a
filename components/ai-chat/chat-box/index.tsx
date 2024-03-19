"use client";
import { Form, FormControl, FormField, FormItem } from "@/components//ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAiChatQuery from "@/hooks/useAiChatQuery";
import { useAiChatStore } from "@/hooks/useAiChatStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

const formSchema = z.object({
  message: z.string().min(1, {
    message: "message must be at least 1 character.",
  }),
});

function ChatBox() {
  const [message, setMessage] = useState("");
  const [threadId, setThreadId] = useState("");
  const { addMessage } = useAiChatStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("thread_id") || !threadId) {
      const thread_id = uuidv4();
      setThreadId(thread_id);
      router.replace(
        window.location.pathname + "?" + `thread_id=${thread_id}`,
        {
          scroll: false,
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isLoading, isSuccess, data } = useAiChatQuery({
    query: message,
    collection_name: "property_listings",
    thread_id: threadId,
    llm: "mixtral-8x7b-32768",
  });

  if (isSuccess) {
    setMessage("");
    addMessage({ id: Date.now(), type: "AI", content: data.ai_suggestion });
  }

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setMessage(data.message);
    addMessage({ id: Date.now(), type: "You", content: data.message });
    form.reset();
  };

  return (
    <div className="mx-4">
      <Form {...form}>
        <form
          name="chat-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative flex items-center justify-between"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className=" w-full">
                <FormControl>
                  <Input
                    placeholder="Message..."
                    className="w-full rounded-lg p-6 placeholder:text-base"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="absolute right-1.5"
            type="submit"
            disabled={isLoading}
          >
            <Send />
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ChatBox;
