import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { FormInput } from '../components/form-input';
import { TextInput } from 'react-native'



export default function Criticas() {
    const router = useRouter();

    return (

        <ScrollView className="p-8 flex-1">
            <View className="flex-row items-start w-full ">
                <Feather name="arrow-left" size={36} color="#475569" onPress={() => router.back()} />
                <Text className="font-bold text-3xl text-slate-600"> Críticas/Sugestões</Text>
            </View>

            <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />

            <View className="items-center gap-6 justify-center">

                <FormInput
                    name="Nome:"
                    placeholder="Nome"
                    inputMode="text"
                />
                <FormInput
                    name="Email:"
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <FormInput
                    name="Telefone:"
                    placeholder="Telefone"
                    keyboardType="numeric"
                    maxLength={9}
                />
                <View className="w-full gap-2">
                    <Text className="font-regular text-lg">Comentário:</Text>

                    <TextInput className="bg-white p-2 rounded-md border border-zinc-300" multiline placeholder="Comentário" />
                </View>

                <View className="mt-4 w-full">
                    <TouchableOpacity
                        className="w-full bg-green-600 py-3 items-center justify-center rounded-md"
                        activeOpacity={0.7}
                        onPress={() => Alert.alert("Sucesso", "A sua crítica/sugestão foi enviada com sucesso!")}
                    >
                        <Text className="text-white font-semibold text-xl">Enviar</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView >
    );
}
