import { View, Text, Image, StyleSheet } from "react-native";
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
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 7,
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
});

export default RepositoryHeader;
