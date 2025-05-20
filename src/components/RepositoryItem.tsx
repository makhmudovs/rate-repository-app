import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import Stat from "./Stat";
import theme from "../theme";
import RepositoryHeader from "./RepositoryHeader";
import HeaderStats from "./HeaderStats";

const RepositoryItem = ({
  fullname,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.card}>
      <RepositoryHeader
        ownerAvatarUrl={ownerAvatarUrl}
        fullname={fullname}
        description={description}
        language={language}
      />
      <HeaderStats
        stargazersCount={stargazersCount}
        forksCount={forksCount}
        reviewCount={reviewCount}
        ratingAverage={ratingAverage}
      />
    </View>
  );
};

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
  }
});

export default RepositoryItem;
