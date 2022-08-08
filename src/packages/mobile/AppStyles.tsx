import { StyleSheet, Platform } from 'react-native';
import scale, { verticalScale } from '../components/src/Scale';
import { COLORS } from "../framework/src/Globals";

export default StyleSheet.create({

    outerContainer: {
        flex: 1,
    },

    tabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: scale(2),
        paddingHorizontal: scale(16),
        paddingVertical: verticalScale(17),
        backgroundColor: COLORS.white,
    },

    tabLabel: {
        fontSize: scale(10),
        // fontFamily: FONTS.GTWalsheimProRegular,
        marginTop: verticalScale(7.5),
        color: COLORS.white
    },

    homeIcons: {
        width: scale(21),
        height: scale(21),
    },

    exploreIcons: {
        width: scale(21),
        height: scale(21),
    },

    searchIcons: {
        width: scale(21),
        height: scale(21),
    },

    wishListIcons: {
        width: scale(22.5),
        height: scale(19.8),
    },

    profileIcons: {
        width: scale(21),
        height: scale(21),
    },

    bottomTabStyle: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.white,
        height: scale(66),
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: scale(10),
        elevation: 2,
    },

});
