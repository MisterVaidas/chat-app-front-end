import { Component } from "react";
import LoginModal from "../Modal/LoginModal";
import ChatPage from "./ChatPage";

class Chat extends Component {
  render() {
    return (<LoginModal />)(<ChatPage />);
  }
}

export default Chat;
