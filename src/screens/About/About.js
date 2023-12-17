// import { View } from "react-native"
// import { styles } from "./style"
// import { Text } from "react-native"

// function About() {
//     return (
//         <View style={{flex: 1 , justifyContent : "center" , alignItems : "center"}}>
//             <Text>About Screen</Text>
//         </View>
//     )
// }
// export default About

import * as React from 'react';
import { Button, View, Text , Image, SafeAreaView ,TextInput,TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation'
import AIcon from 'react-native-vector-icons/Entypo'
import BIcon from 'react-native-vector-icons/FontAwesome'


const image = require("../../assets/image3.png");


function Login({ navigation }) {













    return (
        <ScrollView style={{backgroundColor : "#fff"}}>
          <KeyboardAvoidingView style={{flex : 1}}>


      <View style={{flex : 1}}>

      <View style={{ flex: 2 ,backgroundColor : "white",display : "flex",flexDirection : "row"}}>
        <Image source={image} style={{ width: 100, height: 100,objectFit : "contain"}}/>
        <Text style={{ color: "#024220", fontSize: 28, fontFamily: "Kreon-Bold" , marginLeft : 25,marginTop : 28}}>Just EAT</Text>
        
      </View>
      <View style={{flex :5,backgroundColor : "white"}}>

      <View style={{marginTop : 10}}>
      </View>
      <SafeAreaView>
       <View style={{color : "black",flexDirection: "row",alignItems : "center",height: 40,margin: 12,borderWidth: 1,backgroundColor :"#D6FFD9" }}>

        <Icon style={{marginLeft : 10}} name="mail" size={25} />
    <TextInput
        // style={{width : 300,color : "black"}}
        placeholder="Enter Email Address"
        
        />
        </View>
        <View style={{color : "black",flexDirection: "row",alignItems : "center",height: 40,margin: 12,borderWidth: 1,backgroundColor :"#D6FFD9" }}>
        <AIcon style={{marginLeft : 10}} name="lock" size={25} />
      <TextInput
        placeholder="Password"
        keyboardType="numeric"
        />
        </View>
        </SafeAreaView>
        <View style={{justifyContent : "center",alignItems : "center"}}>

        <View style={{marginTop : 20,flexDirection : "row",backgroundColor :"#D6FFD9", padding: 19, width :100, justifyContent: "center", alignItems: "center", borderRadius : 100 ,gap : 8,paddingRight :30}}>
        <BIcon style={{marginLeft : 10}} name="user" size={25} />
        <TouchableOpacity>
                            <Text style={{fontSize: 18, color:"#024220", fontFamily : "Kreon-Bold"}}>
                                Login
                            </Text>
        </TouchableOpacity>
        </View>
        <Text style={{color: "#024220", fontSize: 28, fontFamily: "Kreon-Bold",marginTop : 20}}>new user for Just EAT</Text>
        <View style={{marginTop : 20,backgroundColor :"#024220", padding: 10, width :100, justifyContent: "center", alignItems: "center", borderRadius : 30 ,paddingLeft : 20 , paddingRight : 20}}>
        
        <TouchableOpacity onPress={()=> navigation.navigate("Sign")}>
                            <Text style={{fontSize: 18, color:"#D6FFD9", fontFamily : "Kreon-Bold",justifyContent : "center",alignItems:"center"}}>
                                SignUp Now
                            </Text>
        </TouchableOpacity>
        </View>
        </View>
    </View>
   

      </View>
      
          </KeyboardAvoidingView>
        </ScrollView>
    );
  }
  export default Login