import { KeyboardAvoidingView, StyleSheet, Text, View,Alert } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { AuthStyles } from "../../styles/AuthStyles";
import { rgba } from "../../globals/Colors";
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik'
import * as yup from 'yup' 
import {auth,db} from '../../screens/auth/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref,child,set } from "firebase/database";
interface input {
  onSignInHandler?(): void;
  onSignUpHandler?(): void;
}

const InputWrapperRegister = (prop: input) => {
  const navigation = useNavigation();
  const ReviewSchem=yup.object({
    Firstname:yup.string().required().min(3),
    Lastname:yup.string().required().min(3),
    email:yup.string().required().min(6),
    password:yup.string().required().min(6),
})
const addUser= async (data)=>{
  try{
    const {uid,email,password,Firstname,Lastname} =data
await createUserWithEmailAndPassword(auth,
email.trim().toLowerCase(),password).then(res =>{
 
    
   const StudentsRef= ref(db,`/CabRankClient`)
     const StudentChild=child(StudentsRef, res.user.uid)
     set(StudentChild,{
      Firstname:Firstname,
      Lastname:Lastname,
      email:email.trim().toLowerCase(),
      uid:res.user.uid
    })
    
    navigation.navigate('app')
    })
  }
  catch(error){
    if(error.code === 'auth/email-already-in-use'){
      Alert.alert(
        'That email address is already inuse'
      )
    }
    if(error.code === 'auth/invalid-email'){
      Alert.alert(
        'That email address is invalid'
      )
    }
    else{
      console.warn(error.code)
      // Alert.alert(error.code)
    }
    
  }
  
}
  return (
    <Formik
    initialValues={{Firstname:'',Lastname:'',email:'',password:'',}}
    validationSchema={ReviewSchem}
    onSubmit={(values,action)=>{
        action.resetForm()
        addUser(values)
    }}
    >
        {(props)=>(
    <KeyboardAvoidingView>
      <TextInput
        mode="outlined"
        label={"First Name"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
        onChangeText={props.handleChange('Firstname')}
        value={props.values.Firstname}
        onBlur={props.handleBlur('Firstname')}
      />
         <Text style={{color:'red',marginTop:-5}}>{props.touched.Firstname && props.errors.Firstname}</Text>
      <TextInput
        mode="outlined"
        label={"Last Name"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
        onChangeText={props.handleChange('Lastname')}
        value={props.values.Lastname}
        onBlur={props.handleBlur('Lastname')}
      />
         <Text style={{color:'red',marginTop:-5}}>{props.touched.Lastname && props.errors.Lastname}</Text>
      <TextInput
        mode="outlined"
        label={"Email address"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
        onChangeText={props.handleChange('email')}
        value={props.values.email}
        onBlur={props.handleBlur('email')}
      />
         <Text style={{color:'red',marginTop:-5}}>{props.touched.email && props.errors.email}</Text>
      <TextInput
        mode="outlined"
        label={"Password"}
        style={AuthStyles.input}
        activeOutlineColor={`${rgba.grey_4}`}
        secureTextEntry={true}
        onChangeText={props.handleChange('password')}
        value={props.values.password}
        onBlur={props.handleBlur('password')}
      />
         <Text style={{color:'red',marginTop:-5}}>{props.touched.password && props.errors.password}</Text>
      <Button
        mode="contained"
        contentStyle={AuthStyles.btnCon}
        style={AuthStyles.btnCon}
        labelStyle={AuthStyles.lbl}
        onPress={props.handleSubmit}
        accessible={true}
      >
        Sign Up
      </Button>

      <Button
        mode="outlined"
        style={AuthStyles.outBtn}
        labelStyle={AuthStyles.lb}
        onPress={prop.onSignInHandler}
        accessible={true}
      >
        Sign In
      </Button>
    </KeyboardAvoidingView>
     )}
     </Formik>
  );
};

export default React.memo(InputWrapperRegister);
