import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Steps } from "../components/steps";
import { passes } from "@/utils/passes";
import dayjs from "dayjs";

export default function RenovatePass() {
  const { id } = useLocalSearchParams();
  const pass = passes.find(pass => pass.id === id)!;
  const diff = dayjs(pass.expireDate).diff(dayjs(), 'days');
  const renewDate = dayjs(pass.expireDate).add(1, 'month').format('YYYY-MM-DD');

  const router = useRouter();

  function pay() {
    router.push({ pathname: "/tickets/payment", params: { total: pass.value, successMessage: "Passe renovado com sucesso!" } })
  }

  return (
    <View className="p-8 flex-1">
      <View className="w-full flex-row items-center justify-between">
        <View className="flex-row gap-6">
          <Feather name="arrow-left" size={30} color='grey' onPress={() => router.back()} />
          <Text className="font-bold text-3xl text-slate-600">Renovar passe</Text>
        </View>
        <Steps>
          <Steps.Full />
          <Steps.Empty />
        </Steps>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />

      <View className="items-center justify-center mb-8 flex-1">
        <Text className="w-full text-slate-800 font-semibold text-xl mb-4">
          Confirme os dados
        </Text>
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
            {
              diff < 0 ?
                <Text className="font-regular text-xl text-slate-800">{pass.expireDate} (expirou)</Text>
                :
                <Text className="font-regular text-xl text-slate-800">{pass.expireDate} ({diff} dias)</Text>
            }
          </View>
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold text-xl text-slate-800">Renova até: </Text>
            <Text className="font-regular text-xl text-slate-800">{renewDate}</Text>
          </View>
          <View className="flex-row gap-2 items-center">
            <Text className="font-bold text-xl text-slate-800">Preço: </Text>
            <Text className="font-regular text-xl text-slate-800">{pass.value.toFixed(2)} €</Text>
          </View>
        </View>
        <View className="flex-row gap-4 py-6 items-center justify-center">
          <TouchableOpacity className="bg-red-700 px-5 py-2 rounded-md flex-1" onPress={() => router.back()}>
            <Text className="font-bold text-white text-2xl text-center">
              Cancelar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-800 px-5 py-2 rounded-md flex-1" onPress={pay}>
            <Text className="font-bold text-white text-2xl text-center">
              Pagar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
