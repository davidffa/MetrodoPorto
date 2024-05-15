import { Feather } from "@expo/vector-icons";
import { clsx } from "clsx";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';


export type Line = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
export type Orientation = 'right' | 'left';
type Props = {
    line: Line;
    orientation: Orientation;
} & TouchableOpacityProps;

export function LineName({ line, orientation, ...rest }: Props) {
    const { theme, setTheme } = useContext(DarkModeContext);
    if (orientation === 'right') {
        return (

            <TouchableOpacity
                className={clsx("bg-white w-full border items-center justify-between rounded-lg flex-row", {
                    "border-blue-500": line === 'A',
                    "border-red-500": line === 'B',
                    "border-green-600": line === 'C',
                    "border-yellow-500": line === 'D',
                    "border-purple-500": line === 'E',
                    "border-orange-500": line === 'F'
                })}
                activeOpacity={0.7}
                {...rest}
            >

                <Text className="text-slate-600 font-semibold text-3xl ml-8">Linha {line}</Text>
                <View className={clsx("rounded-r-md", {
                    "bg-blue-500": line === 'A' && theme === 'light',
                    "bg-blue-900": line === 'A' && theme === 'dark',
                    "bg-red-500": line === 'B' && theme === 'light',
                    "bg-red-900": line === 'B' && theme === 'dark',
                    "bg-green-600": line === 'C' && theme === 'light',
                    "bg-green-900": line === 'C' && theme === 'dark',
                    "bg-yellow-500": line === 'D' && theme === 'light',
                    "bg-yellow-900": line === 'D' && theme === 'dark',
                    "bg-purple-500": line === 'E' && theme === 'light',
                    "bg-purple-900": line === 'E' && theme === 'dark',
                    "bg-orange-500": line === 'F' && theme === 'light',
                    "bg-orange-900": line === 'F' && theme === 'dark',
                })}>
                    <Feather name="chevron-right" size={52} color="white" />
                </View>

            </TouchableOpacity>
        );
    }
    return (

        <TouchableOpacity
            className={clsx("bg-white w-full border items-center rounded-lg flex-row", {
                "border-blue-500": line === 'A',
                "border-red-500": line === 'B',
                "border-green-600": line === 'C',
                "border-yellow-500": line === 'D',
                "border-purple-500": line === 'E',
                "border-orange-500": line === 'F'
            })}
            activeOpacity={0.7}
            {...rest}
        >
            <View className={clsx("rounded-l-md", {
                "bg-blue-500": line === 'A' && theme === 'light',
                "bg-blue-900": line === 'A' && theme === 'dark',
                "bg-red-500": line === 'B' && theme === 'light',
                "bg-red-900": line === 'B' && theme === 'dark',
                "bg-green-600": line === 'C' && theme === 'light',
                "bg-green-900": line === 'C' && theme === 'dark',
                "bg-yellow-500": line === 'D' && theme === 'light',
                "bg-yellow-900": line === 'D' && theme === 'dark',
                "bg-purple-500": line === 'E' && theme === 'light',
                "bg-purple-900": line === 'E' && theme === 'dark',
                "bg-orange-500": line === 'F' && theme === 'light',
                "bg-orange-900": line === 'F' && theme === 'dark',
            })}>
                <Feather name="chevron-left" size={52} color="white" />

            </View>
            <Text className="text-slate-600 font-semibold text-3xl ml-8">Linha {line}</Text>


        </TouchableOpacity>
    );
}
