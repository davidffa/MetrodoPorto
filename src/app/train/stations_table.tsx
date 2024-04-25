import { View } from "react-native";
import { Line, LineName } from "../components/linename";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SwitchChoice } from "../components/switchchoice_lines";
import { StationLines } from "../components/stations-lines";

export default function StationTrain() {
  const params = useLocalSearchParams();
  const router = useRouter();

  function goNext() {

    router.push({ pathname: '/train/time_table', params: { line: params.line } })
  }

  function goBack() {

    router.push('/train/')
  }

  return (
    <View className="items-center p-8 flex-1">
      <View className="flex-row justify-center gap-8">
        {
          <LineName orientation="left" key={params.line as Line} line={params.line as Line} onPress={() => goBack()} />
        }
      </View>
      <View className="mt-6 mb-12">
        <SwitchChoice>
          <SwitchChoice.Choice line={params.line as Line} text="Estações" isFirst active />
          <SwitchChoice.Choice line={params.line as Line} text="Horários" isLast onPress={() => goNext()} />
        </SwitchChoice>
      </View>

      <StationLines line={params.line as Line}></StationLines>
    </View>
  )
}
