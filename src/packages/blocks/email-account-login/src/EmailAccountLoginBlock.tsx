import React from "react";

// Customizable Area Start
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView
} from "react-native";
import { Logo, GoogleImage, FaceBookImage, AppleImage ,downArrow} from "./assets";
import EmailAccountLoginController from "./EmailAccountLoginController";
import CountryCodeSelector from "../../country-code-selector/src/CountryCodeSelector";
import Toast from "react-native-easy-toast";
import Loader from "../../../components/src/Loader";
import { COLORS } from "../../../framework/src/Globals";

import styles from "./EmailAccountLoginBlockStyle";
export const configJSON = require("./config");

export default class EmailAccountLoginBlock extends EmailAccountLoginController {
  renderLogoContainer = () => {
    return (
      <View style={styles.logoContainer}>
        <Image source={Logo} resizeMode="contain" style={styles.logoStyles} />
        <View style={styles.logoTextView}>
          <Text style={styles.logoTextStyle}>{configJSON.logoText1}</Text>
          <Text style={styles.logoTextStyle}>{configJSON.logoText2}</Text>
        </View>
      </View>
    );
  };

  renderInputContainer = () => {
    const { navigation } = this.props;

    return (
      <View style={styles.inputContainerView}>
        <Text style={styles.phoneNumberText}>
          {configJSON.loginInputTextName}
        </Text>
        <View style={[styles.inputboxstyle,{borderColor: this.state.phoneNumber ? COLORS.darkPink:COLORS.lightPink ,borderWidth:  this.state.phoneNumber ? 1.4 : 1}]}>
          <CountryCodeSelector
            style={styles.countryCodeStyle}
            navigation={navigation}
            id={"CountryCodeSelector"}
            placeHolder={"+91"}
            disable={false}
            value={this.state.countryCodeSelected}
          />
          
          <View style={[styles.lineStyle,{borderColor: this.state.phoneNumber ?  COLORS.darkPink: COLORS.lightPink,borderWidth:  this.state.phoneNumber ? 1 : 0.7}]} />
          <TextInput
            style={styles.textInputzStyle}
            testID={"txtInputPhone"}
            keyboardType="number-pad"
            placeholder="Enter your phone number"
            onChangeText={text => this.setState({ phoneNumber: text })}
            value={this.state.phoneNumber}
            autoCapitalize="none"
            // maxLength={10}
          />
        </View>
      </View>
    );
  };

  rendreSubmitButtonContainer = () => {
    return (
      <TouchableOpacity
        style={styles.submitButtonContainer}
        testID={"btnPhoneLogIn"}
        onPress={() => this.onLogin()}>
        <Text style={styles.submitButtonText}>{configJSON.sendOtp}</Text>
      </TouchableOpacity>
    );
  };

  renderSocialContainer = () => {
    return (
      <View style={styles.socialContainerStyle}>
        <Text style={styles.TextOr}>Or</Text>
        <View style={styles.imageStyle}>
          <TouchableOpacity testID={"btnSocialLogin"} onPress={()=>this.onPressGoogleSignIn()}>
            <Image
              resizeMode="contain"
              source={GoogleImage}
              style={styles.googleImagestyle}
            />
          </TouchableOpacity>
          <TouchableOpacity testID={"btnSocialLogin"} onPress={()=>this.onPressLoginWithFacebook()}>
            <Image
              resizeMode="contain"
              source={FaceBookImage}
              style={styles.facebookImagestyle}
            />
          </TouchableOpacity>
          <TouchableOpacity testID={"btnSocialLogin"}>
            <Image
              resizeMode="contain"
              source={AppleImage}
              style={styles.appleIconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderAlreadyHaveAccountContainer = () => {
    return (
      <View style={styles.alreadyHaveStyle}>
        <Text style={styles.newAccountText}>{configJSON.alreadyHaveText}</Text>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("EmailAccountRegistration")}>
          <Text style={styles.loginText}>{configJSON.registerText}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      // Required for all blocks
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.container}>
          <Loader loading={this.state.isLoading} />
          {this.renderLogoContainer()}
          {this.renderInputContainer()}
          {this.rendreSubmitButtonContainer()}
          {this.renderSocialContainer()}
          {this.renderAlreadyHaveAccountContainer()}
        </ScrollView>
        <Toast
          ref={toast => (this.toastRef = toast)}
          position={"top"}
          style={{ backgroundColor: "rgb(240,64,148)" }}
        />
      </SafeAreaView>
    );
  }
}

// Customizable Area Start
// tomizable Area End
