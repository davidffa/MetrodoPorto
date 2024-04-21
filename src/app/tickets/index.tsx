import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Ticket } from "../components/ticket";
import { Passe } from "../components/passe";
import { SwitchChoice } from "../components/switchchoice";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Tickets() {
  const router = useRouter();

  function usePass(id: string) {
    router.push({ pathname: "/tickets/use-ticket", params: { id } });
  }

  function managePass(id: string) {
    router.push({ pathname: "/tickets/manage-ticket", params: { id } });
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View className="items-center justify-center mt-4 p-8">
          <View className="flex-row justify-between w-full">
            <Text className="font-bold text-3xl text-slate-600">Bilhetes e Passes</Text>
          </View>

          <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />

          <SwitchChoice>
            <SwitchChoice.Choice text="Bilhetes" isFirst active />
            <SwitchChoice.Choice text="Passes" isLast />
          </SwitchChoice>

          <Ticket type="Título Ocasional Z3" quantity={3} id="abc" />
          <Ticket type="Título Ocasional Z4" quantity={2} id="def" />
          <Passe type="Passe Normal" expireDate="Expira em 4 dias" usePass={usePass} managePass={managePass} />
          <Passe type="Passe Estudante" usePass={usePass} managePass={managePass} />
          <Passe type="Passe Senior" usePass={usePass} managePass={managePass} />
          <Ticket type="Título Ocasional Z3" quantity={3} id="abc" />
          <Ticket type="Título Ocasional Z4" quantity={2} id="def" />
        </View>
      </ScrollView>

      {/* Plus icon for creating a new ticket */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'white',
          width: 70,
          height: 70,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'blue',
        }}
        onPress={() => router.push({ pathname: "/tickets/create-pass" })}
      >
        <Feather name="plus" size={30} color="blue" />
      </TouchableOpacity>
    </View>
  )
}
