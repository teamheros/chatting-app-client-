import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";


function ChatBody() {
  return (
    <div className="main-chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
  )
}

export default ChatBody
