import theme from "@/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, useLocation } from "react-router-native";

export const AppBarTab = ({ href, title }) => {
  const location = useLocation();
  const styles = StyleSheet.create({
    text: {
      color:
        location.pathname === href
          ? theme.colors.primary
          : theme.colors.textWhite,
      fontSize: theme.fontSizes.heading,
      fontWeight:theme.fontWeights.fontBold,
      marginRight:10
    },
  });
  return (
    <View>
      <Link to={href}>
        <Text style={styles.text}>{title}</Text>
      </Link>
    </View>
  );
};
