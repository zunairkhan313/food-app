import * as React from 'react';
import { Button, View, Text , Image, SafeAreaView ,TextInput,TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation'
import AIcon from 'react-native-vector-icons/Entypo'
import BIcon from 'react-native-vector-icons/FontAwesome'
import CIcon from 'react-native-vector-icons/AntDesign'
import DIcon from 'react-native-vector-icons/Entypo'
//import {auth , getAuth,app,setDoc,doc,createUserWithEmailAndPassword,db,signInWithEmailAndPassword}from '../../Firebase/Firebase';
import { initializeApp } from "firebase/app";
import {useState} from 'react';
import auth from '@react-native-firebase/auth';


const image = require("../../assets/image3.png");


function Sign({ navigation }) {

  const [email , setEmail] = useState("");
  const [name , setName] = useState("");
  const [password , setPassword] = useState("");
  // const [rePassword , setrePassword] = ("");
  const signup = async ()=>{
    
  // await createUserWithEmailAndPassword(auth, email, password)
   auth()
   .createUserWithEmailAndPassword(email,password)
  .then(() => {
    console.log('User account created & signed in!');
    navigation.navigate("About");
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  };




    return (
        <ScrollView style={{backgroundColor : "#fff"}}>
        <KeyboardAvoidingView  style={{flex : 1}}>

      <View style={{flex : 1}}>

      <View style={{ flex: 2 ,backgroundColor : "white",display : "flex",flexDirection : "row"}}>
        <Image source={image} style={{ width: 100, height: 100,objectFit : "contain"}}/>
        <Text style={{ color: "#024220", fontSize: 28, fontFamily: "Kreon-Bold" , marginLeft : 25,marginTop : 28}}>Just EAT</Text>
        
      </View>
      <View style={{flex :7,backgroundColor : "white"}}>
      <SafeAreaView>
       <View style={{color : "black",flexDirection: "row",alignItems : "center",height: 40,margin: 12,borderWidth: 1,backgroundColor :"#D6FFD9" }}>

        <Icon style={{marginLeft : 10}} name="mail" size={25} />
        <TextInput
        value={email}
        onChangeText={setEmail}
        // style={{width : 300,color : "black"}}
        placeholder="Enter Email Address"
        
        />
        </View>
       <View style={{color : "black",flexDirection: "row",alignItems : "center",height: 40,margin: 12,borderWidth: 1,backgroundColor :"#D6FFD9" }}>

        <BIcon style={{marginLeft : 10}} name="user" size={25} />
        <TextInput
         value={name}
         onChangeText={setName}
        // style={{width : 300,color : "black"}}
        placeholder="User Name"
        
        />
        </View>
       <View style={{color : "black",flexDirection: "row",alignItems : "center",height: 40,margin: 12,borderWidth: 1,backgroundColor :"#D6FFD9" }}>

        <AIcon style={{marginLeft : 10}} name="lock" size={25} />
        <TextInput
         value={password}
         onChangeText={setPassword}
        // style={{width : 300,color : "black"}}
        placeholder="Enter Password"
        
        />
        </View>
        {/* <View style={{color : "black",flexDirection: "row",alignItems : "center",height: 40,margin: 12,borderWidth: 1,backgroundColor :"#D6FFD9" }}>
        <AIcon style={{marginLeft : 10}} name="lock" size={25} />
      <TextInput
         onChange={(e)=> setrePassword(e.target.value)}
        placeholder="Confirm Password"
        
        />
        </View> */}
        </SafeAreaView>
        <View style={{justifyContent : "center",alignItems : "center"}}>


        <View style={{marginTop : 20,backgroundColor :"#024220", padding: 17, width :100, justifyContent: "center", alignItems: "center", borderRadius : 30 ,paddingLeft : 20 , paddingRight : 20}}>
        
        <TouchableOpacity>
                            <Text onPress={()=>signup()} style={{fontSize: 18, color:"#D6FFD9", fontFamily : "Kreon-Bold",justifyContent : "center",alignItems:"center"}}>
                                SignUp
                            </Text>
        </TouchableOpacity>
        </View>
        <View style={{flexDirection : "row" , justifyContent : "center" , alignItems : "center",marginTop : 20 ,gap : 8}}>
        <CIcon style={{marginLeft : 10,color:"red"}} name="google" size={30} />
        <DIcon style={{marginLeft : 10,color : "#1877F2"}} name="facebook-with-circle" size={30} />
        </View>
        </View>
    </View>
   

      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  export default Sign