import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Linking, Platform } from 'react-native'

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

const FULL_ADDRESS = "Avenida Fernão de Magalhães, 1862, 7º, 4350-158 Porto";

export default function Contactos() {
  const router = useRouter();
  const {theme, setTheme} = useContext(DarkModeContext);

  const addressUrl = Platform.select({
    ios: `maps:41.1654045,-8.5886866?q=${FULL_ADDRESS}`,
    android: `geo:41.1654045,-8.5886866?q=${FULL_ADDRESS}`,
  }) as string

  return (
    <View className="items-center p-8 flex-1">
      <View className="flex-row items-center gap-4 w-full">
        <Feather name="arrow-left" size={36} style={{color: theme === 'dark' ? 'white' : '#475569'}} onPress={() => router.back()} />
        <Text className="font-bold text-4xl "style={{color: theme === 'dark' ? 'white' : '#475569'}}>Contactos</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-2" />

      <View className="flex-1 justify-between my-6">
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#475569'}}>Telefone:</Text>
        <Text onPress={() => { Linking.openURL('tel:225 081 000'); }} className=" underline" style={{color: theme === 'dark' ? 'white' : '#a1a1aa'}}>225 081 000</Text>
        <View className=" h-[1px] bg-white " />
        <Text className=" text-xl"style={{color: theme === 'dark' ? 'white' : '#475569'}}>Telemóvel:</Text>
        <Text onPress={() => { Linking.openURL('tel:934 283 294'); }} className=" underline" style={{color: theme === 'dark' ? 'white' : '#a1a1aa'}}>934283294</Text>
        <View className=" h-[1px] bg-blue-100" />
        <Text className=" text-xl"style={{color: theme === 'dark' ? 'white' : '#475569'}}>Email:</Text>
        <Text onPress={() => { Linking.openURL('mailto:metro@metrodoporto.pt'); }} className="underline" style={{color: theme === 'dark' ? 'white' : '#a1a1aa'}}>metro@metrodoporto.pt</Text>
        <View className=" h-[1px] bg-white" />
        <Text className="text-xl"style={{color: theme === 'dark' ? 'white' : '#475569'}}>Morada:</Text>
        <Text onPress={() => Linking.openURL(addressUrl)} className=" underline" style={{color: theme === 'dark' ? 'white' : '#a1a1aa'}}>Avenida Fernão de Magalhães, 1862, 7º, 4350-158 Porto</Text>
        <View className=" h-[1px] bg-blue-100" />
        <Text className=" text-xl"style={{color: theme === 'dark' ? 'white' : '#475569'}}>Apoio ao cliente:</Text>
        <Text onPress={() => { Linking.openURL('mailto:apoio.clientes@metrodoporto.pt'); }} className=" underline" style={{color: theme === 'dark' ? 'white' : '#a1a1aa'}}>apoio.clientes@metrodoporto.pt</Text>
        <View className=" h-[1px] bg-white" />
        <Text className=" text-xl"style={{color: theme === 'dark' ? 'white' : '#475569'}} >Imprensa:</Text>
        <Text onPress={() => { Linking.openURL('mailto:imprensa@metrodoporto.pt'); }} className=" underline" style={{color: theme === 'dark' ? 'white' : '#a1a1aa'}}>imprensa@metrodoporto.pt</Text>
      </View>
    </View>
  )
}
