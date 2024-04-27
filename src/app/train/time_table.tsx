import { Text, View } from "react-native";
import { LineName, Line } from "../components/linename";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SwitchChoice } from "../components/switchchoice_lines";
import { TableTimer } from "../components/table_timer";
import { clsx } from "clsx";
import { dias_uteis_frequencia, dias_uteis_horas, feriados_frequencia, feriados_horas, partidas_primeira, partidas_ultima, partidas_stations } from "@/utils/tables";
import { ScrollView } from "react-native";

export default function TableTrain() {
    const params = useLocalSearchParams();
    const line = params.line as Line;
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
                    <LineName orientation="left" key={line} line={line} onPress={() => goBack()} />
                }
            </View>
            <View className="mt-6 mb-12">
                <SwitchChoice>
                    <SwitchChoice.Choice line={line} text="Estações" isFirst onPress={() => goNext()} />
                    <SwitchChoice.Choice line={line} text="Horários" isLast active />
                </SwitchChoice>
            </View>

            <ScrollView contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false}>
                <Text className="text-2xl font-semibold">Dias úteis:</Text>

                <View className="mt-6 mb-12">
                    <View className="w-full flex-row">
                        <TableTimer
                            line={line}
                            headerleft='Horas'
                            headerright='Frequência'
                            hours={dias_uteis_horas[line]}
                            frequency={dias_uteis_frequencia[line]}
                        />
                    </View>
                </View>

                <Text className="text-2xl font-semibold">Partidas:</Text>

                <View className="mt-6 mb-12">
                    <View className="w-full flex-row">
                        <View className={clsx("w-[50%] mt-[20px] items-center border ", {
                            "bg-blue-100": line === 'A',
                            "bg-red-100": line === 'B',
                            "bg-green-200": line === 'C',
                            "bg-yellow-100": line === 'D',
                            "bg-purple-100": line === 'E',
                            "bg-orange-100": line === 'F',
                            "border-blue-400": line === 'A',
                            "border-red-400": line === 'B',
                            "border-green-600": line === 'C',
                            "border-yellow-400": line === 'D',
                            "border-purple-400": line === 'E',
                            "border-orange-400": line === 'F'
                        })} >
                            {
                                partidas_stations[line].map(line => (
                                    <View key={line} className="flex-row items-center gap-4">
                                        <Text className="text-slate-800 font-medium font-regular">{line}</Text>
                                    </View>
                                ))
                            }
                        </View>
                        <View className="w-[50%]">
                            <TableTimer
                                line={line}
                                headerleft='Primeira'
                                headerright='Última'
                                hours={partidas_primeira[line]}
                                frequency={partidas_ultima[line]}
                            />
                        </View>
                    </View>
                </View>
                <View className="w-full items-center">
                    <Text className="text-2xl font-semibold">Sábados, Domingos e Feriados:</Text>
                </View>
                <View className="mt-6 mb-12">
                    <View className="w-full flex-row">
                        <TableTimer
                            line={line}
                            headerleft='Horas'
                            headerright='Frequência'
                            hours={feriados_horas[line]}
                            frequency={feriados_frequencia[line]}
                        />
                    </View>
                </View>
            </ScrollView >
        </View>

    )
}
