import { NextButton } from "@/app/components/next-button";
import { Steps } from "@/app/components/steps";
import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function ConfirmTicket() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(1.14);
  const [iva, setIva] = useState(0.26);
  const [total, setTotal] = useState(1.40);

  useEffect(() => {
    const tot = quantity * 1.40;
    setTotal(tot);
    setSubtotal(Number((tot / 1.23).toFixed(2)));
    setIva(tot - Number((tot / 1.23).toFixed(2)));
  }, [quantity]);

  return (
    <View className="flex-1 py-10 px-8">
      <View className="items-center justify-between flex-row">
        <Feather name="arrow-left" size={24} onPress={() => router.back()} />
        <Steps>
          <Steps.Full />
          <Steps.Empty />
        </Steps>
      </View>

      <Text className="font-bold text-3xl mt-8 text-slate-800">Confirmar Compra</Text>
      <View className="w-full h-[1px] bg-blue-100 mt-2" />

      <View className="flex-1 justify-around">
        <View className="bg-white border border-gray-400 p-8 my-10 rounded-md gap-4">
          <View className="flex-row">
            <Text className="font-semibold text-lg">Título de viagem: </Text>
            <Text className="font-regular text-lg">Ocasional</Text>
          </View>
          <View className="flex-row">
            <Text className="font-semibold text-lg">Zona: </Text>
            <Text className="font-regular text-lg">{params.zone}</Text>
          </View>
          <View className="flex-row">
            <Text className="font-semibold text-lg">Valor (com IVA): </Text>
            <Text className="font-regular text-lg">1,40 €</Text>
          </View>
          <View className="flex-row gap-4 items-center">
            <Text className="font-semibold text-lg">Quantidade:</Text>

            <Feather name="minus-circle" size={28} disabled={quantity <= 1} color={quantity <= 1 ? "#00000019" : "#000000"} onPress={() => setQuantity(quantity - 1)} />
            <Text className="font-semibold">{quantity}</Text>
            <Feather name="plus-circle" size={28} disabled={quantity >= 30} color={quantity <= 30 ? "#000000" : "#00000019"} onPress={() => setQuantity(quantity + 1)} />
          </View>
        </View>

        <View className="items-end mb-8 gap-2">
          <View className="flex-row">
            <Text className="text-xl font-semibold">Sub-total: </Text>
            <Text className="text-xl font-regular">{subtotal.toFixed(2)}€</Text>
          </View>
          <View className="flex-row">
            <Text className="text-xl font-semibold">IVA: </Text>
            <Text className="text-xl font-regular">{iva.toFixed(2)}€</Text>
          </View>
          <View className="flex-row">
            <Text className="text-3xl font-bold">Total: </Text>
            <Text className="text-3xl font-bold">{total.toFixed(2)}€</Text>
          </View>
        </View>

        <NextButton onPress={() => router.push({ pathname: "/(index)/pay", params: { total: total.toFixed(2) } })} />
      </View>
    </View>
  );
}
