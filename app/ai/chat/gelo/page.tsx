import ChatBody from "@/components/ai-chat/chat-body";
import ChatBox from "@/components/ai-chat/chat-box";

function AiChat() {
  return (
    <div className="flex h-full flex-col items-center">
      <ChatBody>
        <ChatBox />
      </ChatBody>
    </div>
  );
}

export default AiChat;
