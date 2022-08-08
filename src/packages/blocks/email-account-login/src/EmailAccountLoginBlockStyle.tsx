import { StyleSheet } from "react-native";
import scale, { verticalScale } from "../../../components/src/Scale";
import { COLORS } from "../../../framework/src/Globals";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    // marginLeft: "auto",
    // marginRight: "auto",
    // width: Platform.OS === "web" ? "75%" : "100%",
    // maxWidth: 650,
    backgroundColor: "#ffffffff"
  },

  logoContainer: {
    // justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(50),
    // marginLeft:scale(18)
  },

  logoStyles: {
    height: verticalScale(50),
    width: scale(280)
  },

  logoTextStyle: {
    fontWeight: "500",
    textAlign: "center", 
    fontSize:scale(14),
  },
  TextsmallStyle:{
    fontWeight: "500",
    // textAlign: "center", 
    fontSize:scale(14),
  },
  logoTextView: {
    marginTop: verticalScale(12),
  //  marginLeft:scale(10)
  
  },

  inputContainerView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(180)
  },
  phoneNumberText: {
    paddingLeft: scale(50),
    fontSize:scale(14),
    // bottom: verticalScale(3),
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingBottom: scale(4),
    color: COLORS.black10
  },
  inputboxstyle: {
    width: scale(320),
    height: verticalScale(54),
    marginVertical:verticalScale(8),
    // borderWidth: scale(1),
    borderRadius: scale(8),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  lineStyle: {
    width: scale(1),
    height: verticalScale(52),
    // borderWidth: scale(0.7),
    borderRadius: scale(8),
    backgroundColor: COLORS.lightPink,
  },
  countryCodeStyle: {
    alignSelf: "center",
    fontSize: scale(14)
  },
  textInputzStyle: {
    width: scale(250),
    height: verticalScale(55),
    // backgroundColor: 'red',
    fontWeight: "bold",
    fontSize: scale(15)
  },

  submitButtonContainer: {
    width: scale(327),
    height: verticalScale(55),
    borderRadius: scale(8),
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: verticalScale(30)
  },
  submitButtonText: {
    fontWeight: "bold",
    fontSize: scale(19),
    color: "#FFFFFF",
    alignSelf: "center"
  },
  socialContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(16)
  },
  TextOr: {
    fontWeight: "bold",
    fontSize: scale(20)
  },
  imageStyle: {
    flexDirection: "row",
    marginTop: verticalScale(16)
  },

  facebookImagestyle: {
    width: scale(50),
    height: verticalScale(50),
    alignSelf: "center"
  },
  googleImagestyle: {
    width: scale(50),
    height: verticalScale(50),
    alignSelf: "center",marginHorizontal:scale(20)
  },
  appleIconStyle: {
    width: scale(46),
    height: verticalScale(46),
    alignSelf: "center",
    marginHorizontal:scale(20)
  },
  appleImageView: {
    width: scale(60),
    height: verticalScale(60),
    borderRadius: scale(60),
    backgroundColor: "#000000",
    left: scale(40)
  },
  faceBookImageView: {
    width: scale(46),
    height: verticalScale(46),
    borderRadius: scale(20),
    backgroundColor: "#3C5998"
  },
  alreadyHaveStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(50),
    marginBottom: verticalScale(18)
  },
  newAccountText: {
    fontSize: scale(15),
    fontWeight: "600",
    color: COLORS.black10,
    letterSpacing: scale(-0.35)
  },
  loginText: {
    fontSize: scale(15),
    fontWeight: "600",
    // left: scale(7),
    color: COLORS.darkPink,
    textDecorationLine: "underline"
  },
  bottonView: {
    width: scale(64),
    height: verticalScale(1),
    borderRadius: scale(8),
    borderWidth: scale(1),
    top: verticalScale(2),
    left: scale(5),
    borderColor: "#d170db"
  },
  arrowStyle: {
    height: verticalScale(12),
    width: scale(15),
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    
  }
});
export default styles;
