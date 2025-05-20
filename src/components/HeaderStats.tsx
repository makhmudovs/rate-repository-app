import { View, Text, Image, StyleSheet } from "react-native";
import Stat from "./Stat";

const HeaderStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}: {
  stargazersCount: number;
  forksCount: number;
  reviewCount: number;
  ratingAverage: number;
}) => {
  const formatCount = (count) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  };
  return (
    <View style={styles.statsRow}>
      <Stat label="Stars" value={formatCount(stargazersCount)} />
      <Stat label="Forks" value={formatCount(forksCount)} />
      <Stat label="Reviews" value={reviewCount} />
      <Stat label="Rating" value={ratingAverage} />
    </View>
  );
};

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
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

export default HeaderStats;
