import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Steps } from "../components/steps";

export default function RenovateTicket() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  function pay() {
    // router.push({ pathname: "/tickets/payment" })
  }

  return (
    <View className="items-center justify-center mt-4 p-8" >
      <View className="flex-row gap-6 w-full">
        <Feather name="arrow-left" size={30} color='grey' onPress={() => router.back()} />
        <Text className="font-bold text-3xl text-slate-600">Renovar pass</Text>
        <Steps>
          <Steps.Full />
          <Steps.Empty />
        </Steps>
      </View>
      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />
      <View className="items-center justify-center w-full py-20">
        <View className="bg-white p-4 rounded-md w-full gap-8">
          <Text className="font-bold text-gray-500">Tipo de passe: </Text>
          <Text className="font-bold text-gray-500">Data de ativaçao: </Text>
          <Text className="font-bold text-gray-500">Validade: </Text>
          <Text className="font-bold text-gray-500">Renova ate: </Text>

        </View>
        <View className="flex-row gap-4 py-6 w-full items-center justify-center">
          <TouchableOpacity style={{ flex: 1 }} className="bg-red-700 px-5 py-2 rounded-md" onPress={() => router.back()}>
            <Text className="font-bold text-white text-xl text-center">
              Cancelar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} className="bg-green-700 px-5 py-2 rounded-md" onPress={() => router.push({ pathname: "/buy-ticket/pay" })}>
            <Text className="font-bold text-white text-xl text-center">
              Renovar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
