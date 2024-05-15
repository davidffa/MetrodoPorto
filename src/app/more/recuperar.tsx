import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Alert, ScrollView, TextInput } from "react-native";
import { FormInput } from '../components/form-input';
import { useEffect, useRef, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import clsx from "clsx";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export default function Recuperar() {
  const {theme, setTheme} = useContext(DarkModeContext);
  const router = useRouter();
  const [codeSent, setCodeSent] = useState(false);
  const [remaining, setRemaining] = useState(0);
  const [code, setCode] = useState<string[]>([]);

  const codeRef = Array(6).fill(0).map(_ => useRef<TextInput>(null));

  useEffect(() => {
    if (remaining === 0) return;

    setTimeout(() => {
      if (remaining > 0)
        setRemaining(remaining - 1);
    }, 1000);
  }, [remaining]);

  function handleCodeChange(digit: string, index: number) {
    if (digit == "") {
      if (index > 0 && index < 6)
        codeRef[index - 1].current!.focus();
      else
        codeRef[index].current!.blur();
    } else {
      if (index < 5) {
        codeRef[index + 1].current!.focus();
      } else {
        codeRef[index].current!.blur();
      }
    }

    setCode(prev => {
      const newCode = [...prev];
      newCode[index] = digit;
      return newCode;
    })
  }

  function sendCode() {
    Alert.alert("Sucesso", "O código foi enviado com sucesso!");

    setCodeSent(true);
    setRemaining(30);
  }

  function recovery() {
    if (code.length < 6 || code.some(it => it === "")) {
      Alert.alert("Erro", "Preencha o código de recuperação!");
      return;
    }

    while (router.canGoBack()) {
      router.back();
    }

    Alert.alert("Sucesso", "Foram recuperados 2 passes com sucesso!");
    router.replace("/tickets/")
  }

  return (
    <View className="p-8 flex-1">
      <View className="flex-row items-center w-full gap-4">
        <Feather name="arrow-left" size={36} color="#475569" onPress={() => router.back()} />
        <Text className="font-bold text-3xl text-slate-600">Recuperar Passes</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-12" />

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
      >
        <ScrollView>
          <Text className="text-xl text-center">Insira o seu número de telemóvel ou o email associado aos passes</Text>

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
                className={clsx("w-full bg-blue-600 py-3 items-center justify-center rounded-md", { "opacity-50": remaining !== 0 })}
                activeOpacity={0.7}
                disabled={remaining !== 0}
                onPress={sendCode}
              >
                <Text className="text-white font-semibold text-xl">
                  {
                    remaining === 0 ? "Enviar código" : `Re-enviar código (${remaining}s)`
                  }
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {
            codeSent && (
              <>
                <View className="mt-4 mb-6">
                  <Text className="text-xl text-center">Insira o código enviado</Text>
                </View>
                <View className="flex-row justify-center mb-6 gap-1">
                  {
                    Array(6).fill(0).map((_, i) => (
                      <TextInput
                        key={i}
                        value={code[i]}
                        onChangeText={(digit) => handleCodeChange(digit, i)}
                        ref={codeRef[i]}
                        className="bg-white p-2 w-8 text-center rounded-md border border-zinc-300"
                        keyboardType="numeric"
                        maxLength={1}
                      />
                    ))
                  }
                </View>

                <View className="items-center gap-6 justify-center">
                  <View className="mt-4 w-full">
                    <TouchableOpacity
                      className="w-full bg-green-600 py-3 items-center justify-center rounded-md"
                      activeOpacity={0.7}
                      onPress={recovery}
                    >
                      <Text className="text-white font-semibold text-xl">Recuperar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )
          }
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
}
