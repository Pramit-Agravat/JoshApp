import { ActivityIndicator, View ,Dimensions} from "react-native";

import React from "react";

interface myProps {
  loading: boolean;
}
export default function Loader(props: myProps) {
  return props.loading ? (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center",position:'absolute',bottom:0,top:0,alignSelf:'center'
    }}>
      <ActivityIndicator size="large"  color="rgb(0, 187, 242)"/>
    </View>
  ) : (
    <View />
  );
}
