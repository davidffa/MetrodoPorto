import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import QRCode from 'react-native-qrcode-svg';

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export default function UseTicket() {
  const {theme, setTheme} = useContext(DarkModeContext);
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex-1 flex-row w-full">
      <Feather name="arrow-left" style={{ position: 'absolute', top: 50, left: 20, zIndex: 1 }} size={30} color='white' onPress={() => router.back()} />
      <View className="flex-1 items-center justify-center" style={{backgroundColor: theme === 'dark' ? '#0e2b62' : '#2563eb'}}>
        <View className="p-2 rounded-md items-center justify-center bg-white">
          <QRCode
            logoBorderRadius={10} size={210} logoSize={20}
            logoMargin={20} logoBackgroundColor="transparent" logo={require("@/assets/logo.png")}
            color="black" value="Ola, espero que gostes desta aplicacao do metro do porto!"
          />
        </View>
        <Text className="text-white font-bold text-2xl mt-6">{id}</Text>
      </View>
    </View>
  )
}
