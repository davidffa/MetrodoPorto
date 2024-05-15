import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";

import { Steps } from "../components/steps";
import { NextButton } from "../components/next-button";
import { FormInput } from '../components/form-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

const NAME_REGEX = /^[a-zA-Z ]+$/;
const PHONE_REGEX = /^[\d]{9}$/;
const EMAIL_REGEX = /^.+@.+\.[A-Za-z]+$/;

export default function CreatePass() {
  const router = useRouter();

  const { theme, setTheme } = useContext(DarkModeContext);

  const [selectedType, setSelectedType] = useState("mensal");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [file, setFile] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  async function uploadDoc() {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["application/pdf", "image/*"]
    });

    if (result.canceled) return;

    const asset = result.assets[0];

    setFile(asset.uri);
    setFileName(asset.name);
  }

  function handleCreatePass() {
    if (name.trim().length === 0) {
      return Alert.alert("Erro", "Nome vazio!");
    }

    if (!name.match(NAME_REGEX)) {
      return Alert.alert("Erro", "O nome apenas pode conter caracteres alfabéticos");
    }

    if (!email.match(EMAIL_REGEX)) {
      return Alert.alert("Erro", "Formato de email inválido!");
    }

    if (!telephone.match(PHONE_REGEX)) {
      return Alert.alert("Erro", "Formato de telefone inválido!");
    }

    if (selectedType === "estudante" && !file) {
      return Alert.alert("Erro", "Por favor, anexe um comprovativo de estudante");
    }

    router.push({ pathname: "/tickets/payment", params: { total: selectedType === "estudante" ? 30 : 40, successMessage: "Passe criado com sucesso!" } });
  }

  return (
    <KeyboardAwareScrollView>
      <ScrollView className="p-8">
        <View className="flex-row gap-6 w-full items-center justify-between">
          <View className="flex-row gap-4">
            <Feather name="arrow-left" size={30} style={{color: theme === 'dark' ? 'white' : '#475569'}} onPress={() => router.back()} />
            <Text className="font-bold text-3xl"style={{color: theme === 'dark' ? 'white' : '#475569'}}>Criar passe</Text>
          </View>

          <Steps>
            <Steps.Full />
            <Steps.Empty />
          </Steps>
        </View>

        <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />

        <View className="items-center gap-6 justify-center">
          <View className="w-full gap-2">
            <Text className="font-regular text-lg"style={{color: theme === 'dark' ? 'white' : '#475569'}}>Tipo de Passe</Text>
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

          <FormInput
            name="Nome"
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <FormInput
            name="Email"
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            name="Telefone"
            placeholder="Telefone"
            keyboardType="numeric"
            maxLength={9}
            value={telephone}
            onChangeText={setTelephone}
          />

          {
            selectedType === "estudante" && (
              file === null ?
                <View className="w-full gap-2">
                  <Text className="font-regular text-lg" style={{color: theme === 'dark' ? 'white' : '#475569'}}>Comprovativo de estudante</Text>
                  <TouchableOpacity
                    className="rounded-md border-2 border-dotted border-blue-800 bg-blue-300 w-full py-6 items-center justify-center"
                    activeOpacity={0.7}
                    onPress={uploadDoc}
                  >
                    <Text className=" font-semibold text-xl" style={{color: theme === 'dark' ? 'white' : '#475569'}}>Anexar comprovativo</Text>
                  </TouchableOpacity>
                </View>
                :
                <View className="w-full gap-2">
                  <Text className="font-regular text-lg" style={{color: theme === 'dark' ? 'white' : '#475569'}} >Documento anexado</Text>
                  <View className="flex-row w-full justify-between items-center bg-white p-2 rounded-md border border-gray-300">
                    <Text className="font-regular text-xl">{fileName}</Text>
                    <Feather name="x" color="red" size={24} onPress={() => setFile(null)} />
                  </View>
                </View>
            )
          }

          <View className="mt-4 w-full">
            <NextButton onPress={handleCreatePass} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView >
  );
}
