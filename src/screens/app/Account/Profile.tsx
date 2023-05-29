import { Platform, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import {
  Avatar,
  Button,
  Paragraph,
  Text,
  TextInput,
} from "react-native-paper";

import { MainStyle } from "../../../styles/MainStyle";
import Scroller from "../../../globals/Scroller";
import MainWrapperView from "../../../components/app/MainWrapperView";
import HeaderBack from "../../../components/app/HeaderBack";
import { roboto } from "../../../globals/Fonts";
import { colors, rgba } from "../../../globals/Colors";
import { useRoute } from "@react-navigation/native";
import { db,auth } from "../../auth/firebase";
import { ref,child,update } from "firebase/database";

const isIos = Platform.OS === "ios";

const Profile = () => {
  return (
    <Scroller>
      <MainWrapperView>
        <HeaderBack />
        <ProfileWrap />
        <TextInputsWrapper />
      </MainWrapperView>
    </Scroller>
  );
}; 
const ProfileWrap = () => {
  const route = useRoute()
  const [Firstname,setFirstname]=useState(route.params.Firstname)
  const [Uid,setUid]=useState(route.params.Uid)
  const [Lastname,setLastname]=useState(route.params.Lastname)
  const [Email,setEmail]=useState(route.params.Email)

  return (
    <View style={styles.con}>
      <Avatar.Text
        label="DM"
        size={70}
        color={"white"}
        labelStyle={styles.label}
        style={styles.avatar}
      />
      <Paragraph>{Firstname} {Lastname}</Paragraph>
      <Text variant="bodySmall" style={styles.email}>
        {Email}
      </Text>
    </View>
  );
};

const TextInputsWrapper = () => {
  const route = useRoute()
  const [Firstname,setFirstname]=useState(route.params.Firstname)
  const [Uid,setUid]=useState(route.params.Uid)
  const [Lastname,setLastname]=useState(route.params.Lastname)
  const [Email,setEmail]=useState(route.params.Email)
  const editprofile=()=>{
   const CabRankRef= ref(db,'CabRankClient')
   const CabRankChild =child(CabRankRef,Uid)
update(CabRankChild,{Firstname,Email,Lastname,})
    .then(()=>ref(db,'CabRankClient'))
    // .then(snapshot=>snapshot.val())
    .catch(error => ({
      errorCode: error.code,
      errorMessage: error.message
    }));
    // navigation.navigate('Profile')
  }
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder={Email}
        inputMode="email"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
      />
      <TextInput
        placeholder={Firstname}
        inputMode="text"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
        onChangeText={(text)=>setFirstname(text)}           
         value={Firstname}
      /> 
      <TextInput
        placeholder={Lastname}
        inputMode="text"
        mode="outlined"
        outlineStyle={styles.outlined}
        style={styles.input}
        onChangeText={(text)=>setLastname(text)}           
         value={Lastname}
      />

      <Button
        mode="contained"
        contentStyle={MainStyle.buttonGlobal}
        labelStyle={MainStyle.label}
        style={MainStyle.btn}
        onPress= {()=>editprofile()}
      >
        update profile
      </Button>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  label: {
    fontFamily: roboto.regular,
  },
  avatar: {
    backgroundColor: colors.primary_5,
    alignSelf: "center",
    elevation: 2,
  },
  con: {
    alignItems: "center",
    justifyContent: "center",
  },
  email: {
    fontFamily: roboto.light,
    letterSpacing: 1,
  },
  inputWrapper: {
    paddingVertical: 10,
  },
  outlined: {
    borderRadius: 2,
    borderWidth: isIos ? 0.5 : 1,
    borderColor: isIos ? rgba.grey_2 : rgba.grey_1,
  },
  input: {
    marginVertical: 6,
  },
});
