import { StyleSheet, View } from "react-native";
import React from "react";
import InputWrapperForgot from "../../../components/auth/InputWrapperForgot";
import { Text, Title } from "react-native-paper";
import { rgba } from "../../../globals/Colors";
import { roboto } from "../../../globals/Fonts";
import Scroller from "../../../globals/Scroller";
import { height } from "../Login/Login";
interface reset {
  onSignInHandler?(): void;
  onSubmitHandler?(): void;
}

const ResetPassword = (props: reset) => {
  let title: string = "want to recover your password?";

  let sub: string =
    "please enter your valid email, an email recovery will be sent to your email.";

  return (
    <View style={styles.con}>
      <Title style={styles.title}>{title}</Title>
      <Text variant="labelSmall" style={styles.p}>
        {sub}
      </Text>
      <Scroller>
        <InputWrapperForgot
          onSignInHandler={props.onSignInHandler}
          onSubmitHandler={props.onSubmitHandler}
        />
      </Scroller>
    </View>
  );
};

export default React.memo(ResetPassword);
const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexGrow:1,
    height:height
  },
  title: {
    textTransform: "capitalize",
  },
  p: {
    color: rgba.grey_8,
    fontFamily: roboto.thin,
  },
});
