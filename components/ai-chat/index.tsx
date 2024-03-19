"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components//ui/card";
import { LayoutList, Pencil, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components//ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components//ui/input";
import { Drawer, DrawerContent, DrawerHeader } from "@/components//ui/drawer";
import { Modal } from "@/types";
import { Separator } from "@/components//ui/separator";
import useAiChatQuery from "@/hooks/useAiChatQuery";
import { useAiChatStore } from "@/hooks/useAiChatStore";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { v4 as uuidv4 } from "uuid";
import { useRouter, useSearchParams } from "next/navigation";

const DUMMY_CHAT_HISTORY = [
  {
    id: 1,
    age: "TODAY",
    header: "Sed efficitur convallis bibendum",
  },
  {
    id: 2,
    age: "TODAY",
    header: "Sed efficitur convallis bibendum",
  },
];

const AIChat = () => {
  const [showChatHistory, setShowChatHistory] = useState(false);

  function handleListButtonClick() {
    setShowChatHistory(true);
  }

  return (
    <main className="flex h-full grow flex-col justify-between lg:mx-auto ">
      <ChatHistory
        open={showChatHistory}
        onClose={() => setShowChatHistory(false)}
      />
      <div className="space-y-4">
        {/* <div className="flex flex-col items-start gap-y-5 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className=" text-3xl font-bold ">AI Chatbot</h3>
            <p className="tex-sm text-slate-500 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique.
            </p>
          </div>

          <Button
            variant="outline"
            className="flex gap-x-1 text-xs text-slate-500"
          >
            <HelpCircle className="h-4 w-4" />
            FAQs
          </Button>
        </div> */}

        <Card className="h-full border-none shadow-none md:flex md:items-stretch">
          <CardHeader className=" flex  flex-col justify-between md:h-[calc(100vh)] md:w-2/5 md:p-0 lg:w-[20%] ">
            <div className="flex shrink-0 items-center justify-between md:p-4">
              <LayoutList
                onClick={handleListButtonClick}
                className="hover:cursor-pointer md:hidden"
              />
              <div className="inline-flex items-center gap-x-2 text-sm font-bold">
                <div className="shink-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-0 bg-emerald-600 p-4 text-white">
                  M
                </div>
                <p>NEW CHAT</p>
              </div>
              <Pencil />
            </div>

            <div className="hidden h-full grow md:block">
              <Separator className=" hidden md:block" />
              <div className="p-4">
                <h3 className=" text-sm font-bold text-slate-500">TODAY</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {DUMMY_CHAT_HISTORY.map((e) => (
                    <li key={e.id}>{e.header}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Separator className="hidden md:block" />
            <div className=" hidden bg-white px-4 py-4 md:block">
              <div className="inline-flex gap-x-2">
                <div className="shink-0 flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border-0 bg-emerald-600 p-5  font-normal text-white">
                  M
                </div>
                <div className="text-sm font-bold">
                  <p>Jane Doe</p>
                  <p className="text-xs font-normal text-slate-500">
                    testing-email@yahoo.com
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="md:w-3/ h-[calc(100vh_-_90px)] bg-[#F2F2F2]  py-6 md:h-[calc(100vh)] lg:w-[80%]">
            <ChatBody />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AIChat;

const DUMMY_MESSAGE = [
  {
    id: 1,
    from: "You",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus venenatis nisl at convallis. Etiam orci sapien, consectetur eu libero at, convallis pretium nisl. ",
  },
  {
    id: 0,
    from: "MyTreeHouseAI",
    message:
      "Defining Key Performance Indicators (KPIs) for each post is crucial for measuring the effectiveness of your social media strategy. Here's when and how to do it effectively",
  },
];

const formSchema = z.object({
  message: z.string().min(1, {
    message: "message must be at least 1 character.",
  }),
});

const ChatBody = () => {
  const [message, setMessage] = useState("");
  const [threadId, setThreadId] = useState("");
  const { messages, addMessage } = useAiChatStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const messageParentRef = useRef<HTMLDivElement>(null);
  const scrollToBottomRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (messageParentRef?.current && messages.length) {
      messageParentRef.current.scrollTop =
        messageParentRef.current.scrollHeight;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (scrollToBottomRef?.current) {
        scrollToBottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [messages.length]);

  if (isSuccess) {
    setMessage("");
    addMessage({ id: Date.now(), type: "ai", content: data.ai_suggestion });
  }

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setMessage(data.message);
    addMessage({ id: Date.now(), type: "human", content: data.message });
    form.reset();
  };

  return (
    <div className="flex min-h-full flex-col justify-between gap-y-8 md:pt-12 lg:px-32">
      <div
        className="h-[calc(100vh-15rem)] space-y-4 overflow-y-auto"
        ref={messageParentRef}
      >
        {messages.map((message) => (
          <div className="space-y-2" key={message.id}>
            <div className="inline-flex items-center gap-x-2 text-sm font-bold">
              <div className="shink-0 flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border-0 bg-emerald-600 p-3  font-normal text-white">
                M
              </div>
              <p>{message.type}</p>
            </div>
            <article className="prose w-full">
              <Markdown remarkPlugins={[remarkGfm]}>{message.content}</Markdown>
            </article>
          </div>
        ))}
        <div ref={scrollToBottomRef} />
      </div>

      <Card>
        <CardContent className="p-2">
          <Form {...form}>
            <form
              name="chat-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-row justify-between"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full md:w-full">
                    <FormControl>
                      <div className="space-y-1 text-start">
                        <Input
                          placeholder="Message MyTreeHouseAI..."
                          className="w-full rounded-lg border-none text-sm focus:border-none focus:outline-none focus-visible:ring-0 md:w-full "
                          {...field}
                          disabled={isLoading}
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                <Send />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

const ChatHistory = ({ onClose, open }: Modal) => {
  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader className="flex items-center justify-between px-8">
          <div className="inline-flex items-center gap-x-2 text-sm font-bold">
            <div className="shink-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-0 bg-emerald-600 p-4 text-white">
              M
            </div>
            <p>NEW CHAT</p>
          </div>
          <Pencil />
        </DrawerHeader>
        <Separator />
        <div className="p-8">
          <h3 className=" text-sm font-bold text-slate-500">TODAY</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {DUMMY_CHAT_HISTORY.map((e) => (
              <li key={e.id}>{e.header}</li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="px-8 py-4">
          <div className="inline-flex gap-x-2">
            <div className="shink-0 flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border-0 bg-emerald-600 p-5  font-normal text-white">
              M
            </div>
            <div className="text-sm font-bold">
              <p>Jane Doe</p>
              <p className="text-xs font-normal text-slate-500">
                testing-email@yahoo.com
              </p>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
