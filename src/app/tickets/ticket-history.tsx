import { usedTickets } from "@/utils/used-tickets";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import { UsedTicket } from "../components/used-ticket";

export default function TicketHistory() {
  const router = useRouter();

  function buyAgain(id: string) {
    const usedTicket = usedTickets.find(t => t.id === id)!;

    const zone = usedTicket.type.split(" ").pop()!;

    router.push({ pathname: '/buy-ticket/confirm-ticket', params: { zone } })
  }

  return (
    <View className="flex-1 px-8 pt-8">
      <View className="flex-row gap-6 w-full mt-6">
        <Feather name="arrow-left" size={30} color='grey' onPress={() => router.back()} />
        <Text className="font-bold text-3xl text-slate-600">Histórico de bilhetes</Text>
      </View>
      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16, paddingBottom: 16 }}
        data={usedTickets.sort((a, b) => b.usedDate.getTime() - a.usedDate.getTime())}
        renderItem={({ item }) => <UsedTicket id={item.id} usedDate={item.usedDate} type={item.type} station={item.station} buyAgain={buyAgain} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
