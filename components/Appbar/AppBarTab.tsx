import { Text, View } from "react-native";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({ href, title }: { href: string; title: string }) => {
  const location = useLocation();

  return (
    <View>
      <Link to={href}>
        <Text
          className={`${
            location.pathname === href ? "text-indigo-500" : "text-white"
          } text-xl font-bold me-3`}
        >
          {title}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
