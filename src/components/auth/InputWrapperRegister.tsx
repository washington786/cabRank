import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { AuthStyles } from "../../styles/AuthStyles";
import { rgba } from "../../globals/Colors";

interface input {
  onSignInHandler?(): void;
  onSignUpHandler?(): void;
}

const InputWrapperRegister = (props: input) => {
  return (
    <KeyboardAvoidingView>
      <TextInput
        mode="outlined"
        label={"First Name"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
      />
      <TextInput
        mode="outlined"
        label={"Last Name"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
      />
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
        mode="contained"
        contentStyle={AuthStyles.btnCon}
        style={AuthStyles.btnCon}
        labelStyle={AuthStyles.lbl}
        onPress={props.onSignUpHandler}
      >
        Sign Up
      </Button>

      <Button
        mode="outlined"
        style={AuthStyles.outBtn}
        labelStyle={AuthStyles.lb}
        onPress={props.onSignInHandler}
      >
        Sign In
      </Button>
    </KeyboardAvoidingView>
  );
};

export default React.memo(InputWrapperRegister);
