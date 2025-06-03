import { RepositoryItem } from "@/components/repositories/repositoryItem";
import useRepositories from "@/hooks/useRepositories";
import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

const ItemSeparator = () => <View style={styles.separator} />;

export default function Repositories() {
  const { repositories, loading, refetch } = useRepositories();
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem
          fullname={item.fullName}
          description={item.description}
          language={item.language}
          forksCount={item.forksCount}
          stargazersCount={item.stargazersCount}
          ratingAverage={item.ratingAverage}
          reviewCount={item.reviewCount}
          ownerAvatarUrl={item.ownerAvatarUrl}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    height: 10,
  },
});
