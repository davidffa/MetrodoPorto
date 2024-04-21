import React, { useState } from 'react';
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Steps } from "../components/steps";

export default function CreatePass() {
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [selectedType, setSelectedType] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');

    const handleNext = () => {
        // Handle the next button press event
    };

    return (
        <View className="items-center justify-center mt-4 p-8 gap-4">
            <View className="flex-row gap-6 w-full items-center">
                <Feather name="arrow-left" size={30} color='grey' onPress={() => router.back()} />
                <Text className="font-bold text-3xl text-slate-600">Criar passe</Text>
                <Steps>
                    <Steps.Full />
                    <Steps.Empty />
                </Steps>
            </View>
            
            <TouchableOpacity
                className="w-full py-3 px-4 border border-gray-300 rounded-md mt-4"
            >
                <Text className="text-gray-700">{selectedType ? selectedType : 'Selecione o tipo'}</Text>
            </TouchableOpacity>
            <Text className='color-black'>
                NOME:
            </Text>
            <TextInput
                className="w-full py-3 px-4 border border-gray-300 rounded-md mt-4"
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <Text className='color-black'>
                NOME:
            </Text>
            <TextInput
                className="w-full py-3 px-4 border border-gray-300 rounded-md mt-4"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Text className='color-black'>
                NOME:
            </Text>
            <TextInput
                className="w-full py-3 px-4 border border-gray-300 rounded-md mt-4"
                placeholder="Telephone"
                value={telephone}
                onChangeText={setTelephone}
            />

            <TouchableOpacity
                className="w-full bg-blue-700 text-white py-4 rounded-md mt-4"
                onPress={handleNext}
            >
                <Text className="text-center color-white font-bold">Prxoimo</Text>
            </TouchableOpacity>
        </View>
    );
}
