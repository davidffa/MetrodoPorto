import { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { Ticket } from "../components/ticket";
import { Passe } from "../components/passe";
import { SwitchChoice } from "../components/switchchoice";
import { passes } from "@/utils/passes";

export default function Tickets() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'pass' | 'tickets'>("tickets");

  function useTicket(id: string) {
    router.push({ pathname: "/tickets/use-ticket", params: { id } });
  }

  function managePass(id: string) {
    router.push({ pathname: "/tickets/manage-pass", params: { id } });
  }

  return (
    <View className="flex-1">
      <View className="items-center justify-center mt-4 p-8">
        <View className="flex-row justify-between w-full">
          <Text className="font-bold text-3xl text-slate-600">Bilhetes e Passes</Text>
        </View>

        <View className="w-full h-[1px] bg-blue-100 mt-2 mb-4" />

        <SwitchChoice>
          <SwitchChoice.Choice text="Bilhetes" isFirst active={activeTab === 'tickets'} onPress={() => setActiveTab("tickets")} />
          <SwitchChoice.Choice text="Passes" isLast active={activeTab === "pass"} onPress={() => setActiveTab("pass")} />
        </SwitchChoice>

        <ScrollView className="mt-4" showsVerticalScrollIndicator={false}>
          {
            activeTab === "tickets" ?
              (
                <>
                  <Ticket type="Título Ocasional Z2" quantity={3} id="XYZ123456789" useTicket={useTicket} />
                  <Ticket type="Título Ocasional Z3" quantity={2} id="ABC123456789" useTicket={useTicket} />
                  <Ticket type="Título Ocasional Z4" quantity={3} id="QWE123456789" useTicket={useTicket} />
                  <Ticket type="Título Ocasional Z5" quantity={2} id="ASD123456789" useTicket={useTicket} />
                </>
              ) :
              (
                <>
                  <Text
                    className="py-2 active:color-slate-300 text-center justify-items-center items-center text-blue-400 underline" onPress={() => router.push({ pathname: "/tickets/recuperar" })}>
                    Recuperar passes
                  </Text>
                  {

                    passes.length > 0
                      ?
                      passes.map(pass => <Passe key={pass.id} id={pass.id} expireDate={pass.expireDate} type={pass.name} usePass={useTicket} managePass={managePass} />)
                      :
                      (
                        <View className="items-center justify-center mt-6">
                          <Text className="text-xl">Ainda não tem passes!{'\n'}Comece por recuperar ou criar novos passes</Text>
                        </View>
                      )
                  }
                </>
              )
          }
        </ScrollView>
      </View>

      {
        activeTab === "tickets" ?
          (

            <TouchableOpacity
              className="absolute bottom-10 right-10 bg-white rounded-full p-4 border border-blue-800"
              onPress={() => router.push({ pathname: "/tickets/ticket-history" })}
            >

              <MaterialCommunityIcons name="history" size={34} color="blue" />
            </TouchableOpacity>
          ) :

          (
            <TouchableOpacity
              className="absolute bottom-10 right-10 bg-blue-800 rounded-full p-5 border border-white"
              onPress={() => router.push({ pathname: "/tickets/create-pass" })}
            >

              <Feather name="plus" size={30} color="white" />
            </TouchableOpacity>
          )
      }
    </View>
  )
}
