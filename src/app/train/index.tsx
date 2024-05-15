import { Text, View } from "react-native";
import { LineName, Line } from "../components/linename";
import { useRouter } from "expo-router";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

const lines: Line[] = ['A', 'B', 'C', 'D', 'E', 'F']

export default function Train() {
  const {theme, setTheme} = useContext(DarkModeContext);
  const router = useRouter();

  function goNext(name: Line) {
    router.push({ pathname: '/train/stations_table', params: { line: name } })
  }

  return (
    <View className="items-center p-8 flex-1">
      <View className="flex-row justify-between w-full mt-8">
        <Text className="font-bold text-4xl" style={{color: theme === 'dark' ? 'white' : '#475569'}}>Escolha uma linha</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2" />

      <View className="flex-1 justify-center gap-8">
        {
          lines.map(name => <LineName orientation="right" key={name} line={name} onPress={() => goNext(name)} />)
        }
      </View>
    </View>
  )
}
