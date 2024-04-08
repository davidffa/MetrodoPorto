import { Image, Text, View } from "react-native";

export function Header() {
  return (
    <View className="flex-row bg-blue-800 items-center justify-around px-10 py-6 pt-10">
      <Image source={require("@/assets/logo.png")} />
      <Text className="text-white font-bold text-3xl">Metro do Porto</Text>
    </View>
  );
}
