
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";


const AppBar = () => {
  return (
    <View style={styles.container} className="bg-zinc-900 p-5">
      <ScrollView horizontal className="flex-row">
        <AppBarTab href="/" title="Repositories" />
        <AppBarTab href="/login" title="Signin" />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 25,
  }
});

export default AppBar