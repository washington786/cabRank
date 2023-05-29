import { KeyboardAvoidingView, View, Alert, Text } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { rgba } from "../../globals/Colors";
import { AuthStyles } from "../../styles/AuthStyles";
import { Formik } from "formik";
import * as yup from "yup";
import { auth } from "../../screens/auth/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
interface input {
  onPressHandler?(): void;
  onPasswordBtnhandler?(): void;
  onSignUpHandler?(): void;
}

const InputWrapperLogin = (prop: input) => {
  const navigation = useNavigation();
  const ReviewSchem = yup.object({
    email: yup.string().required().min(6),
    password: yup.string().required().min(6),
  });
  const Submit = async (data) => {
    try {
      const { email, password } = data;
      await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password
      ).then(async (res) => {
        try {
          const jsonValue = JSON.stringify(res.user);
          await AsyncStorage.setItem("CabRankClient", res.user.uid);
          navigation.navigate("app");
        } catch (e) {
          // saving error
          console.log("no data");
        }
      });
    } catch (error) {
      Alert.alert(error.name, error.message);
    }
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={ReviewSchem}
      onSubmit={(values, action) => {
        action.resetForm();
        Submit(values);
      }}
    >
      {(props) => (
        <KeyboardAvoidingView>
          <TextInput
            mode="outlined"
            label={"Email address"}
            style={AuthStyles.input}
            activeOutlineColor={`${rgba.grey_4}`}
            onChangeText={props.handleChange("email")}
            value={props.values.email}
            onBlur={props.handleBlur("email")}
          />
          <Text style={{ color: "red", marginTop: -15 }}>
            {props.touched.email && props.errors.email}
          </Text>
          <TextInput
            mode="outlined"
            label={"Password"}
            style={AuthStyles.input}
            activeOutlineColor={`${rgba.grey_4}`}
            secureTextEntry={true}
            onChangeText={props.handleChange("password")}
            value={props.values.password}
            onBlur={props.handleBlur("password")}
          />
          <Text style={{ color: "red", marginTop: -15 }}>
            {props.touched.password && props.errors.password}
          </Text>
          <Button
            mode="text"
            onPress={prop.onPasswordBtnhandler}
            style={AuthStyles.btn}
          >
            Forgot Password?
          </Button>
          <Button
            mode="contained"
            contentStyle={AuthStyles.btnCon}
            style={AuthStyles.btnCon}
            labelStyle={AuthStyles.lbl}
            onPress={() => console.log("login clicked!!")}
            accessible={true}
          >
            Sign In
          </Button>

          <Button
            mode="outlined"
            style={AuthStyles.outBtn}
            labelStyle={AuthStyles.lb}
            onPress={prop.onSignUpHandler}
            accessible={true}
          >
            Sign Up
          </Button>
        </KeyboardAvoidingView>
      )}
    </Formik>
  );
};

export default React.memo(InputWrapperLogin);
