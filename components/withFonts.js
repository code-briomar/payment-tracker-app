import React from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const withFonts = (WrappedComponent) => {
  const LoadFonts = (props) => {
    const [fontsLoaded] = useFonts({
      "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
      "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
      "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    });

    React.useEffect(() => {
      async function prepare() {
        await SplashScreen.preventAutoHideAsync();
      }
      prepare();
    }, []);

    if (!fontsLoaded) {
      return null;
    } else {
      SplashScreen.hideAsync();
    }

    return <WrappedComponent {...props} />;
  };

  return LoadFonts;
};

export default withFonts;
