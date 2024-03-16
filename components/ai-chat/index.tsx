"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components//ui/card";
import { LayoutList, Pencil, Send, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components//ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components//ui/input";
import { Drawer, DrawerContent, DrawerHeader } from "@/components//ui/drawer";
import { Modal } from "@/types";
import { Separator } from "@/components//ui/separator";

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
    <main className="flex min-h-[calc(100vh_-_200px)] grow flex-col justify-between pb-4 pt-2 md:min-h-[calc(100vh_-_250px)] lg:mx-auto lg:my-auto lg:max-w-7xl">
      <ChatHistory
        open={showChatHistory}
        onClose={() => setShowChatHistory(false)}
      />
      <div className="space-y-4 px-4 pb-4  pt-10 md:pt-12">
        <div className="flex flex-col items-start gap-y-5 md:flex-row md:items-start md:justify-between">
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
        </div>

        <Card className=" md:flex md:items-stretch">
          <CardHeader className=" flex flex-col justify-between md:w-2/5 md:p-0">
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
            <div className=" hidden px-4 py-4 md:block">
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
          <CardContent className="h-full bg-[#F2F2F2] py-6 md:min-h-[calc(100vh_-_400px)] md:w-3/5">
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

const ChatBody = () => {
  const chatForm = useForm();

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="flex min-h-[calc(100vh_-_380px)] flex-col justify-between gap-y-8  md:min-h-[calc(100vh_-_300px)] lg:md:min-h-[calc(100vh_-_400px)]">
      <div>
        {DUMMY_MESSAGE.map((i) => (
          <div key={i.id}>
            <div className="inline-flex items-center gap-x-2 text-sm font-bold">
              <div className="shink-0 flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border-0 bg-emerald-600 p-3  font-normal text-white">
                M
              </div>
              <p>{i.from}</p>
            </div>
            <p className="ml-8 mt-2 text-sm text-slate-900">{i.message}</p>
          </div>
        ))}
      </div>

      <Card>
        <CardContent className="p-2">
          <Form {...chatForm}>
            <form
              name="chat-form"
              onSubmit={chatForm.handleSubmit(onSubmit)}
              className="flex flex-row justify-between"
            >
              <FormField
                control={chatForm.control}
                name="message"
                render={() => (
                  <FormItem className="w-full md:w-full">
                    <FormControl>
                      <div className="space-y-1 text-start">
                        <Input
                          placeholder="Message MyTreeHouseAI..."
                          className="w-full rounded-lg border-none text-sm focus:border-none focus:outline-none focus-visible:ring-0 md:w-full "
                        />
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">
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
