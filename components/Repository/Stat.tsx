import { View, Text } from "react-native";

const Stat = ({ label, value }: { label: string; value: number }) => (
  <View className="items-center flex-1">
    <Text className="font-bold text-md">{value}</Text>
    <Text className="text-sm text-gray-500">{label}</Text>
  </View>
);


export default Stat;
