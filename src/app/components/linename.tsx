import { Feather } from "@expo/vector-icons";
import clsx from "clsx";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

export type Line = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
type Props = {
    line: Line;
} & TouchableOpacityProps;

export function LineName({ line, ...rest }: Props) {
    return (
        <TouchableOpacity
            className={clsx("bg-white w-full border items-center justify-between rounded-md flex-row", {
                "border-blue-500": line === 'A',
                "border-red-500": line === 'B',
                "border-green-600": line === 'C',
                "border-yellow-500": line === 'D',
                "border-purple-500": line === 'E',
                "border-orange-500": line === 'F'
            })}
            activeOpacity={0.7}
        >

            <Text className="text-slate-600 font-semibold text-3xl ml-8">Linha {line}</Text>
            <View className={clsx("rounded-r-md", {
                "bg-blue-500": line === 'A',
                "bg-red-500": line === 'B',
                "bg-green-600": line === 'C',
                "bg-yellow-500": line === 'D',
                "bg-purple-500": line === 'E',
                "bg-orange-500": line === 'F'
            })}>
                <Feather name="chevron-right" size={52} color="white" />
            </View>

        </TouchableOpacity>
    );
}
