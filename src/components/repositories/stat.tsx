import { View, Text, StyleSheet } from "react-native";

type Props = {
  value: number;
  label: string;
};
export function Stat({ value, label }: Props) {
  return (
    <View style={styles.statItem}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontWeight: "bold",
    fontSize: 14,
  },
  statLabel: {
    fontSize: 12,
    color: "#777",
  },
});
