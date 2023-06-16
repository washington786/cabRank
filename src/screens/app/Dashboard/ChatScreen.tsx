import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import MainView from "../../../globals/MainView";
import { GiftedChat } from "react-native-gifted-chat";
import HeaderBack from "../../../components/app/HeaderBack";
 import { db,auth } from "../../auth/firebase";
 import { ref,onValue } from "firebase/database";
 import { firestore } from "../../auth/firebase";
 import { collection,addDoc,orderBy,query,onSnapshot } from "firebase/firestore";
import { createdAt } from "expo-updates";
const ChatScreen = () => {
  const [messages, setMessages] = useState<Array<Object>>([]);
  const [Firstname,setFirstname]=useState('')
  const user = auth.currentUser?.uid;
  useEffect(() => {
    const CabRankRef= ref(db,'/CabRankClient/' + user)
    onValue(CabRankRef, snap => {
 
         setFirstname(snap.val() && snap.val().Firstname);
        
     }) 
 
 }, [])
  useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Good day, please type your question in the chat...",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "Marshal",
    //     },
    //     sent: true,
    //     received: true,
    //   },
    // ]);
    const collectionRef =collection(firestore,'chats')
    const q =query(collectionRef,orderBy('createdAt',"desc"))

    const unsubscribe = onSnapshot(q,querySnapshot =>{
      setMessages(
        querySnapshot.docs.map(doc =>({
          _id:doc.data()._id,
          createdAt:doc.data().createdAt.toDate(),
          text:doc.data().text,
          user:doc.data().user
        }))
      )
    })
    return ()=>unsubscribe()
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages));
      const { _id, createdAt, text, user,} = messages[0]
      addDoc(collection(firestore, 'chats'), {
         _id, createdAt,  text, user });
  }, []);
  return (
    <MainView>
      <HeaderBack title="Find Rank Information" />
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: auth.currentUser?.email,
         avatar:'https://i.pravatar.cc/300'
      
         
        }}
        // isTyping={false}
        // showUserAvatar={true}
      />
    </MainView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
