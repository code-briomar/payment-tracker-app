import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import SubscribeScreen from "../screens/SubscribeScreen";
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <>
      {/* <View onLayout={onLayoutRootView}> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Login}
          options={{
            title: "Let's get started",
            headerTitleStyle: {
              fontFamily: "Poppins-Light",
            },
          }}
        />
        <Stack.Screen name="Subscribe" component={SubscribeScreen} />
        {/* <Stack.Screen name="Font" component={Font} /> */}
      </Stack.Navigator>
      {/* </View> */}
    </>
  );
};

export default RootNavigator;
