import * as React from "react";
import { View, Image, Text, Pressable } from "react-native";

import { pretty } from "../assets/pretty";

// FONTS
import withFonts from "../components/withFonts";

// ICONS
import Ionicons from "@expo/vector-icons/Ionicons";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <>
      <View style={pretty.container}>
        {/* BACKGROUND UNION IMAGE */}
        <Image
          source={require("../assets/union.png")}
          resizeMode="contain"
          style={pretty.unionImage}
        />
        {/* List of what it can do */}
        <View style={pretty.listFunctions}>
          <Text
            // style={pretty.listFunctionsHeaderText}
            style={pretty.poppinsMediumTitle}
          >
            Optimize your sales and reduce losses.
          </Text>
          <Text style={pretty.poppinsRegularText}>
            <Ionicons name="md-checkmark-circle" size={20} color="green" />
            Track Mpesa Payments
          </Text>
          <Text style={pretty.poppinsRegularText}>
            <Ionicons name="md-checkmark-circle" size={20} color="green" />
            Track Cash Payments
          </Text>
          <Text style={pretty.poppinsRegularText}>
            <Ionicons name="md-checkmark-circle" size={20} color="green" />
            Track Credit/Debit Card Payments
          </Text>
        </View>
        {/* Let's Get Started Title */}
        <Text style={pretty.letsGetStarted}>Let's Get Started</Text>

        {/* Getting Started Buttons */}
        <View style={pretty.getStartedButtonGroup}>
          <Pressable onPress={() => {}} style={pretty.googleButton}>
            <Image
              source={require("../assets/phone-icon.png")}
              resizeMode="center"
              style={pretty.googleButtonIcon}
            />
            <Text style={pretty.googleButtonText}> Continue with Phone</Text>
          </Pressable>

          <Pressable onPress={() => {}} style={pretty.googleButton}>
            <Image
              source={require("../assets/google-icon.png")}
              resizeMode="center"
              style={pretty.googleButtonIcon}
            />
            <Text style={pretty.googleButtonText}>Continue with Google</Text>
          </Pressable>

          <Pressable onPress={() => {}} style={pretty.googleButton}>
            <Image
              source={require("../assets/fb-icon.png")}
              resizeMode="center"
              style={pretty.googleButtonIcon}
            />
            <Text style={pretty.googleButtonText}>Continue with Facebook</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default withFonts(WelcomeScreen);
