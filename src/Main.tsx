import { StyleSheet, View } from "react-native";
import RepositoryList from "./components/RepositoryList";
import AppBar from "./components/AppBar";

import theme from "./theme";
import { Navigate, Route, Routes } from "react-router-native";
import Login from "./components/Login";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.innerView}>
        <Routes>
          <Route path="/" index element={<RepositoryList />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  innerView: {
    padding: theme.padding.lg,
  },
});

export default Main;
