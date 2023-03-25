import { StyleSheet } from "react-native";
export const pretty = StyleSheet.create({
  container: {
    flex: 1,
  },
  unionImage: {
    position: "absolute",
    left: 120,
  },
  listFunctions: {
    flex: 0.5,
    // backgroundColor: "red",
    alignItems: "flex-start",
    margin: 10,
    justifyContent: "center",
  },
  listFunctionsHeaderText: {
    flex: 0.1,
    // backgroundColor: "orange",
    lineHeight: 22,
    fontWeight: "400",
    fontSize: 18,
    fontFamily: "Poppins-Black",
    fontSize: 30,
  },
  poppinsMediumTitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
  },
  poppinsRegularText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    padding: 5,
  },
  letsGetStarted: {
    margin: 10,
    fontFamily: "Poppins-Medium",
    fontSize: 28,
  },
  getStartedButtonGroup: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  googleButton: {
    margin: 5,
    width: 250,
    paddingTop: 12,
    paddingRight: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    borderWidth: 0,
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  googleButtonIcon: {
    height: 30,
    width: 25,
  },
  googleButtonText: {
    color: "#757575",
    fontFamily: "Poppins-Regular",
    marginLeft: 3,
  },
});
