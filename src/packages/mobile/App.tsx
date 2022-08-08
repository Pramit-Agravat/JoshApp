import React,{Component} from 'react';
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import HomeScreen from "../components/src/HomeScreen";
import EmailAccountRegistration from "../blocks/email-account-registration/src/EmailAccountRegistration";
import Splashscreen from "../blocks/splashscreen/src/Splashscreen";
import CountryCodeSelector from "../blocks/country-code-selector/src/CountryCodeSelector";
import CountryCodeSelectorTable from "../blocks/country-code-selector/src/CountryCodeSelectorTable";
import Dashboard from "../blocks/dashboard/src/Dashboard";
import EmailAccountLoginBlock from "../blocks/email-account-login/src/EmailAccountLoginBlock";

import networkHOC from '../framework/src/NetInfoHoc';
import NoNetwork from '../components/NoNetwork/src/NoNetworkScreen';
import styles from './AppStyles';
import { View,Image,Text } from 'react-native';
import { COLORS } from "../framework/src/Globals";
import * as IMG_CONST from "./assets/src/assets"

const HomeStack = createStackNavigator({

  Home: { screen: HomeScreen, navigationOptions: { header: null, title: "Home" } },
// UserProfile: { screen: UserProfile, navigationOptions: { header: null} },
// Mentionstagging:{ screen:Mentionstagging,navigationOptions:{ title:"Mentionstagging"}},
// VideoBackgrounds:{ screen:VideoBackgrounds,navigationOptions:{ title:"VideoBackgrounds"}},
// Wallet:{ screen:Wallet,navigationOptions:{ title:"Wallet"}},
// ContentModeration:{ screen:ContentModeration,navigationOptions:{ title:"ContentModeration"}},
// CameraAccess:{ screen:CameraAccess,navigationOptions:{ title:"CameraAccess"}},
// SocialMediaAccountRegistrationScreen:{ screen:SocialMediaAccountRegistrationScreen,navigationOptions:{ title:"SocialMediaAccountRegistrationScreen"}},
// AdminConsole:{ screen:AdminConsole,navigationOptions:{ title:"AdminConsole"}},
// AudioCall:{ screen:AudioCall,navigationOptions:{ title:"AudioCall"}},
// TrafficSources:{ screen:TrafficSources,navigationOptions:{ title:"TrafficSources"}},
// LiveFeedScheduling:{ screen:LiveFeedScheduling,navigationOptions:{ title:"LiveFeedScheduling"}},
// DownloadPermissions:{ screen:DownloadPermissions,navigationOptions:{ title:"DownloadPermissions"}},
// Calendar:{ screen:Calendar,navigationOptions:{ title:"Calendar"}},
// ItemAvailability:{ screen:ItemAvailability,navigationOptions:{ title:"ItemAvailability"}},
// CustomisedOrderStatus:{ screen:CustomisedOrderStatus,navigationOptions:{ title:"CustomisedOrderStatus"}},
// CollectTransactionFees:{ screen:CollectTransactionFees,navigationOptions:{ title:"CollectTransactionFees"}},
// PortfolioManagement:{ screen:PortfolioManagement,navigationOptions:{ title:"PortfolioManagement",header: null,}},
// Hashtags:{ screen:Hashtags,navigationOptions:{ title:"Hashtags"}},
// Ordermanagement:{ screen:Ordermanagement,navigationOptions:{header: null, title:"Ordermanagement"}},
// Favourites:{ screen:Favourites,navigationOptions:{ title:"Favourites"}},
// VideoEditingTools:{ screen:VideoEditingTools,navigationOptions:{ title:"VideoEditingTools"}},
// SwitchAccounts:{ screen:SwitchAccounts,navigationOptions:{ title:"SwitchAccounts"}},
EmailAccountRegistration:{ screen:EmailAccountRegistration,navigationOptions:{ title:"EmailAccountRegistration",header: null,}},
// Library:{ screen:Library,navigationOptions:{ title:"Library"}},
// Videos:{ screen:Videos,navigationOptions:{ title:"Videos"}},
// FeatureSettings:{ screen:FeatureSettings,navigationOptions:{ title:"FeatureSettings",}},
// InvoiceBilling:{ screen:InvoiceBilling,navigationOptions:{ title:"InvoiceBilling"}},
// ForgotPassword:{ screen:ForgotPassword,navigationOptions:{ title:"ForgotPassword"}},
// ForgotPasswordOTP:{ screen:ForgotPasswordOTP,navigationOptions:{ title:"ForgotPasswordOTP"}},
// NewPassword:{ screen:NewPassword,navigationOptions:{ title:"NewPassword"}},
// ApiIntegration:{ screen:ApiIntegration,navigationOptions:{ title:"ApiIntegration"}},
// RolesPermissions:{ screen:RolesPermissions,navigationOptions:{ title:"RolesPermissions"}},
// Subscriptions:{ screen:Subscriptions,navigationOptions:{ title:"Subscriptions"}},
Splashscreen:{ screen:Splashscreen,navigationOptions:{ title:"Splashscreen",header:null}},
// ActivityFeed:{ screen:ActivityFeed,navigationOptions:{ title:"ActivityFeed"}},
// PeopleManagement:{ screen:PeopleManagement,navigationOptions:{ title:"PeopleManagement"}},
// Trending:{ screen:Trending,navigationOptions:{ title:"Trending"}},
// IntegrateWithSocialAccountsApi:{ screen:IntegrateWithSocialAccountsApi,navigationOptions:{ title:"IntegrateWithSocialAccountsApi"}},
// Settings:{ screen:Settings,navigationOptions:{  header: null}},
// Filteritems:{ screen:Filteritems,navigationOptions:{ title:"Filteritems"}},
// Filteroptions:{ screen:Filteroptions,navigationOptions:{ title:"Filteroptions"}},
// ProductQuickview:{ screen:ProductQuickview,navigationOptions:{ title:"ProductQuickview"}},
// PaidContent:{ screen:PaidContent,navigationOptions:{ title:"PaidContent"}},
// LikeAPost:{ screen:LikeAPost,navigationOptions:{ title:"LikeAPost"}},
// SocialMediaAccountLoginScreen:{ screen:SocialMediaAccountLoginScreen,navigationOptions:{ title:"SocialMediaAccountLoginScreen"}},
// AudioMusic:{ screen:AudioMusic,navigationOptions:{ title:"AudioMusic"}},
// PromoteContent:{ screen:PromoteContent,navigationOptions:{ title:"PromoteContent"}},
// Followers:{ screen:Followers,navigationOptions:{ title:"Followers"}},
// Analytics:{ screen:Analytics,navigationOptions:{ title:"Analytics"}},
// FanWall:{ screen:FanWall,navigationOptions:{ title:"FanWall"}},
// Catalogue:{ screen:Catalogue,navigationOptions:{ title:"Catalogue"}},
// Categoriessubcategories:{ screen:Categoriessubcategories,navigationOptions:{ title:"Categoriessubcategories"}},
// OrderDetailView:{ screen:OrderDetailView,navigationOptions:{ title:"OrderDetailView"}},
// Notifications:{ screen:Notifications,navigationOptions:{ title:'',header:null}},
// Invitefriends:{ screen:Invitefriends,navigationOptions:{ title:"Invitefriends"}},
// DeepLinking:{ screen:DeepLinking,navigationOptions:{ title:"DeepLinking"}},
// Contactus:{ screen:Contactus,navigationOptions:{ title:"Contactus"}},
// AddContactus:{ screen:AddContactus,navigationOptions:{ title:"AddContactus"}},
// VideoCall:{ screen:VideoCall,navigationOptions:{ title:"VideoCall"}},
// VideoAutoplay:{ screen:VideoAutoplay,navigationOptions:{ title:"VideoAutoplay"}},
// GoogleAdsenseIntegration:{ screen:GoogleAdsenseIntegration,navigationOptions:{ title:"GoogleAdsenseIntegration"}},
// ShoppingCart:{ screen:ShoppingCart,navigationOptions:{ title:"ShoppingCart"}},
// UploadMedia:{ screen:UploadMedia,navigationOptions:{ title:"UploadMedia"}},
// LiveChatSummary:{ screen:LiveChatSummary,navigationOptions:{ title:"LiveChatSummary"}},
// PrivacySettings:{ screen:PrivacySettings,navigationOptions:{ title:"PrivacySettings"}},
// PaymentAdmin:{ screen:PaymentAdmin,navigationOptions:{ title:"PaymentAdmin"}},
// HashtagGenerator:{ screen:HashtagGenerator,navigationOptions:{ title:"HashtagGenerator"}},
// Share:{ screen:Share,navigationOptions:{ title:"Share"}},
// CustomisableUserSubscriptions:{ screen:CustomisableUserSubscriptions,navigationOptions:{ title:"CustomisableUserSubscriptions"}},
// CustomAdvertisements:{ screen:CustomAdvertisements,navigationOptions:{ title:"CustomAdvertisements"}},
// OTPInputAuth:{ screen:OTPInputAuth,navigationOptions:{ title:"OTPInputAuth",header:null}},
// DataSaver:{ screen:DataSaver,navigationOptions:{ title:"DataSaver"}},
// KeywordSearch:{ screen:KeywordSearch,navigationOptions:{ title:"KeywordSearch"}},
// ActivityLog:{ screen:ActivityLog,navigationOptions:{ title:"ActivityLog"}},
// Comments:{ screen:Comments,navigationOptions:{ title:"Comments"}},
// EmailNotifications:{ screen:EmailNotifications,navigationOptions:{ title:"EmailNotifications"}},
// SplitPayments:{ screen:SplitPayments,navigationOptions:{ title:"SplitPayments"}},
// Location:{ screen:Location,navigationOptions:{ title:"Location"}},
// PushNotifications:{ screen:PushNotifications,navigationOptions:{ title:"PushNotifications"}},
// ContentManagement:{ screen:ContentManagement,navigationOptions:{ title:"ContentManagement"}},
// OrderDetails:{ screen:OrderDetails,navigationOptions:{ title:"OrderDetails"}},
// DeliveryEstimator:{ screen:DeliveryEstimator,navigationOptions:{ title:"DeliveryEstimator"}},
// LiveStreaming:{ screen:LiveStreaming,navigationOptions:{ title:"LiveStreaming"}},
// Payments:{ screen:Payments,navigationOptions:{ title:"Payments"}},
CountryCodeSelector:{ screen:CountryCodeSelector,navigationOptions:{ title:"CountryCodeSelector"}},
CountryCodeSelectorTable:{ screen:CountryCodeSelectorTable,navigationOptions:{ title:"CountryCodeSelectorTable"}},
// JoshLogin:{ screen:JoshLogin,navigationOptions:{ title:"JoshLogin"}},
// PrivateChat:{ screen:PrivateChat,navigationOptions:{ title:"PrivateChat"}},
Dashboard:{ screen:Dashboard,navigationOptions:{ title:"Dashboard"}},
// PostCreation:{ screen:PostCreation,navigationOptions:{ title:"PostCreation"}},
// Posts:{ screen:Posts,navigationOptions:{ title:"Posts"}},
// PostDetails:{ screen:PostDetails,navigationOptions:{ title:"PostDetails"}},
// StartVideoChat:{ screen:StartVideoChat,navigationOptions:{ title:"StartVideoChat"}},
// AudioLibrary:{ screen:AudioLibrary,navigationOptions:{ title:"AudioLibrary"}},
EmailAccountLoginBlock:{ screen:EmailAccountLoginBlock,navigationOptions:{ title:"EmailAccountLoginBlock",header: null,}},
// VideoManagement:{ screen:VideoManagement,navigationOptions:{ title:"VideoManagement"}},
// VideoAds:{ screen:VideoAds,navigationOptions:{ title:"VideoAds"}},
// EventRegistration:{ screen:EventRegistration,navigationOptions:{ title:"EventRegistration"}},
// Animoji:{ screen:Animoji,navigationOptions:{ title:"Animoji"}},
// Fundraisers:{ screen:Fundraisers,navigationOptions:{ title:"Fundraisers"}},
// DonationPayments:{ screen:DonationPayments,navigationOptions:{ title:"DonationPayments"}},
// AdHocReporting:{ screen:AdHocReporting,navigationOptions:{ title:"AdHocReporting"}},
// Polling:{ screen:Polling,navigationOptions:{ title:"Polling"}},
// SearchHistory:{ screen:SearchHistory,navigationOptions:{ title:"SearchHistory"}},
// JoshAdPlatformIntegration:{ screen:JoshAdPlatformIntegration,navigationOptions:{ title:"JoshAdPlatformIntegration"}},
// TwofactorAuthentication:{ screen:TwofactorAuthentication,navigationOptions:{ title:"TwofactorAuthentication"}},
// BlockUsers:{ screen:BlockUsers,navigationOptions:{ title:"BlockUsers"}},
// AutomaticRenewals:{ screen:AutomaticRenewals,navigationOptions:{ title:"AutomaticRenewals"}},
// CreditdebitCardPayments:{ screen:CreditdebitCardPayments,navigationOptions:{ title:"CreditdebitCardPayments"}},
// Events:{ screen:Events,navigationOptions:{ title:"Events"}},
// SubscriptionBilling:{ screen:SubscriptionBilling,navigationOptions:{ title:"SubscriptionBilling"}},
// HdVideoFormats:{ screen:HdVideoFormats,navigationOptions:{ title:"HdVideoFormats"}},
// InfoPage: { screen: InfoPage, navigationOptions: { title: "Info" } },
// Subscribers:{screen: Subscribers, navigationOptions: { header: null, title: "" }},

},
{
  initialRouteName: 'Splashscreen',
},);



