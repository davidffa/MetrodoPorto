import { View, Text } from 'react-native'
import { clsx } from 'clsx'

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export type Line = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

type Props = {
  line: Line;
  headerright: String;
  headerleft: String;
  hours: string[];
  frequency: string[];
}

export function TableTimer({
  line,
  headerright,
  headerleft,
  hours,
  frequency
}: Props) {
  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <View className={clsx("justify-cente flex-row border w-full bg-white", {
      "border-blue-400": line === 'A',
      "border-red-400": line === 'B',
      "border-green-600": line === 'C',
      "border-yellow-400": line === 'D',
      "border-purple-400": line === 'E',
      "border-orange-400": line === 'F'
    })}>
      <View className={clsx(" flex-grow items-center border w-1/2 ", {
        "border-blue-400": line === 'A',
        "border-red-400": line === 'B',
        "border-green-600": line === 'C',
        "border-yellow-400": line === 'D',
        "border-purple-400": line === 'E',
        "border-orange-400": line === 'F'
      })} >
        <View className={clsx("w-full items-center", {
          "bg-blue-100": line === 'A',
          "bg-red-100": line === 'B',
          "bg-green-200": line === 'C',
          "bg-yellow-100": line === 'D',
          "bg-purple-100": line === 'E',
          "bg-orange-100": line === 'F'
        })} >
          <Text>{headerleft}</Text>
        </View>

        <View>
          {
            hours.map((hour, i) => (
              <View key={i} className="flex-row items-center gap-4">
                <Text className="text-slate-800 font-medium font-regular">{hour}</Text>
              </View>
            ))
          }
        </View>
      </View>
      <View className={clsx(" flex-grow items-center border w-1/2 ", {
        "border-blue-400": line === 'A',
        "border-red-400": line === 'B',
        "border-green-600": line === 'C',
        "border-yellow-400": line === 'D',
        "border-purple-400": line === 'E',
        "border-orange-400": line === 'F'
      })} >
        <View className={clsx("w-full items-center", {
          "bg-blue-100": line === 'A',
          "bg-red-100": line === 'B',
          "bg-green-200": line === 'C',
          "bg-yellow-100": line === 'D',
          "bg-purple-100": line === 'E',
          "bg-orange-100": line === 'F'
        })} >
          <Text>{headerright}</Text>
        </View>

        {
          frequency.map((freq, idx) => (
            <View key={idx} className="flex-row items-center gap-4">
              <Text className="text-slate-800 font-medium font-regular">{freq}</Text>
            </View>
          ))
        }
      </View>
    </View>

  );
}
