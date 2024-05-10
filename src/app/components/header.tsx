import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { useRouter } from "expo-router";

export function Header() {

  const router = useRouter();

  function goHome() {
    router.push("/buy-ticket/");
  }

  return (
    <TouchableWithoutFeedback onPress={goHome}>
      <View className="flex-row bg-blue-800 items-center justify-around px-10 py-6 pt-10" >
        <Image source={require("@/assets/logo.png")} />
        <Text className="text-white font-bold text-3xl">Metro do Porto</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
