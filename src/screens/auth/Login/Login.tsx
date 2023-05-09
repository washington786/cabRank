import { StyleSheet, View } from "react-native";
import React from "react";
import InputWrapperLogin from "../../../components/auth/InputWrapperLogin";

interface login {
  onSignInHandler?(): void;
  onPasswordBtnhandler?(): void;
  onSignUpHandler?(): void;
}

const Login = (props: login) => {
  return (
    <View style={styles.con}>
      <InputWrapperLogin
        onPasswordBtnhandler={props.onPasswordBtnhandler}
        onPressHandler={props.onSignInHandler}
        onSignUpHandler={props.onSignUpHandler}
      />
    </View>
  );
};

export default React.memo(Login);

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
});
