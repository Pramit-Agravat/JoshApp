import React from "react";
// Customizable Area Start
import { 
  StyleSheet, 
  Text, 
  Image, 
  View, 
  SafeAreaView ,
  StatusBar
} from "react-native";
// Customizable Area End

import SplashscreenController, { Props } from "./SplashscreenController";
import scale, { verticalScale } from "../../../components/src/Scale";

import { splashLogo } from "./assets";
import StorageProvider from "../../../framework/src/StorageProvider";
import {  removeStorageData } from "../../../framework/src/Utilities";

export default class Splashscreen extends SplashscreenController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }


  async componentDidMount() {

    // setTimeout(() => {
    //   this.goToHome()

    // },2000)
    await removeStorageData('SignToken');

    const value = await StorageProvider.get('authToken');
    const valuePP = await StorageProvider.get('SignToken');

    console.log('value@@@@@@@@====================================',value,"priyavaluePP",valuePP);
    setTimeout(() => {
      if (value) {
        this.props.navigation.replace("BottomTabNavigator")
      }
      else {
        this.props.navigation.replace("EmailAccountLoginBlock")
      }
    }, 2000);
  

}
  
 render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FFF" translucent = {true}/>

      {/* Customizable Area Start */}
        <View style={styles.logoView}>
          <Image source={splashLogo}  resizeMode="contain" 
          style={{width:scale(320), height:verticalScale(120)}}
          />
  
        </View>
      {/* Customizable Area End */}
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  logoView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
// Customizable Area End
