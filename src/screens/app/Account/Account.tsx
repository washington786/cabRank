import { StyleSheet, View } from "react-native";
import React ,{useState,useEffect}from "react";
import { useNavigation } from "@react-navigation/native";
import ScrollWrapper from "../../../globals/ScrollWrapper";
import { Button, Paragraph } from "react-native-paper";
import { colors } from "../../../globals/Colors";
import { roboto } from "../../../globals/Fonts";
import Wrapper, { TitleWrapper } from "../../../components/app/Wrapper";
import {db, auth } from "../../auth/firebase";
import { signOut } from "firebase/auth";
import { ref,onValue } from "firebase/database";

const Account = () => {
  const user = auth.currentUser?.uid;
  
  const [Firstname,setFirstname]=useState('')
  const [Uid,setUid]=useState('')
  const [Lastname,setLastname]=useState('')
  const [Email,setEmail]=useState('')
  const navigation = useNavigation();
  useEffect(() => {
    const CabRankRef= ref(db,'/CabRankClient/' + user)
    onValue(CabRankRef, snap => {
 
         setFirstname(snap.val() && snap.val().Firstname);
         setLastname(snap.val().Lastname)
         setEmail(snap.val().email)
         setUid(snap.val().uid)
     }) 
 
 }, [])
  const onLogoutUser=()=>{
   
    signOut(auth);
    navigation.navigate('auth');
    
  }
  const transitAccount = (): void => {
    navigation.navigate("profile",{
      Firstname:Firstname,Lastname:Lastname,Uid:Uid,
      Email:Email
    });
  };

  const transitNotifications = (): void => {
    navigation.navigate("notifications");
  };

  const transitHelpCenter = (): void => {
    navigation.navigate("help");
  };

  const transitTerms = (): void => {
    navigation.navigate("terms");
  };

  const transitPolicy = (): void => {
    navigation.navigate("privacy");
  };


  return (
    <>
      <HeaderComp />
      <ScrollWrapper>
        <ContainerWrapper>
          <TitleWrapper title={"account"} />

          <Row>
            <Wrapper
              title="my account"
              icon={"user"}
              onPress={transitAccount}
            />
            <Button
              mode="contained"
              contentStyle={styles.btnContent}
              style={styles.btn}
              onPress={onLogoutUser}
            >
              Log out
            </Button>
          </Row>
          <Wrapper
            title="Notifications"
            icon={"bell"}
            onPress={transitNotifications}
          />

          <TitleWrapper title={"Support"} />
          <Wrapper
            title="help center"
            icon={"help-circle"}
            onPress={transitHelpCenter}
          />

          <TitleWrapper title={"About"} />
          <Wrapper
            title="terms of use"
            icon={"bookmark"}
            onPress={transitTerms}
          />
          <Wrapper
            title="Privacy Policies"
            icon={"user-check"}
            onPress={transitPolicy}
          />
        </ContainerWrapper>
      </ScrollWrapper>
    </>
  );
};

const HeaderComp = () => {
  return (
    <View style={styles.header}>
      <Paragraph style={styles.headerTxt}>Account Settings</Paragraph>
    </View>
  );
};

type con = {
  children: any;
};

const ContainerWrapper = (props: con) => {
  return <View style={styles.con}>{props.children}</View>;
};

type c = {
  children: any;
};
const Row = (props: c) => {
  return <View style={styles.accCon}>{props.children}</View>;
};

export default React.memo(Account);

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary_1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  headerTxt: {
    fontFamily: roboto.medium,
    fontSize: 17,
    textTransform: "capitalize",
  },
  con: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    flex: 1,
  },
  accCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnContent: {
    borderRadius: 0,
    backgroundColor: colors.primary_5,
  },
  btn: {
    marginHorizontal: 8,
    borderRadius: 5,
  },
});
