import { Text, View } from "react-native";
import { LocationInput } from "@/app/components/location-input";
import { NextButton } from "@/app/components/next-button";
import { useState } from "react";
import MapView from "react-native-maps";
import { useRouter } from "expo-router";

export default function Home() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const router = useRouter();

  function goNext() {
    router.push({ pathname: '/(index)/confirm-ticket', params: { zone: 'Z2' } });
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
          <Text className="font-bold text-3xl text-slate-600">Comprar bilhetes</Text>
        </View>
        <View className="w-full h-[1px] bg-blue-100 mt-2" />

        <View className="w-full gap-6 mt-8 mb-8">
          <LocationInput placeholder="A sua origem" value={origin} onValueChange={setOrigin} />
          <LocationInput placeholder="O seu destino" value={destination} onValueChange={setDestination} />
        </View>

        <NextButton onPress={() => goNext()} />
      </View>
    </View>
  )
}
