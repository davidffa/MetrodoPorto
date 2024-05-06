import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Linking, Platform } from 'react-native'

const FULL_ADDRESS = "Avenida Fernão de Magalhães, 1862, 7º, 4350-158 Porto";

export default function Contactos() {
  const router = useRouter();

  const addressUrl = Platform.select({
    ios: `maps:41.1654045,-8.5886866?q=${FULL_ADDRESS}`,
    android: `geo:41.1654045,-8.5886866?q=${FULL_ADDRESS}`,
  })

  return (
    <View className="items-center p-8 flex-1">
      <View className="flex-row items-center gap-4 w-full">
        <Feather name="arrow-left" size={36} color="#475569" onPress={() => router.back()} />
        <Text className="font-bold text-4xl text-slate-600">Contactos</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-2" />

      <View className="flex-1 justify-between my-6">
        <Text className="text-slate-600 text-xl">Telefone:</Text>
        <Text onPress={() => { Linking.openURL('tel:225 081 000'); }} className="text-zinc-400 underline">225 081 000</Text>
        <View className=" h-[1px] bg-white " />
        <Text className="text-slate-600 text-xl">Telemóvel:</Text>
        <Text onPress={() => { Linking.openURL('tel:934 283 294'); }} className="text-zinc-400 underline">934283294</Text>
        <View className=" h-[1px] bg-blue-100" />
        <Text className="text-slate-600 text-xl">Email:</Text>
        <Text onPress={() => { Linking.openURL('mailto:metro@metrodoporto.pt'); }} className="text-zinc-400 underline">metro@metrodoporto.pt</Text>
        <View className=" h-[1px] bg-white" />
        <Text className="text-slate-600 text-xl">Morada:</Text>
        <Text onPress={() => Linking.openURL(addressUrl)} className="text-zinc-400 underline">Avenida Fernão de Magalhães, 1862, 7º, 4350-158 Porto</Text>
        <View className=" h-[1px] bg-blue-100" />
        <Text className="text-slate-600 text-xl">Apoio ao cliente:</Text>
        <Text onPress={() => { Linking.openURL('mailto:apoio.clientes@metrodoporto.pt'); }} className="text-zinc-400 underline">apoio.clientes@metrodoporto.pt</Text>
        <View className=" h-[1px] bg-white" />
        <Text className="text-slate-600 text-xl">Imprensa:</Text>
        <Text onPress={() => { Linking.openURL('mailto:imprensa@metrodoporto.pt'); }} className="text-zinc-400 underline">imprensa@metrodoporto.pt</Text>
      </View>
    </View>
  )
}
