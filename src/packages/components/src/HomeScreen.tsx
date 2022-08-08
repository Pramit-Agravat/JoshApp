import React from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  // Customizable Area Start
  // Customizable Area End
} from "react-native";
import { BlockComponent } from "../../framework/src/BlockComponent";
import AlertBlock from '../../blocks/alert/src/AlertBlock';
import CustomTextItem from "./CustomTextItem";
import NavigationBlock from "../../framework/src/Blocks/NavigationBlock";
import SingletonFactory from '../../framework/src/SingletonFactory';

import HomeScreenAdapter from '../../blocks/adapters/src/HomeScreenAdapter';
import InfoPageAdapter from '../../blocks/adapters/src/InfoPageAdapter';
import AlertPageWebAdapter from "../../blocks/adapters/src/AlertPageWebAdapter";

// Customizable Area Start
import PrivacyPolicyAdapter from "../../blocks/adapters/src/PrivacyPolicyAdapter";
import TermsAndConditionAdapter from "../../blocks/adapters/src/TermsAndConditionAdapter";
import SplashScreenAdapter from "../../blocks/adapters/src/SplashScreenAdapter";
import SocialMediaLogInAdapter from "../../blocks/adapters/src/SocialMediaLogInAdapter";
import EmailAccountLogInAdapter from "../../blocks/adapters/src/EmailAccountLogInAdapter";
import EmailAccountSignUpAdapter from "../../blocks/adapters/src/EmailAccountSignUpAdapter";
import ForgotPasswordAdapter from "../../blocks/adapters/src/ForgotPasswordAdapter";
import MobilePhoneToOTPAdapter from "../../blocks/adapters/src/MobilePhoneToOTPAdapter";
import OtpToNewPasswordAdapter from "../../blocks/adapters/src/OtpToNewPasswordAdapter";

//Assembler generated adapters start
const socialMediaLogInAdapter = new SocialMediaLogInAdapter();
const emailAccountLogInAdapter = new EmailAccountLogInAdapter();
const emailAccountSignUpAdapter = new EmailAccountSignUpAdapter();
const forgotPasswordAdapter = new ForgotPasswordAdapter();
const mobilePhoneToOTPAdapter = new MobilePhoneToOTPAdapter();
const otpToNewPasswordAdapter = new OtpToNewPasswordAdapter();

//Assembler generated adapters end



const privacyAdapter = new PrivacyPolicyAdapter();
const termAndConditionAdapter = new TermsAndConditionAdapter();
const splashScreenAdapter = new SplashScreenAdapter();
// Customizable Area End


const restAPIBlock = SingletonFactory.getRestBlockInstance();
const alertBlock = new AlertBlock();
const navigationBlock = new NavigationBlock();
const sessionBlock = SingletonFactory.getSessionBlockInstance();
const userAccountManagerBlock = SingletonFactory.getUserManagerInstance();
const homeScreenAdapter = new HomeScreenAdapter();
const infoPageAdapter = new InfoPageAdapter();
const alertPageWebAdapter = new AlertPageWebAdapter()

const instructions = Platform.select({
  // Customizable Area Start
  ios: "The iOS APP to rule them all!",
  android: "Now with Android AI",
  web: "Selector your adventure."
  // Customizable Area End
});

interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

// Customizable Area Start
interface S { }

interface SS { }

class HomeScreen extends BlockComponent<Props, S, SS> {

  static instance:HomeScreen;

  constructor(props: Props) {
    super(props);
    HomeScreen.instance = this;
  }

  render() {
    const { navigation } = this.props;
    const _this = this;

    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView} bounces={false}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.welcome}>
                Welcome to JoshFanapp!
              </Text>
            </View>

            <Text style={styles.instructions}>{instructions}</Text>
            <Text style={styles.header}>DEFAULT BLOCKS</Text>
            <CustomTextItem
              content={'InfoPage'}
              onPress={() => navigation.navigate("InfoPage")}
            />
            <CustomTextItem
              content={'Alert'}
              onPress={() => this.showAlert("Example", "This happened")}
            />
