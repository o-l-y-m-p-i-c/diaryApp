import React, {useContext,useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Context } from './src/Context';

import { Avatar ,Divider,Switch   } from "react-native-elements";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Stack = createNativeStackNavigator();

export default function App() {
  const [loading,setLoading] = useState(false)


  return (
    // <SafeAreaProvider>
      <Context.Provider value={{loading,setLoading}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            {/* <Stack.Screen name="Home">
              {props => <HomeScreen {...props} extraData={someData} />}
            </Stack.Screen> */}
          </Stack.Navigator>
        </NavigationContainer>
      </Context.Provider>
    // </SafeAreaProvider>
  );
}



function HomeScreen({navigation}) {
  const {loading,setLoading} = useContext(Context);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}
      errorMessage=""
      errorStyle={{}}
      errorProps={{}}
      inputStyle={{}}
      label="User Form"
      labelStyle={{}}
      labelProps={{}}
      leftIcon={<Icon name="account-outline" size={20} />}
      leftIconContainerStyle={{}}
      rightIcon={<Icon name="close" size={20} onPress={()=>alert('Close')} />}
      rightIconContainerStyle={{}}
      placeholder="Enter Name"
    />
    <Switch
      color="#2089dc"
      value={false}
      // onValueChange={() => }
    />
      <Text>Home Screen</Text>
      <Text>{loading ? "true": "false"}</Text>
      {/* <Avatar
      activeOpacity={0.2}
      avatarStyle={{}}
      containerStyle={{ backgroundColor: "#BDBDBD" }}
      icon={{}}
      iconStyle={{}}
      imageProps={{}}
      onLongPress={() => alert("onLongPress")}
      onPress={() => alert("onPress")}
      overlayContainerStyle={{}}
      placeholderStyle={{}}
      rounded
      size="large"
      source={{ uri: "" }}
      title="Pa"
      titleStyle={{}}
    /> */}
    <Icon
      color="#0CC"
      containerStyle={{}}
      disabledStyle={{}}
      iconProps={{}}
      iconStyle={{}}
      name="devices"
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      size={40}
      type="material"
    />
      <Button title="About screen" onPress={() => navigation.navigate('About')} />
      <Button title="LOG IN" onPress={() => setLoading(!loading)} />
    </View>
  );
}

function AboutScreen({navigation}) {
  const {loading,setLoading} = useContext(Context);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Text>{loading ? "true": "false"}</Text>
      <Divider
      style={{ width: "80%", margin: 20 }}
      color="#2089dc"
      insetType="left"
      subHeader="React native elements"
      subHeaderStyle={{}}
      width={1}
      orientation="horizontal"
    />
      <Button title="Home screen" onPress={() => navigation.navigate('Home')} />
      <Button title="LOG IN" onPress={() => setLoading(!loading)} />
    </View>
  );
}