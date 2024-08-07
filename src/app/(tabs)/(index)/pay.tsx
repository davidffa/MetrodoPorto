import { Feather } from "@expo/vector-icons";
import { Alert, Text, View } from "react-native";
import { Steps } from "@/app/components/steps";
import { useLocalSearchParams, useRouter } from "expo-router";
import { PaymentOption } from "@/app/components/payment-option";
import { PayButton } from "@/app/components/pay-button";
import { useState } from "react";
import { paymentMethods } from "@/utils/payment-methods";

export default function Pay() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [selectedPayment, setSelectedPayment] = useState("MBWay");


  function confirmPayment() {
    Alert.alert(
      "Confirmação",
      `Tem a certeza que pretende pagar ${params.total}€ com ${selectedPayment}?`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { text: "OK", onPress: fakePayment }
      ]
    );
  }
  function fakePayment() {
    Alert.alert("Sucesso", "Pagamento realizado com sucesso!");

    // Reset navigation history
    while (router.canGoBack()) {
      router.back();
    }

    router.replace("/tickets/");
  }

  return (
    <View className="flex-1 py-10 px-6">
      <View className="items-center justify-between flex-row">
        <Feather name="arrow-left" size={24} onPress={() => router.back()} />
        <Steps>
          <Steps.Full />
          <Steps.Full />
        </Steps>
      </View>

      <Text className="font-bold text-3xl mt-8 text-slate-800">Método de Pagamento</Text>
      <View className="w-full h-[1px] bg-blue-100 mt-2" />

      <View className="mt-6 flex-1 justify-around">
        <View className="gap-4">
          {
            Object.entries(paymentMethods).map(entry => (
              <PaymentOption name={entry[0]} image={entry[1]} key={entry[0]} selected={entry[0] === selectedPayment} onPress={() => setSelectedPayment(entry[0])} />
            ))
          }
        </View>

        <View className="items-end">
          <Text className="items-end font-bold text-2xl">Total: {params.total}€</Text>
        </View>

        <PayButton onPress={confirmPayment} />
      </View>
    </View>
  );
}
