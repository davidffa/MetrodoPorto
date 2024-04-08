import { Alert, Text, View } from "react-native";
import { Steps } from "./components/steps";
import { LocationInput } from "./components/location_input";
import { NextButton } from "./components/next-button";
import { useState } from "react";

export default function Home() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  function goNext() {
    Alert.alert("Dados", `Origin: ${origin} Destination: ${destination}`);
  }

  return (
    <View className="flex-1 items-center justify-center p-8">
      <View className="flex-row justify-between w-full">
        <Text className="font-bold text-3xl text-slate-600">Comprar bilhetes</Text>
        <Steps>
          <Steps.Full />
          <Steps.Empty />
          <Steps.Empty />
        </Steps>
      </View>
      <View className="w-full h-[1px] bg-blue-100 mt-2" />

      <View className="w-full gap-6 mt-8 mb-8">
        <LocationInput placeholder="A sua origem" value={origin} onChangeText={setOrigin} />
        <LocationInput placeholder="O seu destino" value={destination} onChangeText={setDestination} />
      </View>

      <NextButton onPress={() => goNext()} />
    </View>
  )
}
