import ChatBody from "@/components/ai-chat/chat-body";
import ChatBox from "@/components/ai-chat/chat-box";

function AiChat() {
  return (
    <main className="flex flex-col items-center lg:p-8">
      <ChatBody>
        <ChatBox />
      </ChatBody>
    </main>
  );
}

export default AiChat;
