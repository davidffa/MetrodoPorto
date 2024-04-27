import { View, Text, ScrollView } from "react-native";
import { clsx } from "clsx";
import { stations } from "@/utils/stations";

export type Line = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export function StationLines({ line }: { line: Line }) {
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
      <View className={clsx("absolute top-0 left-[6px] w-[2px] h-full", {
        "bg-blue-500": line === 'A',
        "bg-red-500": line === 'B',
        "bg-green-600": line === 'C',
        "bg-yellow-500": line === 'D',
        "bg-purple-500": line === 'E',
        "bg-orange-500": line === 'F'
      })}>
      </View>
      <View className="items-start justify-between gap-4">
        {
          stations[line].map(name => (
            <View key={name} className="flex-row items-center gap-4">
              <View className={clsx("w-4 h-4 rounded-full", {
                "bg-blue-500": line === 'A',
                "bg-red-500": line === 'B',
                "bg-green-600": line === 'C',
                "bg-yellow-500": line === 'D',
                "bg-purple-500": line === 'E',
                "bg-orange-500": line === 'F'
              })} />
              <Text className="text-slate-800 font-medium font-regular">{name}</Text>
            </View>
          ))
        }
      </View>
    </ScrollView >
  );
}

