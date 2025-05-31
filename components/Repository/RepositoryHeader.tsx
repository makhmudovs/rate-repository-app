import { View, Text, Image } from "react-native";

const RepositoryHeader = ({
  ownerAvatarUrl,
  fullname,
  description,
  language,
}: {
  ownerAvatarUrl: string;
  fullname: string;
  description: string;
  language: string;
}) => {
  return (
    <View className="flex-row my-3">
      <Image source={{ uri: ownerAvatarUrl }} className="w-[50] h-[50] mr-3 rounded-lg" />
      <View className="flex-1">
        <Text className="font-bold mb-1 text-lg">{fullname}</Text>
        <Text className="text-md mb-1 text-gray-700">{description}</Text>
        <View className="self-start bg-indigo-500 rounded-md py-0.5 px-1">
          <Text className="text-white text-sm">{language}</Text>
        </View>
      </View>
    </View>
  );
};


export default RepositoryHeader;