if (!HomeScreen.instance) {
  const defaultProps = {
    navigation: null,
    id: "HomeScreen"
  };
  const homeScreen = new HomeScreen(defaultProps);
}

export interface Props {
  navigation: any;
}

// const BottomTabNavigator = createBottomTabNavigator(
//   {
//     VideoAutoplay: { screen: VideoAutoplay, navigationOptions: { header: null, gestureEnabled: false } },
//     Search: { screen: SearchHistory, navigationOptions: { header: null, gestureEnabled: false } },
//     LiveStreaming: { screen: LiveStreaming, navigationOptions: { header: null, gestureEnabled: false } },
//     Notifications: { screen: Notifications, navigationOptions: { header: null, gestureEnabled: false } },
//     Contactus: { screen: UserProfile, navigationOptions: { header: null, gestureEnabled: false } },
//   },
//   {
//     navigationOptions: ({ navigation }: any) => ({
//       tabBarIcon: ({ tintColor, focused, iconIndex }: any) => {
//         const { routeName } = navigation.state;
//         if (routeName === 'VideoAutoplay') {
//           return (
//             <View style={styles.outerContainer}>
//               <View style={[styles.tabContainer, { borderTopColor: focused ? COLORS.red : 'transparent' }]}>
//                 <Image source={IMG_CONST.HOME_SELECT} style={styles.homeIcons} />
//               </View>
//             </View>
//           )
//         } else if (routeName === 'Search') {
//           return (
//             <View style={styles.outerContainer}>
//               <View style={[styles.tabContainer, { borderTopColor: focused ? COLORS.red : 'transparent'}]}>
//                 <Image source={IMG_CONST.SEARCH_ICON} style={styles.searchIcons} />
//               </View>
//             </View>
//           )
//         } else if (routeName === 'LiveStreaming') {
//           return (
//             <View style={styles.outerContainer}>
//               <View style={[styles.tabContainer, { borderTopColor: focused ? COLORS.red : 'transparent' }]}>
//                 <Image source={IMG_CONST.PLUS_ICON} resizeMode="contain" style={styles.wishListIcons} />
//               </View>
//             </View>
//           )
//         } 
        
