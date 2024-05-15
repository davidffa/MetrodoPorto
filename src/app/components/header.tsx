import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import { useRouter } from "expo-router";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';


export function Header() {

  const {theme, setTheme} = useContext(DarkModeContext);

  const router = useRouter();

  function goHome() {
    router.push("/buy-ticket/");
  }

  return (
    <TouchableWithoutFeedback onPress={goHome}>
      <View className="flex-row items-center justify-around px-10 py-6 pt-10" style={{backgroundColor: theme === 'dark' ? '#101e48' : '#1e40af'}}>
        {/* i tried to change te logo didnt work */}
        <Image source={require("@/assets/logo.png")} />
        <Text className="font-bold text-3xl" style={{color: theme === 'dark' ? 'white' : 'white'}}>Metro do Porto</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
