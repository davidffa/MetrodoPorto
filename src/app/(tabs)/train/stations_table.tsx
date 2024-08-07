import { View } from "react-native";
import { Line, LineName } from "@/app/components/linename";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SwitchChoice } from "@/app/components/switchchoice_lines";
import { StationLines } from "@/app/components/stations-lines";

export default function StationTrain() {
  const params = useLocalSearchParams();
  const router = useRouter();

  function goNext() {

    router.replace({ pathname: '/train/time_table', params: { line: params.line } })
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
        <LineName orientation="left" line={params.line as Line} onPress={() => goBack()} />
      </View>
      <View className="mt-6 mb-12">
        <SwitchChoice>
          <SwitchChoice.Choice line={params.line as Line} text="Estações" isFirst active />
          <SwitchChoice.Choice line={params.line as Line} text="Horários" isLast onPress={() => goNext()} />
        </SwitchChoice>
      </View>

      <StationLines line={params.line as Line} />
    </View>
  )
}
