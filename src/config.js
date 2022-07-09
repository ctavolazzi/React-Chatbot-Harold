import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Harold",
  initialMessages: [createChatBotMessage("Hi, I'm Harold, and I'm here to help!")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config