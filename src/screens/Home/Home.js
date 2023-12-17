// import { useRef } from 'react';
// import { Image, Text, TouchableOpacity, View ,Button} from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import About from "../About/About";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from '@react-navigation/native';

// const slides = [
//     {
//         // image : require('../assets/image3.png'),
//         text : "Free Delivery Offers",
//         desc : "Free delivery for new customers via credit card and other payment method"
//     },


// ]

// function HomeScreen({ navigation }) {

//     return (
//         <View style={{flex : 1}}>
//             <AppIntroSlider

//             activeDotStyle={{backgroundColor : "#024220" , borderRadius : 20 , width : 20}}
//                 data={slides}
//                 renderItem={({ item }) => 
//                 <View style={{flex : 1 , justifyContent : "center",alignItems : "center"}}>
//                     {/* <Image style={{width : "80%" , height : 400 , objectFit : "contain"}} source={item.image}/> */}
//                     <Text style={{color : "#024220" , fontSize : 32 ,fontFamily : "Kreon-Bold"}}>
//                         {item.text}
//                     </Text>
//                     <Text style={{color : "rgba(2,66,32 ,0.5)",fontSize : 18 , textAlign : "center"}}>
//                         {item.desc}
//                     </Text>
//                     <Button style={{backgroundColor : "#024220" , padding : 10 , width : "50%" , borderRadius : 10 , marginTop : 20,marginBottom : 80 , justifyContent : "center" , alignItems : "center"}}
//                          title="Go to Details"
//                          onPress={() => navigation.navigate('About')}

//                     />
//                 </View>
//             }
//             />
//         </View>
//     )
// }
// export default HomeScreen

import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
    {
        image: require("../../assets/image3.png"),
        text: "Free Delivery Offers",
        desc: "Free delivery for new customers via credit card and other payment method"
    },


]



function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <AppIntroSlider

                activeDotStyle={{ backgroundColor: "#024220", borderRadius: 20, width: 20 }}
                data={slides}
                renderItem={({ item }) =>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ width: "80%", height: 400, objectFit: "contain" }} source={item.image} />
                        <Text style={{ color: "#024220", fontSize: 32, fontFamily: "Kreon-Bold" }}>
                            {item.text}
                        </Text>
                        <Text style={{ color: "rgba(2,66,32 ,0.5)", fontSize: 18, textAlign: "center" }}>
                            {item.desc}
                        </Text>
                        <TouchableOpacity style={{backgroundColor: "#024220", padding: 10, paddingRight: 50, paddingLeft: 50, borderRadius: 10, marginTop: 20, marginBottom: 80, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate('About')}>
                            <Text style={{fontSize: 18, color: "white"}}>
                                GET STARTED
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            />
        </View>
    );
}
export default HomeScreen  