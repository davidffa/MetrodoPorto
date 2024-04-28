import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { FormInput } from '../components/form-input';
import { TextInput } from 'react-native'



export default function Recuperar() {
    const router = useRouter();

    return (

        <View className="p-8 flex-1">
            <View className="flex-row items-start w-full ">
                <Feather name="arrow-left" size={36} color="#475569" onPress={() => router.back()} />
                <Text className="font-bold text-3xl text-slate-600"> Recuperar Passes</Text>
            </View>

            <View className="w-full h-[1px] bg-blue-100 mt-2 mb-12" />
            <ScrollView >

                <Text className="text-xl text-center">Insira o seu número de telemóvel e email associado aos passes</Text>


                <View className="items-center gap-6 justify-center mt-4">

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

                </View>
                <View className="items-center gap-6 justify-center mb-4 mt-4">
                    <View className="mt-4 w-full">
                        <TouchableOpacity
                            className="w-full bg-blue-600 py-3 items-center justify-center rounded-md"
                            activeOpacity={0.7}
                            onPress={() => Alert.alert("Sucesso", "O código foi enviado com sucesso!")}
                        >
                            <Text className="text-white font-semibold text-xl">Enviar código</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View className="mt-4 mb-6">
                    <Text className="text-xl text-center">Insira o código enviado</Text>
                </View>
                <View className="flex-row justify-center mb-6">
                    <TextInput className="bg-white p-2 rounded-md border border-zinc-300 " keyboardType="numeric" maxLength={1} />
                    <TextInput className="bg-white p-2 rounded-md border border-zinc-300 ml-2" keyboardType="numeric" maxLength={1} />
                    <TextInput className="bg-white p-2 rounded-md border border-zinc-300 ml-2" keyboardType="numeric" maxLength={1} />
                    <TextInput className="bg-white p-2 rounded-md border border-zinc-300 ml-2" keyboardType="numeric" maxLength={1} />
                    <TextInput className="bg-white p-2 rounded-md border border-zinc-300 ml-2" keyboardType="numeric" maxLength={1} />
                    <TextInput className="bg-white p-2 rounded-md border border-zinc-300 ml-2" keyboardType="numeric" maxLength={1} />
                </View>

                <View className="items-center gap-6 justify-center">
                    <View className="mt-4 w-full">
                        <TouchableOpacity
                            className="w-full bg-green-600 py-3 items-center justify-center rounded-md"
                            activeOpacity={0.7}
                            onPress={() => Alert.alert("Sucesso", "Os seus passes foram recuperados com sucesso!")}
                        >
                            <Text className="text-white font-semibold text-xl">Recuperar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </View >
    );
}
