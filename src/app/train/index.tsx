import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { LineName, Line } from "../components/linename";

const lines: Line[] = ['A', 'B', 'C', 'D', 'E', 'F']

export default function Train() {
  function goNext() {

  }

  return (
    <View className="items-center p-8 flex-1">
      <View className="flex-row justify-between w-full mt-8">
        <Text className="font-bold text-4xl text-slate-600">Escolha uma linha</Text>
      </View>
      <View className="w-full h-[1px] bg-blue-100 mt-2" />

      <View className="flex-1 justify-center gap-8">
        {
          lines.map(name => <LineName key={name} line={name} />)
        }
      </View>

    </View>
  )
}
