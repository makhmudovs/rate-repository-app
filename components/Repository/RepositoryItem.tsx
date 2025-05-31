import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryStats from "./RepositoryStats";

const RepositoryItem = ({
  fullname,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}: {
  fullname: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}) => {
  return (
    <View
      className="p-5 mx-4 my-2 bg-white rounded-lg shadow-lg shadow-gray-300"
      style={{ elevation: 10 }}
    >
      <RepositoryHeader
        ownerAvatarUrl={ownerAvatarUrl}
        fullname={fullname}
        description={description}
        language={language}
      />
      <RepositoryStats
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  );
};

export default RepositoryItem;
