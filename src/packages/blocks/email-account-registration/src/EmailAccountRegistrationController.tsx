import { IBlock } from "../../../framework/src/IBlock";
import { Message } from "../../../framework/src/Message";
import { BlockComponent } from "../../../framework/src/BlockComponent";
import { runEngine } from "../../../framework/src/RunEngine";
import MessageEnum, {
  getName
} from "../../../framework/src/Messages/MessageEnum";
import StorageProvider from "../../../framework/src/StorageProvider";
import { getStorageData, setStorageData } from "../../../framework/src/Utilities";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-community/google-signin";
// Customizable Area Start
import { imgPasswordInVisible, imgPasswordVisible } from "./assets";
import { Alert ,Platform} from "react-native";
import { LoginManager, AccessToken } from "react-native-fbsdk";

// Customizable Area End

export const configJSON = require("./config");

export interface Props {
  navigation: any;
  id: string;
}

export interface S {
  // Customizable Area Start

  countryCodeSelected: string;
  phoneNumber: any;
  isLoading: boolean;
  googleToken: any;
  userInfo: any;
  loginType: any
  // Customizable Area End
}

export interface SS {
  // Customizable Area Start
  id: any;
  // Customizable Area End
}

export default class EmailAccountRegistrationController extends BlockComponent<
  Props,
  S,
  SS
