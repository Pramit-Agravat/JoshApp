import React, { Component } from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import scale, {verticalScale} from "../../..//components/src/Scale";
import { COLORS } from "../../../framework/src/Globals";

// import * as IMG_CONST from '../assets';

class NoNetwork extends Component{
  render() {
    return (
     <View style={styles.emtpyAddressContainer}>
       <View style={styles.cartempty}>
         {/* <Image
           source={IMG_CONST.NO_WIFI_ICON}
           style={styles.emptyAddressIcon}
         /> */}
         <Text style={styles.noAnyOrder}>No Internet</Text>
         <Text style={styles.youhave}>
             Your connection is no more. Please try again
         </Text>
       </View>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  emtpyAddressContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartempty: {
    flex: 1,
    justifyContent: 'center',
  },

  emptyAddressIcon: {
    width: scale(121.3),
    height: scale(121.3),
    alignSelf: 'center',
  },
  noAnyOrder: {
    fontSize: scale(17),
    // fontFamily: FONTS.GTWalsheimProMedium,
    color: 'gray',
    lineHeight: scale(19),
    marginTop: verticalScale(24.6),
    opacity: 0.9,
    textAlign: 'center',
  },

  youhave: {
    fontSize: scale(15),
    // fontFamily: FONTS.GTWalsheimProRegular,
    color: 'gray',
    width: scale(233),
    lineHeight: scale(18),
    textAlign: 'center',
    marginTop: verticalScale(8),
    opacity: 0.5,
  },
});

export default NoNetwork;
