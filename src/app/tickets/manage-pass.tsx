import { passes } from "@/utils/passes";
import { Feather } from "@expo/vector-icons";
import dayjs from "dayjs";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export default function ManagePass() {
  const { id } = useLocalSearchParams();
  const pass = passes.find(p => p.id === id)!;
  const diff = dayjs(pass.expireDate).diff(dayjs(), 'days');
  const router = useRouter();
  const { theme, setTheme } = useContext(DarkModeContext);

  function usePass() {
    router.push({ pathname: "/tickets/use-ticket", params: { id } });
  }

  function renovatePass() {
    router.push({ pathname: "/tickets/renovate-pass", params: { id } });
  }

  return (
    <View className="p-8 flex-1">
      <View className="flex-row gap-6 mt-6">
        <Feather name="arrow-left" size={30} color='grey' onPress={() => router.back()} />
        <Text className="font-bold text-3xl text-slate-600">Gerir passe</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2" />

      <View className="items-center justify-center mb-8 flex-1">
        <View className="bg-white p-6 rounded-md w-full gap-8 border border-gray-400">
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold text-xl text-slate-800">Tipo de passe: </Text>
            <Text className="font-regular text-xl text-slate-800">{pass.name}</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold text-xl text-slate-800">Data de ativaçao: </Text>
            <Text className="font-regular text-xl text-slate-800">{pass.activationDate}</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold text-xl text-slate-800">Validade: </Text>
            <Text className="font-regular text-xl text-slate-800">{pass.expireDate} ({diff} dias)</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold text-xl text-slate-800">Ultimo uso: </Text>
            <Text className="font-regular text-xl text-slate-800">{pass.lastUse}</Text>
          </View>
        </View>
        <View className="flex-row gap-4 py-6 items-center justify-center">
          <TouchableOpacity className="bg-green-700 px-5 py-2 rounded-md flex-1" onPress={renovatePass}>
            <Text className="font-bold text-white text-2xl text-center">
              Renovar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-blue-800 px-5 py-2 rounded-md flex-1" onPress={usePass}>
            <Text className="font-bold text-white text-2xl text-center">
              Usar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
