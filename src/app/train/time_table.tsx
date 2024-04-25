import { View } from "react-native";
import { LineName, Line } from "../components/linename";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SwitchChoice } from "../components/switchchoice_lines";

export default function TableTrain() {
  const params = useLocalSearchParams();
  const router = useRouter();

  function goNext() {
    router.replace({ pathname: '/train/stations_table', params: { line: params.line } })
  }

  function goBack() {
    while (router.canGoBack()) {
      router.back();
    }

    router.replace('/train/')
  }

  return (
    <View className="items-center p-8 flex-1">
      <View className="flex-row justify-center gap-8">
        {
          <LineName orientation="left" key={params.line as Line} line={params.line as Line} onPress={() => goBack()} />
        }
      </View>
      <View className="p-8">
        <SwitchChoice>
          <SwitchChoice.Choice line={params.line as Line} text="Estações" isFirst onPress={() => goNext()} />
          <SwitchChoice.Choice line={params.line as Line} text="Horários" isLast active />
        </SwitchChoice>
      </View>
    </View>
  )
}
