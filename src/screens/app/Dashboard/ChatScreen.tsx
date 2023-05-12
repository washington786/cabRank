import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MainView from "../../../globals/MainView";
import { GiftedChat } from "react-native-gifted-chat";
import HeaderBack from "../../../components/app/HeaderBack";

const ChatScreen = () => {
  const [messages, setMessages] = useState<Array<Object>>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Good day, please type your question in the chat...",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Marshal",
        },
        sent: true,
        received: true,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    <MainView>
      <HeaderBack title="Find Rank Information" />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        isTyping={false}
        showUserAvatar={false}
      />
    </MainView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
