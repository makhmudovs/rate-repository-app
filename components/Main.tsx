import { Text, StyleSheet, View, Platform } from "react-native";
import AppBar from "./Appbar/AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import RepositoryList from "./Repository/RepositoryList";
import Login from "./Login/Login";

const Main = () => {
  return (
    <View className="shrink grow">
      <AppBar />
      <Routes>
        <Route path="/" index element={<RepositoryList />} />
        <Route path="/login" index element={<Login />} />
        <Route path="*" index element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: Platform.select({
      ios: "Arial",
      android: "sans-serif",
      default: "system",
    }),
  },
});
export default Main;