> {
  // Customizable Area Start


  currentCountryCode: any;
  createAccountApiCallId: any;
  toastRef: any;
  apiGoogleLoginCallId: any;
  apiFacebookLoginCallId:any

  // Customizable Area End

  constructor(props: Props) {
    super(props);
    this.receive = this.receive.bind(this);

    // Customizable Area Start
    // Customizable Area Start
    this.subScribedMessages = [
      getName(MessageEnum.AccoutLoginSuccess),
      getName(MessageEnum.RestAPIResponceMessage),
      getName(MessageEnum.ReciveUserCredentials),
    ];

    runEngine.attachBuildingBlock(this, this.subScribedMessages);

    this.state = {

      countryCodeSelected: "91",
      phoneNumber: '',
      isLoading: false,
      googleToken: '',
      userInfo: '',
      loginType: ''
    };

    runEngine.attachBuildingBlock(this as IBlock, this.subScribedMessages);

  }
  async componentWillUnmount() {
    runEngine.unSubscribeFromMessages(this, this.subScribedMessages);

  }

  async componentDidMount() {
    this.props.navigation.addListener("didFocus", () => {
      this.setupGoogleConfiguration();
    });
  }
  setUserToken = async (userData: any) => {
    let userToken = await StorageProvider.set("SignToken", userData);
    console.log("@@@ User Token==================", userToken);
  };
  setToken = async (userData: any) => {
    console.log("@@@ userData Token==================", userData);
    let userToken = await StorageProvider.set("authToken", userData);
    console.log("@@@ User Token==================", userToken);
  };
  async receive(from: string, message: Message) {
    console.log('@@@ API MESSAGE SIGNUP =================', message);
    if (getName(MessageEnum.RestAPIResponceMessage) === message.id) {
      const apiRequestCallId = message.getData(
        getName(MessageEnum.RestAPIResponceDataMessage)
      );

      var responseJson = message.getData(
        getName(MessageEnum.RestAPIResponceSuccessMessage)
      );
      console.log("responseJson", responseJson)
      var errorReponse = message.getData(
        getName(MessageEnum.RestAPIResponceErrorMessage)
      );

      console.log("errorReponse", errorReponse)

      if (responseJson && !responseJson.errors) {
        console.log("responseIfcondition", responseJson)
        if (apiRequestCallId === this.createAccountApiCallId) {
          this.onSignUpUserSuccessCallBack(responseJson);
        } else if (apiRequestCallId === this.apiGoogleLoginCallId) {
          this.onGoogleSignUpUserSuccessCallBack(responseJson);
        }
        else if (apiRequestCallId === this.apiFacebookLoginCallId) {
          this.onFacebookSignUpUserSuccessCallBack(responseJson);
        }

      } else if (responseJson && responseJson.errors) {
        console.log("responseElsecondition", responseJson)
        if (apiRequestCallId === this.createAccountApiCallId) {
          this.onSignUpUserFailureCallBack(responseJson);
        }
        else if (apiRequestCallId === this.apiGoogleLoginCallId) {
          this.onGoogleSignUpUserFailureCallBack(responseJson);
        }
        else if (apiRequestCallId === this.apiFacebookLoginCallId) {
          this.onFacebookSignUpUserFailureCallBack(responseJson);
        }

      }
      else if (errorReponse) {
        console.log("errorReponse", errorReponse)
        this.setState({ isLoading: false })

      }
    }
  }
  onGoogleSignUpUserSuccessCallBack = async (responseJson: any) => {
    console.log('@@@ Sign Up User Success CallBack =============', responseJson);
    this.setToken(responseJson.meta.token)
    this.setState({ isLoading: false })

    if(responseJson.meta.token){
      this.props.navigation.navigate('PortfolioManagement')
     
     }
  }

  onGoogleSignUpUserFailureCallBack = async (error: any) => {
    console.log('@@@ Sign Up User Error CallBack =============', error);
  }


  onFacebookSignUpUserSuccessCallBack = async (responseJson: any) => {
    console.log('@@@ Sign Up Facebook  User Success CallBack =============', responseJson);
    this.setToken(responseJson.meta.token)
  }

  onFacebookSignUpUserFailureCallBack = async (error: any) => {
    console.log('@@@ Sign Up Facebook User Error CallBack =============', error);
  }

  setupGoogleConfiguration = async () => {
    //initial configuration
    GoogleSignin.configure({
      //It is mandatory to call this method before attempting to call signIn()
      // scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      // Repleace with your webClientId generated from Firebase console
      webClientId:
        "618894992047-i3ppuou5kmbk6g1ufi4rg5ohaea608nl.apps.googleusercontent.com",
    });
  };

  onSignUpUserSuccessCallBack = async (res: any) => {
    console.log('@@@ Sign Up User Success CallBack =============', res);
    this.setUserToken(res.meta.token)
    this.setState({ isLoading: false })

    this.props.navigation.navigate("OTPInputAuth", {
      userDetails: res.data.attributes,
    })

  }

  onSignUpUserFailureCallBack = async (error: any) => {
    console.log('@@@ Sign Up User Error CallBack =============', error);
    this.setState({ isLoading: false })
    let errMg = error.errors[0].full_phone_number && error.errors[0].full_phone_number

    if (errMg) {
      alert(errMg)
    } else {
      Alert.alert(
        'Alert',
        'User is already registerd, try to Login',
        [
          { text: 'OK', onPress: () => this.props.navigation.navigate('EmailAccountLoginBlock') },
        ],
      )
    }


  }

  apiCall = async (data: any) => {
    const { contentType, method, endPoint, body } = data;
    const header = {
      "Content-Type": contentType,
      //token: ""
    };
    const requestMessage = new Message(
      getName(MessageEnum.RestAPIRequestMessage)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestHeaderMessage),
      JSON.stringify(header)
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIResponceEndPointMessage),
      endPoint
    );
    requestMessage.addData(
      getName(MessageEnum.RestAPIRequestMethodMessage),
      method
    );
    body &&
      requestMessage.addData(
        getName(MessageEnum.RestAPIRequestBodyMessage),
        JSON.stringify(body)
      );
    runEngine.sendMessage(requestMessage.id, requestMessage);
    return requestMessage.messageId;
  };


  createAccount = async () => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pattern = /^[0-9\b]+$/;
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    if (!pattern.test(this.state.phoneNumber) || this.state.phoneNumber.length != 10) {

      this.toastRef.show("Please enter valid 10 digits number.")
      return;
    }
    let signupData = {
      data: {
        attributes: {
          full_phone_number: this.state.countryCodeSelected + this.state.phoneNumber
        }
      }
    }


    console.log("signupData@@@@@@", signupData);

    this.setState({ isLoading: true })

    this.createAccountApiCallId = await this.apiCall({
      contentType: configJSON.contentTypeApiAddDetail,
      method: configJSON.apiMethodTypeAddDetail,
      endPoint: configJSON.accountsAPiEndPoint,
      body: signupData,
    });
  }


  onPressGoogleSignIn = async () => {
    //Prompts a modal to let the user sign in into your application.
    try {
      await GoogleSignin.hasPlayServices({
        //Check if device has Google Play Services installed.
        //Always resolves to true on iOS.
        showPlayServicesUpdateDialog: true,
      });
      const userInfo = await GoogleSignin.signIn();
      const userToken = await GoogleSignin.getTokens();
      // let fcmToken = await AsyncStorage.getItem('USER_FCM_TOKEN');
      console.log("@@@ Google SignIn Response info =========== ", userInfo);
      console.log("@@@ Google SignIn Response token =========== ", userToken);
      if (userToken) {
        this.setState(
          { googleToken: userToken.idToken, userInfo: userInfo },
          () => {
            this.onGoogleLogin();
          }
        );
      }
    } catch (error) {
      console.log("@@@ Message ==============================", error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User Cancelled the Login Flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Signing In");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play Services Not Available or Outdated");
      } else {
        console.log("Some Other Error Happened");
      }
    }
  };
  onGoogleLogin = async () => {

    console.log("this.state.userInfo.name", this.state.userInfo.user.name)
    let splitNAme = this.state.userInfo && this.state.userInfo.user && this.state.userInfo.user.name.split(' ')
    console.log("@@@@@@splitNAme", splitNAme)

    let logInData = {
      email: this.state.userInfo.user.email,
      id: this.state.googleToken,
      first_name: splitNAme[0],
      last_name: splitNAme[1]
    }

    console.log("logInData google", logInData);
    this.setState({ isLoading: true });
    this.apiGoogleLoginCallId = await this.apiCall({
      contentType: configJSON.contentTypeApiAddDetail,
      method: configJSON.apiMethodTypeAddDetail,
      endPoint: configJSON.loginAPiEndPoint,
      body: logInData,
    });
  };

  onPressLoginWithFacebook = () => {
    if (Platform.OS === "android") {
      LoginManager.setLoginBehavior("web_only")
    }
    LoginManager.logInWithPermissions(["public_profile", "email", ""]).then((result:any) => {
      console.log('@@@ facebook  Result ========', result);
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        AccessToken.getCurrentAccessToken().then((data:any) => {
          const { accessToken } = data
          console.log('@@@ Access Token ===========', accessToken);
          if (accessToken) {
            this.setState({ googleToken: accessToken }, () => {
              this.initUser(accessToken)
            })
          }
        })
        console.log(
          "@@@ ==== Login success with permissions: " +
          result.grantedPermissions.toString()
        );
      }
    },
      function (error) {
        console.log("@@@ ==== Login fail with error: " + error);
      }
    );
  }

  initUser = async (token:any) => {

    console.log("priyanka",token)
    fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
      .then((response) => {
        response.json().then((json) => {
          console.log('@@@ Facebook Login Response ============', json);
           this.facebookSignup()
        })
      })
      .catch((error:any) => {
        console.log('ERROR GETTING DATA FROM FACEBOOK',error)
      })
  }

facebookSignup = async () =>{
  
  let logInData = {
    access_token: this.state.googleToken,
   
  }

  console.log("logInData fb", logInData);
  this.setState({ isLoading: true });
  this.apiFacebookLoginCallId = await this.apiCall({
    contentType: configJSON.contentTypeApiAddDetail,
    method: configJSON.apiMethodTypeAddDetail,
    endPoint: configJSON.loginFacebookAPiEndPoint,
    body: logInData,
  });
}
  // Customizable Area End
}
