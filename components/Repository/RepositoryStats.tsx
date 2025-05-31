import { View ,StyleSheet} from "react-native";
import Stat from "./Stat";


const RepositoryStats = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage
}: {
  stargazersCount:number,
  forksCount:number,
  reviewCount:number,
  ratingAverage:number
}) => {
  const formatCount = (count: number) => {
    return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count;
  };
  return (
    <View className="flex-row space-between">
      <Stat label="Stars" value={formatCount(stargazersCount)} />
      <Stat label="Forks" value={formatCount(forksCount)} />
      <Stat label="Reviews" value={reviewCount} />
      <Stat label="Rating" value={ratingAverage} />
    </View>
  );
};

export default RepositoryStats;
