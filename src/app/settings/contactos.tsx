import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Linking } from 'react-native'

export default function Contactos() {
    const router = useRouter();

    return (
        <View className="items-center p-8 flex-1">
            <View className="flex-row items-start w-full mt-8">
                <Feather name="arrow-left" size={36} color="#475569" onPress={() => router.back()} />
                <Text className="font-bold text-4xl text-slate-600"> Contactos</Text>
            </View>

            <View className="w-full h-[1px] bg-blue-100 mt-2 mb-2" />

            <SafeAreaView style={{ justifyContent: "space-between", flex: 1 }}>
                <Text className="text-slate-600 text-xl">Telefone:</Text>
                <Text onPress={() => { Linking.openURL('tel:225 081 000'); }} className="text-zinc-400 underline">225 081 000</Text>
                <View className="w-[80%] h-[1px] bg-blue-100 mt-2 mb-2" />
                <Text className="text-slate-600 text-xl">Email:</Text>
                <Text onPress={() => { Linking.openURL('mailto:metro@metrodoporto.pt'); }} className="text-zinc-400 underline">metro@metrodoporto.pt</Text>
                <View className="w-[80%] h-[1px] bg-blue-100 mt-2 mb-2" />
                <Text className="text-slate-600 text-xl">Telemóvel:</Text>
                <Text onPress={() => { Linking.openURL('tel:934 283 294'); }} className="text-zinc-400 underline">934283294</Text>
                <View className="w-[80%] h-[1px] bg-blue-100 mt-2 mb-2" />
                <Text className="text-slate-600 text-xl">Morada:</Text>
                <Text className="text-zinc-400">Avenida Fernão de Magalhães, 1862, 7º, 4350-158 Porto</Text>
                <View className="w-[80%] h-[1px] bg-blue-100 mt-2 mb-2" />
                <Text className="text-slate-600 text-xl">Apoio ao cliente:</Text>
                <Text onPress={() => { Linking.openURL('mailto:apoio.clientes@metrodoporto.pt'); }} className="text-zinc-400 underline">apoio.clientes@metrodoporto.pt</Text>
                <View className="w-[80%] h-[1px] bg-blue-100 mt-2 mb-2" />
                <Text className="text-slate-600 text-xl">Imprensa:</Text>
                <Text onPress={() => { Linking.openURL('mailto:imprensa@metrodoporto.pt'); }} className="text-zinc-400 underline">imprensa@metrodoporto.pt</Text>

            </SafeAreaView>

        </View>
    )
}