//         else if (routeName === 'Notifications') {
//           return (
//             <View style={styles.outerContainer}>
//               <View style={[styles.tabContainer, { borderTopColor: focused ? COLORS.red : 'transparent' }]}>
//                 <Image source={IMG_CONST.NOTIFICATION_SELECT} resizeMode="contain" style={styles.wishListIcons} />
//               </View>
//             </View>
//           )
//         } else if (routeName === 'Contactus') {
//           return (
//             <View style={styles.outerContainer}>
//               <View style={[styles.tabContainer, { borderTopColor: focused ? COLORS.red : 'transparent' }]}>
//                 <Image source={IMG_CONST.CONTACT_SELECT} resizeMode="contain" style={styles.profileIcons} />
//               </View>
//             </View>
//           )
//         }
//       },
//     }),
//     tabBarOptions: {
//       style: styles.bottomTabStyle,
//       showLabel: false,
//       keyboardHidesTabBar: true
//     },
//   }
// );
const MainStackNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: { header: null, title: "Home" } },
  // UserProfile: { screen: UserProfile, navigationOptions: { header: null} },
  // Mentionstagging:{ screen:Mentionstagging,navigationOptions:{ title:"Mentionstagging"}},
  // VideoBackgrounds:{ screen:VideoBackgrounds,navigationOptions:{ title:"VideoBackgrounds"}},
  // Wallet:{ screen:Wallet,navigationOptions:{ title:"Wallet"}},
  // ContentModeration:{ screen:ContentModeration,navigationOptions:{ title:"ContentModeration"}},
  // CameraAccess:{ screen:CameraAccess,navigationOptions:{ title:"CameraAccess"}},
  // SocialMediaAccountRegistrationScreen:{ screen:SocialMediaAccountRegistrationScreen,navigationOptions:{ title:"SocialMediaAccountRegistrationScreen"}},
  // AdminConsole:{ screen:AdminConsole,navigationOptions:{ title:"AdminConsole"}},
  // AudioCall:{ screen:AudioCall,navigationOptions:{ title:"AudioCall"}},
  // TrafficSources:{ screen:TrafficSources,navigationOptions:{ title:"TrafficSources"}},
  // LiveFeedScheduling:{ screen:LiveFeedScheduling,navigationOptions:{ title:"LiveFeedScheduling"}},
  // DownloadPermissions:{ screen:DownloadPermissions,navigationOptions:{ title:"DownloadPermissions"}},
  // Calendar:{ screen:Calendar,navigationOptions:{ title:"Calendar"}},
  // ItemAvailability:{ screen:ItemAvailability,navigationOptions:{ title:"ItemAvailability"}},
  // CustomisedOrderStatus:{ screen:CustomisedOrderStatus,navigationOptions:{ title:"CustomisedOrderStatus"}},
  // CollectTransactionFees:{ screen:CollectTransactionFees,navigationOptions:{ title:"CollectTransactionFees"}},
  // PortfolioManagement:{ screen:PortfolioManagement,navigationOptions:{ title:"PortfolioManagement",header: null,}},
  // Hashtags:{ screen:Hashtags,navigationOptions:{ title:"Hashtags"}},
  // Favourites:{ screen:Favourites,navigationOptions:{ title:"Favourites"}},
  // VideoEditingTools:{ screen:VideoEditingTools,navigationOptions:{ title:"VideoEditingTools"}},
  // SwitchAccounts:{ screen:SwitchAccounts,navigationOptions:{ title:"SwitchAccounts"}},
  EmailAccountRegistration:{ screen:EmailAccountRegistration,navigationOptions:{ title:"EmailAccountRegistration",header: null,}},
  // Library:{ screen:Library,navigationOptions:{ title:"Library"}},
  // Videos:{ screen:Videos,navigationOptions:{ title:"Videos"}},
  // FeatureSettings:{ screen:FeatureSettings,navigationOptions:{ title:"FeatureSettings",}},
  // InvoiceBilling:{ screen:InvoiceBilling,navigationOptions:{ title:"InvoiceBilling"}},
  // ForgotPassword:{ screen:ForgotPassword,navigationOptions:{ title:"ForgotPassword"}},
  // ForgotPasswordOTP:{ screen:ForgotPasswordOTP,navigationOptions:{ title:"ForgotPasswordOTP"}},
  // NewPassword:{ screen:NewPassword,navigationOptions:{ title:"NewPassword"}},
  // ApiIntegration:{ screen:ApiIntegration,navigationOptions:{ title:"ApiIntegration"}},
  // RolesPermissions:{ screen:RolesPermissions,navigationOptions:{ title:"RolesPermissions"}},
  // Subscriptions:{ screen:Subscriptions,navigationOptions:{ title:"Subscriptions"}},
  Splashscreen:{ screen:Splashscreen,navigationOptions:{ title:"Splashscreen",header:null}},
  // ActivityFeed:{ screen:ActivityFeed,navigationOptions:{ title:"ActivityFeed"}},
  // PeopleManagement:{ screen:PeopleManagement,navigationOptions:{ title:"PeopleManagement"}},
  // Trending:{ screen:Trending,navigationOptions:{ title:"Trending"}},
  // IntegrateWithSocialAccountsApi:{ screen:IntegrateWithSocialAccountsApi,navigationOptions:{ title:"IntegrateWithSocialAccountsApi"}},
  // Settings:{ screen:Settings,navigationOptions:{  header: null}},
  // Filteritems:{ screen:Filteritems,navigationOptions:{ title:"Filteritems"}},
  // Filteroptions:{ screen:Filteroptions,navigationOptions:{ title:"Filteroptions"}},
  // ProductQuickview:{ screen:ProductQuickview,navigationOptions:{ title:"ProductQuickview"}},
  // PaidContent:{ screen:PaidContent,navigationOptions:{ title:"PaidContent"}},
  // LikeAPost:{ screen:LikeAPost,navigationOptions:{ title:"LikeAPost"}},
  // SocialMediaAccountLoginScreen:{ screen:SocialMediaAccountLoginScreen,navigationOptions:{ title:"SocialMediaAccountLoginScreen"}},
  // AudioMusic:{ screen:AudioMusic,navigationOptions:{ title:"AudioMusic"}},
  // PromoteContent:{ screen:PromoteContent,navigationOptions:{ title:"PromoteContent"}},
  // Followers:{ screen:Followers,navigationOptions:{ title:"Followers"}},
  // Analytics:{ screen:Analytics,navigationOptions:{ title:"Analytics"}},
  // FanWall:{ screen:FanWall,navigationOptions:{ title:"FanWall"}},
  // Catalogue:{ screen:Catalogue,navigationOptions:{ title:"Catalogue"}},
  // Categoriessubcategories:{ screen:Categoriessubcategories,navigationOptions:{ title:"Categoriessubcategories"}},
  // OrderDetailView:{ screen:OrderDetailView,navigationOptions:{ title:"OrderDetailView"}},
  // Notifications:{ screen:Notifications,navigationOptions:{ title:"Notifications",header:null}},
  // Invitefriends:{ screen:Invitefriends,navigationOptions:{ title:"Invitefriends"}},
  // DeepLinking:{ screen:DeepLinking,navigationOptions:{ title:"DeepLinking"}},
  // Contactus:{ screen:Contactus,navigationOptions:{ title:"Contactus"}},
  // AddContactus:{ screen:AddContactus,navigationOptions:{ title:"AddContactus"}},
  // VideoCall:{ screen:VideoCall,navigationOptions:{ title:"VideoCall"}},
  // VideoAutoplay:{ screen:VideoAutoplay,navigationOptions:{ title:"VideoAutoplay"}},
  // GoogleAdsenseIntegration:{ screen:GoogleAdsenseIntegration,navigationOptions:{ title:"GoogleAdsenseIntegration"}},
  // ShoppingCart:{ screen:ShoppingCart,navigationOptions:{ title:"ShoppingCart"}},
  // UploadMedia:{ screen:UploadMedia,navigationOptions:{ title:"UploadMedia"}},
  // LiveChatSummary:{ screen:LiveChatSummary,navigationOptions:{ title:"LiveChatSummary"}},
  // PrivacySettings:{ screen:PrivacySettings,navigationOptions:{ title:"PrivacySettings"}},
  // PaymentAdmin:{ screen:PaymentAdmin,navigationOptions:{ title:"PaymentAdmin"}},
  // HashtagGenerator:{ screen:HashtagGenerator,navigationOptions:{ title:"HashtagGenerator"}},
  // Share:{ screen:Share,navigationOptions:{ title:"Share"}},
  // CustomisableUserSubscriptions:{ screen:CustomisableUserSubscriptions,navigationOptions:{ title:"CustomisableUserSubscriptions"}},
  // CustomAdvertisements:{ screen:CustomAdvertisements,navigationOptions:{ title:"CustomAdvertisements"}},
  // OTPInputAuth:{ screen:OTPInputAuth,navigationOptions:{ title:"OTPInputAuth",header:null}},
  // DataSaver:{ screen:DataSaver,navigationOptions:{ title:"DataSaver"}},
  // KeywordSearch:{ screen:KeywordSearch,navigationOptions:{ title:"KeywordSearch"}},
  // ActivityLog:{ screen:ActivityLog,navigationOptions:{ title:"ActivityLog"}},
  // Comments:{ screen:Comments,navigationOptions:{ title:"Comments"}},
  // EmailNotifications:{ screen:EmailNotifications,navigationOptions:{ title:"EmailNotifications"}},
  // SplitPayments:{ screen:SplitPayments,navigationOptions:{ title:"SplitPayments"}},
  // Location:{ screen:Location,navigationOptions:{ title:"Location"}},
  // PushNotifications:{ screen:PushNotifications,navigationOptions:{ title:"PushNotifications"}},
  // ContentManagement:{ screen:ContentManagement,navigationOptions:{ title:"ContentManagement"}},
  // Ordermanagement:{ screen:Ordermanagement,navigationOptions:{header: null, title:"Ordermanagement"}},
  // OrderDetails:{ screen:OrderDetails,navigationOptions:{ title:"OrderDetails"}},
  // DeliveryEstimator:{ screen:DeliveryEstimator,navigationOptions:{ title:"DeliveryEstimator"}},
  // LiveStreaming:{ screen:LiveStreaming,navigationOptions:{ title:"LiveStreaming"}},
  // Payments:{ screen:Payments,navigationOptions:{ title:"Payments"}},
  CountryCodeSelector:{ screen:CountryCodeSelector,navigationOptions:{ title:"CountryCodeSelector"}},
  CountryCodeSelectorTable:{ screen:CountryCodeSelectorTable,navigationOptions:{ title:"CountryCodeSelectorTable"}},
  // JoshLogin:{ screen:JoshLogin,navigationOptions:{ title:"JoshLogin"}},
  // PrivateChat:{ screen:PrivateChat,navigationOptions:{ title:"PrivateChat"}},
  Dashboard:{ screen:Dashboard,navigationOptions:{ title:"Dashboard"}},
  // PostCreation:{ screen:PostCreation,navigationOptions:{ title:"PostCreation",header:null}},
  // Posts:{ screen:Posts,navigationOptions:{ title:"Posts"}},
  // PostDetails:{ screen:PostDetails,navigationOptions:{ title:"PostDetails"}},
  // StartVideoChat:{ screen:StartVideoChat,navigationOptions:{ title:"StartVideoChat"}},
  // AudioLibrary:{ screen:AudioLibrary,navigationOptions:{ title:"AudioLibrary"}},
  EmailAccountLoginBlock:{ screen:EmailAccountLoginBlock,navigationOptions:{ title:"EmailAccountLoginBlock",header: null,}},
  // VideoManagement:{ screen:VideoManagement,navigationOptions:{ title:"VideoManagement"}},
  // VideoAds:{ screen:VideoAds,navigationOptions:{ title:"VideoAds"}},
  // EventRegistration:{ screen:EventRegistration,navigationOptions:{ title:"EventRegistration"}},
  // Animoji:{ screen:Animoji,navigationOptions:{ title:"Animoji"}},
  // Fundraisers:{ screen:Fundraisers,navigationOptions:{ title:"Fundraisers"}},
  // DonationPayments:{ screen:DonationPayments,navigationOptions:{ title:"DonationPayments"}},
  // AdHocReporting:{ screen:AdHocReporting,navigationOptions:{ title:"AdHocReporting"}},
  // Polling:{ screen:Polling,navigationOptions:{ title:"Polling"}},
  // SearchHistory:{ screen:SearchHistory,navigationOptions:{ title:"SearchHistory"}},
  // JoshAdPlatformIntegration:{ screen:JoshAdPlatformIntegration,navigationOptions:{ title:"JoshAdPlatformIntegration"}},
  // TwofactorAuthentication:{ screen:TwofactorAuthentication,navigationOptions:{ title:"TwofactorAuthentication"}},
  // BlockUsers:{ screen:BlockUsers,navigationOptions:{ title:"BlockUsers"}},
  // AutomaticRenewals:{ screen:AutomaticRenewals,navigationOptions:{ title:"AutomaticRenewals"}},
  // CreditdebitCardPayments:{ screen:CreditdebitCardPayments,navigationOptions:{ title:"CreditdebitCardPayments"}},
  // Events:{ screen:Events,navigationOptions:{ title:"Events"}},
  // SubscriptionBilling:{ screen:SubscriptionBilling,navigationOptions:{ title:"SubscriptionBilling",header:null}},
  // HdVideoFormats:{ screen:HdVideoFormats,navigationOptions:{ title:"HdVideoFormats"}},
  // InfoPage: { screen: InfoPage, navigationOptions: { title: "Info" } },
  // Subscribers:{screen: Subscribers, navigationOptions: { header: null, title: "" }},
  // BottomTabNavigator: { screen: BottomTabNavigator, navigationOptions: { header: null, gesturesEnabled: false } },

  },
  {
    initialRouteName: 'Splashscreen',
  },);
  
  


export let appObj: any = {};

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
    
    };
    console.disableYellowBox = true;
  }

  render(){
    const { isConnected }: any = this.props;
    return isConnected ? (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    ) : <NoNetwork />;
  
  }
}
export default networkHOC()(App);