import { Text, TouchableOpacity, View } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

type Props = {
  id: string;
  type: string;
  usedDate: Date;
  station: string;
  buyAgain: (id: string) => void;
};

function formatDate(date: Date) {
  return `${date.getDate().toString().padStart(2, '0')}/${date.getMonth().toString().padStart(2, '0')}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
}

export function UsedTicket({
  id,
  type,
  usedDate,
  station,
  buyAgain
}: Props) {

  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <View className="w-full p-6 gap-4 rounded-md border border-blue-800">
      <View className="flex-row items-center gap-2">
        <Text className="font-semibold text-lg">ID:</Text>
        <Text className="font-regular text-lg">{id}</Text>
      </View>
      <Text className="font-semibold text-lg">{type}</Text>
      <View className="flex-row items-center gap-2">
        <Text className="font-semibold text-lg">Data de uso:</Text>
        <Text className="font-regular text-lg">{formatDate(usedDate)}</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <Text className="font-semibold text-lg">Estação de validação:</Text>
        <Text className="font-regular text-lg">{station}</Text>
      </View>

      <TouchableOpacity
        className="rounded-md items-center justify-center py-3 px-5 bg-blue-800"
        onPress={() => buyAgain(id)}
      >
        <Text className="font-bold text-2xl text-white">Comprar novamente</Text>
      </TouchableOpacity>
    </View>
  );
}
