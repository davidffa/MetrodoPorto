import { Text, View } from "react-native";
import { LocationInput } from "../components/location-input";
import { NextButton } from "../components/next-button";
import { useState } from "react";
import MapView from "react-native-maps";
import { useRouter } from "expo-router";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export default function Home() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const { theme } = useContext(DarkModeContext);

  const router = useRouter();

  function goNext() {
    router.push({ pathname: '/buy-ticket/confirm-ticket', params: { zone: 'Z2' } });
  }

  return (
    <View className="flex-1 justify-between">
      <View className="h-[45%]">
        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: 41.152107,
            longitude: -8.609440,
            latitudeDelta: 0.01444,
            longitudeDelta: 0.00642
          }}
        />
      </View>
      <View className="items-center justify-center p-8 flex-1">
        <View className="flex-row justify-between w-full">
          <Text className="font-bold text-3xl" style={{ color: theme === 'dark' ? '#ffffff' : '#475569' }} >Comprar bilhetes</Text>
        </View>
        <View className="w-full h-[1px] mt-2 bg-blue-100" />

        <View className="w-full gap-6 mt-8 mb-8">
          <LocationInput placeholder="A sua origem" value={origin} onValueChange={setOrigin} />
          <LocationInput placeholder="O seu destino" value={destination} onValueChange={setDestination} />
        </View>

        <NextButton onPress={() => goNext()} />
      </View>
    </View>
  )
}
