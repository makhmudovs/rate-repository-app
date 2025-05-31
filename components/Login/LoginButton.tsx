import { Button, Platform, View } from "react-native";

import React from "react";

interface Props {
  onPress: () => void;
}

const LoginButton = (props: Props) =>
  Platform.OS === "ios" ? (
    <View className="p-1 text-white bg-indigo-500 rounded-lg">
      <Button title="Press me" color="#fff" onPress={props.onPress} />
    </View>
  ) : (
    <Button title="Login" onPress={props.onPress} color="#6366f1" />
  );

export default LoginButton;
