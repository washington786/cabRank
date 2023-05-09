import { StyleSheet, View } from "react-native";
import React from "react";
import InputWrapperForgot from "../../../components/auth/InputWrapperForgot";
import { Text, Title } from "react-native-paper";
import { rgba } from "../../../globals/Colors";
import { roboto } from "../../../globals/Fonts";

interface reset {
  onSignInHandler?(): void;
  onSubmitHandler?(): void;
}

const ResetPassword = (props: reset) => {
    let title:string = "want to recover your password?";
    let sub:string = "please enter your valid email, an email recovery will be sent to your email.";
  return (
    <View style={styles.con}>
      <Title style={styles.title}>{title}</Title>
      <Text variant="labelSmall" style={styles.p}>
        {sub}
      </Text>
      <InputWrapperForgot
        onSignInHandler={props.onSignInHandler}
        onSubmitHandler={props.onSubmitHandler}
      />
    </View>
  );
};

export default React.memo(ResetPassword);
const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  title: {
    textTransform: "capitalize",
  },
  p: {
    color: rgba.grey_8,
    fontFamily: roboto.thin,
  },
});
