import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { Steps } from "../components/steps";
import { NextButton } from "../components/next-button";
import { FormInput } from '../components/form-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Picker } from "@react-native-picker/picker";

export default function CreatePass() {
  const router = useRouter();

  const [selectedType, setSelectedType] = useState("mensal");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
    >
      <ScrollView className="p-8">
        <View className="flex-row gap-6 w-full items-center justify-between">
          <View className="flex-row gap-4">
            <Feather name="arrow-left" size={30} color='grey' onPress={() => router.back()} />
            <Text className="font-bold text-3xl text-slate-600">Criar passe</Text>
          </View>

          <Steps>
            <Steps.Full />
            <Steps.Empty />
          </Steps>
        </View>

        <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />

        <View className="items-center gap-6 justify-center">
          <View className="w-full gap-2">
            <Text className="font-regular text-lg">Tipo de Passe</Text>
            <View className="w-full bg-white rounded-md border border-gray-300">
              <Picker
                selectedValue={selectedType}
                onValueChange={(val) => setSelectedType(val)}
              >
                <Picker.Item label="Mensal" value="mensal" />
                <Picker.Item label="Turístico" value="turistico" />
                <Picker.Item label="Estudante" value="estudante" />
              </Picker>
            </View>
          </View>

          {
            // <TouchableOpacity
            //   className="w-full py-3 px-4 border border-gray-300 rounded-md mt-4"
            // >
            //   <Text className="text-gray-700">{selectedType ? selectedType : 'Selecione o tipo'}</Text>
            // </TouchableOpacity>
          }

          <FormInput
            name="Nome"
          />
          <FormInput
            name="Email"
          />
          <FormInput
            name="Telefone"
          />

          <View className="mt-4 w-full">

            <NextButton onPress={() => { }} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