<CustomTextItem content={'Catalogue'}  onPress={() => navigation.navigate("Catalogue")} />
<CustomTextItem content={'Dashboard'}  onPress={() => navigation.navigate("Dashboard")} />
<CustomTextItem content={'SocialMediaAccountLoginScreen'}  onPress={() => navigation.navigate("SocialMediaAccountLoginScreen")} />
<CustomTextItem content={'social-media-account'}  onPress={() => this.showAlert("Error", "Could not determine assembler export")} />
<CustomTextItem content={'SocialMediaAccountRegistrationScreen'}  onPress={() => navigation.navigate("SocialMediaAccountRegistrationScreen")} />
<CustomTextItem content={'Invitefriends'}  onPress={() => navigation.navigate("Invitefriends")} />
<CustomTextItem content={'EmailAccountLoginBlock'}  onPress={() => navigation.navigate("EmailAccountLoginBlock")} />
<CustomTextItem content={'EmailAccountRegistration'}  onPress={() => navigation.navigate("EmailAccountRegistration")} />
<CustomTextItem content={'CountryCodeSelector'}  onPress={() => navigation.navigate("CountryCodeSelector")} />
<CustomTextItem content={'ForgotPassword'}  onPress={() => navigation.navigate("ForgotPassword")} />
<CustomTextItem content={'OTPInputAuth'}  onPress={() => navigation.navigate("OTPInputAuth")} />
<CustomTextItem content={'Ordermanagement'}  onPress={() => navigation.navigate("Ordermanagement")} />
<CustomTextItem content={'PostCreation'}  onPress={() => navigation.navigate("PostCreation")} />
<CustomTextItem content={'Splashscreen'}  onPress={() => navigation.navigate("Splashscreen")} />
<CustomTextItem content={'Contactus'}  onPress={() => navigation.navigate("Contactus")} />
<CustomTextItem content={'Filteritems'}  onPress={() => navigation.navigate("Filteritems")} />
<CustomTextItem content={'Categoriessubcategories'}  onPress={() => navigation.navigate("Categoriessubcategories")} />
<CustomTextItem content={'Wallet'}  onPress={() => navigation.navigate("Wallet")} />
<CustomTextItem content={'SwitchAccounts'}  onPress={() => navigation.navigate("SwitchAccounts")} />
<CustomTextItem content={'KeywordSearch'}  onPress={() => navigation.navigate("KeywordSearch")} />
<CustomTextItem content={'JoshLogin'}  onPress={() => navigation.navigate("JoshLogin")} />
<CustomTextItem content={'CustomisableUserSubscriptions'}  onPress={() => navigation.navigate("CustomisableUserSubscriptions")} />
<CustomTextItem content={'CustomisedOrderStatus'}  onPress={() => navigation.navigate("CustomisedOrderStatus")} />
<CustomTextItem content={'UploadMedia'}  onPress={() => navigation.navigate("UploadMedia")} />
<CustomTextItem content={'SearchHistory'}  onPress={() => navigation.navigate("SearchHistory")} />
<CustomTextItem content={'Followers'}  onPress={() => navigation.navigate("Followers")} />
<CustomTextItem content={'DataSaver'}  onPress={() => navigation.navigate("DataSaver")} />
<CustomTextItem content={'PromoteContent'}  onPress={() => navigation.navigate("PromoteContent")} />
<CustomTextItem content={'PaymentAdmin'}  onPress={() => navigation.navigate("PaymentAdmin")} />
<CustomTextItem content={'PushNotifications'}  onPress={() => navigation.navigate("PushNotifications")} />
<CustomTextItem content={'DownloadPermissions'}  onPress={() => navigation.navigate("DownloadPermissions")} />
<CustomTextItem content={'DeepLinking'}  onPress={() => navigation.navigate("DeepLinking")} />
<CustomTextItem content={'DeliveryEstimator'}  onPress={() => navigation.navigate("DeliveryEstimator")} />
<CustomTextItem content={'Videos'}  onPress={() => navigation.navigate("Videos")} />
<CustomTextItem content={'PaidContent'}  onPress={() => navigation.navigate("PaidContent")} />
<CustomTextItem content={'OrderDetailView'}  onPress={() => navigation.navigate("OrderDetailView")} />
<CustomTextItem content={'HashtagGenerator'}  onPress={() => navigation.navigate("HashtagGenerator")} />
<CustomTextItem content={'Hashtags'}  onPress={() => navigation.navigate("Hashtags")} />
<CustomTextItem content={'HdVideoFormats'}  onPress={() => navigation.navigate("HdVideoFormats")} />
<CustomTextItem content={'Settings'}  onPress={() => navigation.navigate("Settings")} />
<CustomTextItem content={'InvoiceBilling'}  onPress={() => navigation.navigate("InvoiceBilling")} />
<CustomTextItem content={'Share'}  onPress={() => navigation.navigate("Share")} />
<CustomTextItem content={'ItemAvailability'}  onPress={() => navigation.navigate("ItemAvailability")} />
<CustomTextItem content={'ShoppingCart'}  onPress={() => navigation.navigate("ShoppingCart")} />
<CustomTextItem content={'Payments'}  onPress={() => navigation.navigate("Payments")} />
<CustomTextItem content={'ActivityFeed'}  onPress={() => navigation.navigate("ActivityFeed")} />
<CustomTextItem content={'Fundraisers'}  onPress={() => navigation.navigate("Fundraisers")} />
<CustomTextItem content={'JoshAdPlatformIntegration'}  onPress={() => navigation.navigate("JoshAdPlatformIntegration")} />
<CustomTextItem content={'IntegrateWithSocialAccountsApi'}  onPress={() => navigation.navigate("IntegrateWithSocialAccountsApi")} />
<CustomTextItem content={'CollectTransactionFees'}  onPress={() => navigation.navigate("CollectTransactionFees")} />
<CustomTextItem content={'ActivityLog'}  onPress={() => navigation.navigate("ActivityLog")} />
<CustomTextItem content={'LikeAPost'}  onPress={() => navigation.navigate("LikeAPost")} />
<CustomTextItem content={'Comments'}  onPress={() => navigation.navigate("Comments")} />
<CustomTextItem content={'ApiIntegration'}  onPress={() => navigation.navigate("ApiIntegration")} />
<CustomTextItem content={'RolesPermissions'}  onPress={() => navigation.navigate("RolesPermissions")} />
<CustomTextItem content={'PeopleManagement'}  onPress={() => navigation.navigate("PeopleManagement")} />
<CustomTextItem content={'LiveChatSummary'}  onPress={() => navigation.navigate("LiveChatSummary")} />
<CustomTextItem content={'LiveFeedScheduling'}  onPress={() => navigation.navigate("LiveFeedScheduling")} />
<CustomTextItem content={'LiveStreaming'}  onPress={() => navigation.navigate("LiveStreaming")} />
<CustomTextItem content={'SplitPayments'}  onPress={() => navigation.navigate("SplitPayments")} />
<CustomTextItem content={'StartVideoChat'}  onPress={() => navigation.navigate("StartVideoChat")} />
<CustomTextItem content={'Location'}  onPress={() => navigation.navigate("Location")} />
<CustomTextItem content={'AdminConsole'}  onPress={() => navigation.navigate("AdminConsole")} />
<CustomTextItem content={'FeatureSettings'}  onPress={() => navigation.navigate("FeatureSettings")} />
<CustomTextItem content={'Analytics'}  onPress={() => navigation.navigate("Analytics")} />
<CustomTextItem content={'Animoji'}  onPress={() => navigation.navigate("Animoji")} />
<CustomTextItem content={'AudioCall'}  onPress={() => navigation.navigate("AudioCall")} />
<CustomTextItem content={'TrafficSources'}  onPress={() => navigation.navigate("TrafficSources")} />
<CustomTextItem content={'Notifications'}  onPress={() => navigation.navigate("Notifications")} />
<CustomTextItem content={'AutomaticRenewals'}  onPress={() => navigation.navigate("AutomaticRenewals")} />
<CustomTextItem content={'SubscriptionBilling'}  onPress={() => navigation.navigate("SubscriptionBilling")} />
<CustomTextItem content={'Subscriptions'}  onPress={() => navigation.navigate("Subscriptions")} />
<CustomTextItem content={'BlockUsers'}  onPress={() => navigation.navigate("BlockUsers")} />
<CustomTextItem content={'Trending'}  onPress={() => navigation.navigate("Trending")} />
<CustomTextItem content={'Calendar'}  onPress={() => navigation.navigate("Calendar")} />
<CustomTextItem content={'CameraAccess'}  onPress={() => navigation.navigate("CameraAccess")} />
<CustomTextItem content={'ContentManagement'}  onPress={() => navigation.navigate("ContentManagement")} />
<CustomTextItem content={'ContentModeration'}  onPress={() => navigation.navigate("ContentModeration")} />
<CustomTextItem content={'VideoAds'}  onPress={() => navigation.navigate("VideoAds")} />
<CustomTextItem content={'VideoAutoplay'}  onPress={() => navigation.navigate("VideoAutoplay")} />
<CustomTextItem content={'VideoBackgrounds'}  onPress={() => navigation.navigate("VideoBackgrounds")} />
<CustomTextItem content={'VideoCall'}  onPress={() => navigation.navigate("VideoCall")} />
<CustomTextItem content={'CreditdebitCardPayments'}  onPress={() => navigation.navigate("CreditdebitCardPayments")} />
<CustomTextItem content={'VideoEditingTools'}  onPress={() => navigation.navigate("VideoEditingTools")} />
<CustomTextItem content={'VideoManagement'}  onPress={() => navigation.navigate("VideoManagement")} />
<CustomTextItem content={'CustomAdvertisements'}  onPress={() => navigation.navigate("CustomAdvertisements")} />
<CustomTextItem content={'DonationPayments'}  onPress={() => navigation.navigate("DonationPayments")} />
<CustomTextItem content={'EmailNotifications'}  onPress={() => navigation.navigate("EmailNotifications")} />
<CustomTextItem content={'Polling'}  onPress={() => navigation.navigate("Polling")} />
<CustomTextItem content={'PortfolioManagement'}  onPress={() => navigation.navigate("PortfolioManagement")} />
<CustomTextItem content={'EventRegistration'}  onPress={() => navigation.navigate("EventRegistration")} />
<CustomTextItem content={'Events'}  onPress={() => navigation.navigate("Events")} />
<CustomTextItem content={'FanWall'}  onPress={() => navigation.navigate("FanWall")} />
<CustomTextItem content={'Favourites'}  onPress={() => navigation.navigate("Favourites")} />
<CustomTextItem content={'PrivacySettings'}  onPress={() => navigation.navigate("PrivacySettings")} />
<CustomTextItem content={'PrivateChat'}  onPress={() => navigation.navigate("PrivateChat")} />
<CustomTextItem content={'ProductQuickview'}  onPress={() => navigation.navigate("ProductQuickview")} />
<CustomTextItem content={'Mentionstagging'}  onPress={() => navigation.navigate("Mentionstagging")} />
<CustomTextItem content={'AdHocReporting'}  onPress={() => navigation.navigate("AdHocReporting")} />
<CustomTextItem content={'AudioMusic'}  onPress={() => navigation.navigate("AudioMusic")} />
<CustomTextItem content={'AudioLibrary'}  onPress={() => navigation.navigate("AudioLibrary")} />
<CustomTextItem content={'Library'}  onPress={() => navigation.navigate("Library")} />
<CustomTextItem content={'TwofactorAuthentication'}  onPress={() => navigation.navigate("TwofactorAuthentication")} />
<CustomTextItem content={'GoogleAdsenseIntegration'}  onPress={() => navigation.navigate("GoogleAdsenseIntegration")} />
<CustomTextItem content={'SwitchAccounts'}  onPress={() => navigation.navigate("SwitchAccounts")} />
<CustomTextItem content={'KeywordSearch'}  onPress={() => navigation.navigate("KeywordSearch")} />
<CustomTextItem content={'JoshLogin'}  onPress={() => navigation.navigate("JoshLogin")} />

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
// Customizable Area End

// Customizable Area Start
const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    height: Platform.OS === "web" ? '100vh' : 'auto',
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  instructions: {
    textAlign: "center",
    color: "#6200EE",
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 16,

    padding: 10
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  header: {
    backgroundColor: '#6200EE',
    padding: 15,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#00000000',
    padding: 18,
    color: '#6200EE',
    fontSize: 16,
    fontWeight: 'normal'
  }
});
// Customizable Area End
export default HomeScreen;