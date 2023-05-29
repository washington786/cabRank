import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';
import { AuthStyles } from '../../styles/AuthStyles';
import { rgba } from '../../globals/Colors';


interface input {
    onSignInHandler?(): void;
    onSubmitHandler?(): void;
  }

const InputWrapperForgot = (props:input) => {
  return (
    <KeyboardAvoidingView style={styles.view}>

      <TextInput
        mode="outlined"
        label={"Email address"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
      />
      
      <Button
        mode="contained"
        contentStyle={AuthStyles.btnCon}
        style={[AuthStyles.btnCon,styles.mgn]}
        labelStyle={AuthStyles.lbl}
        onPress={props.onSubmitHandler}
        accessible={true}
      >
        Submit
      </Button>

      <Button
        mode="outlined"
        style={AuthStyles.outBtn}
        labelStyle={AuthStyles.lb}
        onPress={props.onSignInHandler}
        accessible={true}
      >
        go back
      </Button>
    </KeyboardAvoidingView>
  )
}

export default React.memo(InputWrapperForgot);

const styles = StyleSheet.create({
    view:{
        marginVertical:10
    },
    mgn:{
        marginVertical:10
    }
})