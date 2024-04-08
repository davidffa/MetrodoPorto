import { Alert, ScrollView, Text, View } from "react-native";
import { Steps } from "./components/steps";
import { LocationInput } from "./components/location_input";
import { NextButton } from "./components/next-button";
import { useState } from "react";
import MapView from "react-native-maps";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Home() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  function goNext() {
    Alert.alert("Dados", `Origin: ${origin} Destination: ${destination}`);
  }

  return (
    <KeyboardAwareScrollView>
      <ScrollView className="flex-1">
        <View className="h-64 bg-green-100">
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
        <View className="items-center justify-center mt-16 p-8">
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
      </ScrollView>
    </KeyboardAwareScrollView>
  )
}
