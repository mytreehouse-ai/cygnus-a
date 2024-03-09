import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { LayoutList, Pencil } from "lucide-react";

const AIChat = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between pb-4 pt-2">
      <div className="space-y-4 px-4 pb-4  pt-10 md:pt-12">
        <h3 className=" text-3xl font-bold md:hidden">AI Chatbot</h3>
        <p className="tex-sm text-slate-500 md:hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique.
        </p>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <LayoutList />
              <div className="inline-flex items-center gap-x-2 text-sm font-bold">
                <div className="shink-0 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-0 bg-emerald-600 p-4 text-white">
                  M
                </div>
                <p>NEW CHAT</p>
              </div>
              <Pencil />
            </div>
          </CardHeader>
          <CardContent className="bg-[#F2F2F2] py-6">
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
  return (
    <div className="space-y-6">
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
  );
};
