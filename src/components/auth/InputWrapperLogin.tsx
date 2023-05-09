import { KeyboardAvoidingView, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { rgba } from "../../globals/Colors";
import { AuthStyles } from "../../styles/AuthStyles";

interface input {
  onPressHandler?(): void;
  onPasswordBtnhandler?(): void;
  onSignUpHandler?():void;
}

const InputWrapperLogin = (props: input) => {
  return (
    <KeyboardAvoidingView>
      <TextInput
        mode="outlined"
        label={"Email address"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
      />
      <TextInput
        mode="outlined"
        label={"Password"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
      />
      <Button
        mode="text"
        onPress={props.onPasswordBtnhandler}
        style={AuthStyles.btn}
      >
        Forgot Password?
      </Button>
      <Button
        mode="contained"
        contentStyle={AuthStyles.btnCon}
        style={AuthStyles.btnCon}
        labelStyle={AuthStyles.lbl}
        onPress={props.onPressHandler}
      >
        Sign In
      </Button>

      <Button
        mode="outlined"
        style={AuthStyles.outBtn}
        labelStyle={AuthStyles.lb}
        onPress={props.onSignUpHandler}
      >
        Sign Up
      </Button>
    </KeyboardAvoidingView>
  );
};

export default React.memo(InputWrapperLogin);
