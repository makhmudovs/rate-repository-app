import { Text, View, StyleSheet, Platform } from "react-native";
import { Route, Routes } from "react-router-native";
import Login from "@/pages/login";
import Repositories from "@/pages/repositories";
import { AppBar } from "@/components/appBar/appBar";
import theme from "./theme";

export default function Main() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Routes>
          <Route path="/" index element={<Repositories />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    fontFamily: Platform.select({
      ios: "Arial",
      android: "sans-serif",
      default: "System",
    }),
  },
  inner: {
    padding: theme.padding.lg,
  },
});
