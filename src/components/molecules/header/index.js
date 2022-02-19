import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { LogoFocused } from "../../../theme/svgs";
import Icon from "../../../utils/icons";
import { useNavigation } from "@react-navigation/core";

const Header = (props) => {
  const navigation = useNavigation();
  const { children, title, showBack } = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {showBack ? (
          <Icon
            type="MaterialIcons"
            name="arrow-back-ios"
            size={22}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <View></View>
        )}
        <LogoFocused height={30} width={30} />
      </View>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export default Header;
