import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, Alert, TextInput } from "react-native";
import { FormInput } from '../components/form-input';

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

const NAME_REGEX = /^[a-zA-Z ]+$/;
const PHONE_REGEX = /^[\d]{9}$/;
const EMAIL_REGEX = /^.+@.+\.[A-Za-z]+$/;

export default function Criticas() {
  const {theme, setTheme} = useContext(DarkModeContext);
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [comment, setComment] = useState("");

  function send() {
    if (name.trim().length === 0) {
      return Alert.alert("Erro", "O nome não pode ser vazio!");
    }

    if (!name.match(NAME_REGEX)) {
      return Alert.alert("Erro", "O nome não pode ter números");
    }

    if (!email.match(EMAIL_REGEX)) {
      return Alert.alert("Erro", "Formato de email inválido!");
    }

    if (!tel.match(PHONE_REGEX)) {
      return Alert.alert("Erro", "Formato de telefone inválido!");
    }

    Alert.alert("Sucesso", "A sua crítica/sugestão foi enviada com sucesso!");

    while (router.canGoBack()) {
      router.back()
    }
  }

  return (

    <ScrollView className="p-8 flex-1">
      <View className="flex-row items-center gap-4 w-full">
        <Feather name="arrow-left" size={36} style={{color: theme === 'dark' ? 'white' : '#475569'}} onPress={() => router.back()} />
        <Text className="font-bold text-3xl "style={{color: theme === 'dark' ? 'white' : '#475569'}}>Críticas/Sugestões</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />

      <View className="items-center gap-6 justify-center">
        <FormInput
          name="Nome:"
          placeholder="Nome"
          inputMode="text"
          value={name}
          onChangeText={setName}
        />
        <FormInput
          name="Email:"
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <FormInput
          name="Telefone:"
          placeholder="Telefone"
          keyboardType="numeric"
          maxLength={9}
          value={tel}
          onChangeText={setTel}
        />
        <View className="w-full gap-2">
          <Text className="font-regular text-lg" style={{color: theme === 'dark' ? 'white' : '#black'}}>Comentário:</Text>

          <TextInput
            className="bg-white p-2 rounded-md border border-zinc-300"
            multiline
            placeholder="Comentário"
            value={comment}
            onChangeText={setComment}
          />
        </View>

        <View className="mt-4 w-full">
          <TouchableOpacity
            className="w-full bg-green-600 py-3 items-center justify-center rounded-md"
            activeOpacity={0.7}
            onPress={send}
          >
            <Text className="text-white font-semibold text-xl">Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
