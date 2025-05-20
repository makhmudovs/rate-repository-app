import {
  Pressable,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import Constants from "expo-constants";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" href="/" />
        <AppBarTab title="Login" href="/login" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    padding: theme.padding.lg,
    backgroundColor: theme.colors.textPrimary,
  }
});

export default AppBar;
