import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import InputWrapperLogin from "../../../components/auth/InputWrapperLogin";
import Scroller from "../../../globals/Scroller";

export const height = Dimensions.get('screen').height;
interface login {
  onSignInHandler?(): void;
  onPasswordBtnhandler?(): void;
  onSignUpHandler?(): void;
}

const Login = (props: login) => {
  return (
    <View style={styles.con}>
      <Scroller>
        <InputWrapperLogin
          onPasswordBtnhandler={props.onPasswordBtnhandler}
          onPressHandler={props.onSignInHandler}
          onSignUpHandler={props.onSignUpHandler}
        />
      </Scroller>
    </View>
  );
};

export default React.memo(Login);

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexGrow:1,
    height:height
  },
});
