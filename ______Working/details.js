import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function Details({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/name">Go to Index</Link>
    </View>
  );
}
