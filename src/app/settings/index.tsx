import { Feather } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Linking } from 'react-native'


export default function Settings() {
    const router = useRouter();

    return (
        <View className=" p-8 flex-1">
            <View className="flex-row justify-between w-full mt-8">
                <Text className="font-bold text-4xl text-slate-600">Mais</Text>
            </View>

            <View className="w-full h-[1px] bg-blue-100 mt-2 mb-2" />

            <SafeAreaView style={{ justifyContent: "space-between", flex: 1 }}>

                <TouchableOpacity className="flex-row items-center border border-blue-100 bg-blue-100 rounded-lg" onPress={() => (router.push('/settings/informacoes'))} >
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
                <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/settings/criticas'))}>
                    <Feather name="message-circle" size={48} />
                    <Text className="font-bold text-2xl text-black">  Críticas/Sugestões</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/settings/recuperar'))}>
                    <Feather name="archive" size={48} />
                    <Text className="font-bold text-2xl text-black">  Recuperar Passes</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/settings/privacidade'))}>
                    <Feather name="paperclip" size={48} />
                    <Text className="font-bold text-2xl text-black">  Política de Privacidade</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/settings/contactos'))}>
                    <Feather name="phone" size={48} />
                    <Text className="font-bold text-2xl text-black">  Contactos</Text>
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center border border-blue-100  bg-blue-100 rounded-lg" onPress={() => (router.push('/settings/definicoes'))}>
                    <Feather name="settings" size={48} />
                    <Text className="font-bold text-2xl text-black">  Definições</Text>
                </TouchableOpacity>
            </SafeAreaView>

        </View >

    )
}
