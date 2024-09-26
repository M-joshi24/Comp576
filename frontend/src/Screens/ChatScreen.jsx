import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  console.log(userInfo)

  return (
    <div style={{ height: "90vh" }}>
      <PrettyChatWindow
        projectId="212ba16c-3c35-489b-b72c-ceb06fc51bd9"
        username='venkatesh91'  // use dynamic username
        secret='Venky@1234'
         
        //username='adam'// adam
       // secret='pass1234'// pass1234
        style={{ height: "100%" }}
      />
    </div>
   // console.log(userInfo);

  );
};

export default ChatScreen;
