import { Text, View, TouchableOpacity } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

type TicketProps = {
  type: string;
  quantity: number;
  id: string;
  useTicket: (id: string) => void;
}

export function Ticket({ id, type, quantity, useTicket }: TicketProps) {
  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <View className="p-7 border border-blue-800 rounded-md bg-white w-full mt-4 flex-row justify-between items-center" >
      <View className="gap-4">
        <Text className="font-semibold text-l text-slate-800">
          {type}
        </Text>
        <Text className="font-semibold text-l text-slate-800">
          Quantidade: {quantity}
        </Text>
      </View>

      <TouchableOpacity className="bg-blue-800 items-center justify-center px-5 py-2 rounded-md" onPress={() => useTicket(id)}>

        <Text className="font-bold text-white text-xl">
          Usar
        </Text>
      </TouchableOpacity>
    </View>
  )
}
