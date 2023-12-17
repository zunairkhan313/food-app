// import { useRef } from 'react';
// import { Image, Text, TouchableOpacity, View ,Button} from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from '@react-navigation/native';

// const slides = [
//     {
//         image : require('../assets/image3.png'),
//         text : "Free Delivery Offers",
//         desc : "Free delivery for new customers via credit card and other payment method"
//     },
 
    
// ]

// function IntroSlider() {
//     const slider = useRef()
//     return (
//         <View style={{flex : 1}}>
//             <AppIntroSlider
            
//             activeDotStyle={{backgroundColor : "#024220" , borderRadius : 20 , width : 20}}
//                 data={slides}
//                 renderItem={({ item }) => 
//                 <View style={{flex : 1 , justifyContent : "center",alignItems : "center"}}>
//                     <Image style={{width : "80%" , height : 400 , objectFit : "contain"}} source={item.image}/>
//                     <Text style={{color : "#024220" , fontSize : 32 ,fontFamily : "Kreon-Bold"}}>
//                         {item.text}
//                     </Text>
//                     <Text style={{color : "rgba(2,66,32 ,0.5)",fontSize : 18 , textAlign : "center"}}>
//                         {item.desc}
//                     </Text>
//                     <Button }
//                          title="Go to Details"
//                          onPress={() => navigation.navigate('About')}

//                     />
//                 </View>
//             // }
//             />
//         </View>
//     )
// }
// export default IntroSlider