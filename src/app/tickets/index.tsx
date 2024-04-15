import { Text, View, ScrollView } from "react-native";
import { Ticket } from "../components/ticket";
import { Passe } from "../components/passe";
import { SwitchChoice } from "../components/switchchoice";
import { useRouter } from "expo-router";

export default function Tickets() {
  const router = useRouter();

  function usePass(id: string) {
    router.push({ pathname: "/tickets/use-ticket", params: { id } });
  }

  function managePass() {

  }

  return (

    <ScrollView className="flex-1">
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
  )
}
