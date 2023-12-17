// import AppNavigation from "./src/navigation"
// import { SafeAreaView, View, TextInput } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import IntroSlider from "./src/components/IntroSlider";
// import { ApplicationProvider } from '@ui-kitten/components';
// import * as eva from '@eva-design/eva';
// import HomeScreen from "./src/screens/Home/Home";



import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home/Home';
import Login from './src/screens/About/About';
import Sign from './src/screens/Sign/Sign';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerShown : false}}
        />
        <Stack.Screen name="About" component={Login}
          options={{headerShown : false}}        
        />
        <Stack.Screen name="Sign" component={Sign}
          options={{headerShown : false}}        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;





// function App() {
//     return (
//       // <AppNavigation/>
//        <ApplicationProvider {...eva} theme={eva.light}>

//         <SafeAreaView style={{ flex: 1 , backgroundColor : "#fff"}}>

//            <HomeScreen/>
//         </SafeAreaView>
//         </ApplicationProvider>
//     )
// }
// export default App