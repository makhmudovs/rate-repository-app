import { Text, StyleSheet, View } from "react-native";
import { Link, useLocation } from "react-router-native";
import theme from "../theme";

const AppBarTab = ({ title, href }: { title: string; href: string }) => {
  const location = useLocation();
  const styles = StyleSheet.create({
    linkText: {
      color:
        location.pathname === href
          ? theme.colors.primary
          : theme.colors.textWhite,
      fontSize: theme.fontSizes.heading,
      marginRight:10
    },
  });
  return (
    <View>
      <Link to={href}>
        <Text style={styles.linkText}>{title}</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
