import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { Ticket } from "../components/ticket";
import { Passe } from "../components/passe";
import { SwitchChoice } from "../components/switchchoice";

export default function Tickets() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'pass' | 'tickets'>("tickets");

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
            <SwitchChoice.Choice text="Bilhetes" isFirst active={activeTab === 'tickets'} onPress={() => setActiveTab("tickets")} />
            <SwitchChoice.Choice text="Passes" isLast active={activeTab === "pass"} onPress={() => setActiveTab("pass")} />
          </SwitchChoice>

          {
            activeTab === "tickets" ?
              (
                <>

                  <Ticket type="Título Ocasional Z3" quantity={3} id="abc" />
                  <Ticket type="Título Ocasional Z4" quantity={2} id="def" />
                  <Ticket type="Título Ocasional Z3" quantity={3} id="abc" />
                  <Ticket type="Título Ocasional Z4" quantity={2} id="def" />
                </>
              ) :
              (
                <>
                  <Passe type="Passe Normal" expireDate="Expira em 4 dias" usePass={usePass} managePass={managePass} />
                  <Passe type="Passe Estudante" usePass={usePass} managePass={managePass} />
                  <Passe type="Passe Senior" usePass={usePass} managePass={managePass} />
                </>
              )
          }

        </View>
      </ScrollView>

      {
        activeTab === "pass" && (
          <TouchableOpacity
            className="absolute bottom-10 right-10 bg-white rounded-full p-5 border border-blue-800"
            onPress={() => router.push({ pathname: "/tickets/create-pass" })}
          >
            <Feather name="plus" size={30} color="blue" />
          </TouchableOpacity>
        )
      }
    </View>
  )
}
