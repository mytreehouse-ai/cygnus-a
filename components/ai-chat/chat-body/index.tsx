"use client";

import { useAiChatStore } from "@/hooks/useAiChatStore";
import { PropsWithChildren, useEffect, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function AnchortagRenderer(props: any) {
  return (
    <a href={props.href} target="_blank">
      {props.children}
    </a>
  );
}

function ChatBody(props: PropsWithChildren) {
  const { messages, addMessage } = useAiChatStore();

  const messageParentRef = useRef<HTMLDivElement>(null);
  const scrollToBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageParentRef?.current) {
      messageParentRef.current.scrollTop =
        messageParentRef.current.scrollHeight;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (scrollToBottomRef?.current) {
        scrollToBottomRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [messages.length]);

  return (
    <div className="flex w-full flex-1 flex-col gap-y-6 bg-[#F2F2F2] lg:w-2/3">
      <div className="scrollbar-thin scrollbar-thumb-slate-100 scrollbar-track-slate-100 max-h-[calc(100vh-10rem)] flex-1 overflow-y-auto px-6 pt-6">
        <div ref={messageParentRef} className="flex flex-col gap-y-4">
          {messages.map((message) => (
            <div className="w-full" key={message.id}>
              <div className="inline-flex items-center gap-x-2 text-sm font-bold">
                <div className="flex h-3 w-3 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-emerald-600 p-3 font-normal text-white">
                  M
                </div>
                <p>{message.type}</p>
              </div>
              <div className="prose prose-base max-w-none px-12">
                <Markdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    a: AnchortagRenderer,
                  }}
                >
                  {message.content}
                </Markdown>
              </div>
            </div>
          ))}
          <div ref={scrollToBottomRef} />
        </div>
      </div>
      <div className="w-full">{props.children}</div>
    </div>
  );
}

export default ChatBody;
