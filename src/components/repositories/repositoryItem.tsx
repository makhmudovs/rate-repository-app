import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Stat } from "@/components/repositories/stat";

type Props = {
  fullname: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
};

export function RepositoryItem({
  fullname,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}: Props) {
  const formatCount = (count) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  };
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.fullName}>{fullname}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.languageTag}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsRow}>
        <Stat label="Stars" value={formatCount(stargazersCount)} />
        <Stat label="Forks" value={formatCount(forksCount)} />
        <Stat label="Reviews" value={reviewCount} />
        <Stat label="Rating" value={ratingAverage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 6,
    elevation: 3, // for Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 6,
  },
  languageTag: {
    alignSelf: "flex-start",
    backgroundColor: "#0366d6",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  languageText: {
    color: "#fff",
    fontSize: 12,
  },
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
