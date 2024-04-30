import { Feather } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Linking } from 'react-native'


export default function More() {
  const router = useRouter();

  return (
    <View className=" p-8 flex-1">
      <View className="w-full">
        <Text className="font-bold text-4xl text-slate-600">Mais</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-2" />

      <View className="flex-1 my-6 justify-between">

        <TouchableOpacity className="flex-row items-center border border-blue-100 bg-blue-100 rounded-lg" onPress={() => (router.push('/more/informacoes'))} >
          <Feather name="info" size={48} />
          <Text className="font-bold text-2xl text-black">  Informações</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => Linking.openURL('https://www.metrodoporto.pt')}>
          <Feather name="globe" size={48} />
          <Text className="font-bold text-2xl text-black">  Website</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => Linking.openURL('https://www.metrodoporto.pt/pages/761')}>
          <Feather name="monitor" size={48} />
          <Text className="font-bold text-2xl text-black">  Quiosques</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/more/criticas'))}>
          <Feather name="message-circle" size={48} />
          <Text className="font-bold text-2xl text-black">  Críticas/Sugestões</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/more/recuperar'))}>
          <Feather name="archive" size={48} />
          <Text className="font-bold text-2xl text-black">  Recuperar Passes</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/more/privacidade'))}>
          <Feather name="paperclip" size={48} />
          <Text className="font-bold text-2xl text-black">  Política de Privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/more/contactos'))}>
          <Feather name="phone" size={48} />
          <Text className="font-bold text-2xl text-black">  Contactos</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/more/definicoes'))}>
          <Feather name="settings" size={48} />
          <Text className="font-bold text-2xl text-black">  Definições</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}
