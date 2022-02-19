import { StyleSheet } from "react-native";
import { colors, fonts, ratioHeight, ratioWidth } from "../../theme";

const styles = StyleSheet.create({
  deditCard: {
    backgroundColor: colors.appPrimary,
    padding: 20 * ratioHeight,
    height: 170 * ratioHeight,
    width: "90%",
    borderRadius: 20,
    position: "absolute",
    top: "25%",
    left: "5%",
  },
  logo: {
    alignItems: "flex-end",
  },
  username: {
    fontSize: fonts.size.font18,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextBold,
    marginTop: 22 * ratioHeight,
    marginBottom: 20 * ratioHeight,
  },
  cardNumber: {
    fontSize: fonts.size.font14,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextDemiBold,
    marginRight: 8 * ratioWidth,
    letterSpacing: 3,
  },
  bottomContainer: {
    flexDirection: "row",
    marginVertical: 8 * ratioHeight,
  },
  cvv: {
    flexDirection: "row",
    marginLeft: 25 * ratioWidth,
  },
  thru: {
    fontSize: fonts.size.font13,
    color: colors.white,
    fontFamily: fonts.type.AvenirNextDemiBold,
    marginTop: 3 * ratioHeight,
  },
});

export default styles;
