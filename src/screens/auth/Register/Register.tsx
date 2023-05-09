import { StyleSheet, View } from "react-native";
import React from "react";
import InputWrapperRegister from "../../../components/auth/InputWrapperRegister";
import { Text, Title } from "react-native-paper";
import { rgba } from "../../../globals/Colors";
import { roboto } from "../../../globals/Fonts";

interface reg {
  onSignInHandler?(): void;
  onSignUpHandler?(): void;
}

const Register = (props: reg) => {
  return (
    <View style={styles.con}>
      <Title style={styles.title}>create an account</Title>
      <Text variant="labelSmall" style={styles.p}>
        enter valid credentials to create an account with us.
      </Text>
      <InputWrapperRegister
        onSignInHandler={props.onSignInHandler}
        onSignUpHandler={props.onSignUpHandler}
      />
    </View>
  );
};

export default React.memo(Register);

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
