import { View, Text } from "react-native";
import { clsx } from "clsx";
import { stations } from "@/utils/stations";

export type Line = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

function StationLines({ line }: { line: Line }) {
    return (
        <View className="flew-row">
            <View className={clsx("w-[1px]", {
                "bg-blue-500": line === 'A',
                "bg-red-500": line === 'B',
                "bg-green-600": line === 'C',
                "bg-yellow-500": line === 'D',
                "bg-purple-500": line === 'E',
                "bg-orange-500": line === 'F'
            })}>
            </View>
            <View className="items-start gap-1">
                {
                    stations[line].map(name => <><View className={clsx("w-5 rounded-full", {
                        "bg-blue-500": line === 'A',
                        "bg-red-500": line === 'B',
                        "bg-green-600": line === 'C',
                        "bg-yellow-500": line === 'D',
                        "bg-purple-500": line === 'E',
                        "bg-orange-500": line === 'F'
                    })}></View><Text className="text-slate-600">{name}</Text></>)
                }
            </View>

        </View>
    );
}


export { StationLines };



