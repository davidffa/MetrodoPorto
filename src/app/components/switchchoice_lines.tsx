import clsx from "clsx";
import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

function SwitchChoice({ children }: { children: ReactNode }) {
  return (
    <View className="w-full flex-row">
      {children}
    </View>
  )
}
export type Line = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
type ChoiceProps = {
  line: Line;
  text: string;
  active?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
} & TouchableOpacityProps;

function Choice({ line, text, active = false, isFirst = false, isLast = false, ...rest }: ChoiceProps) {
  return (
    <TouchableOpacity
      className={clsx("flex-grow items-center border  py-1", {
        "border-blue-500": line === 'A',
        "border-red-500": line === 'B',
        "border-green-600": line === 'C',
        "border-yellow-500": line === 'D',
        "border-purple-500": line === 'E',
        "border-orange-500": line === 'F',
        "bg-white": !active,
        "bg-blue-100": active && line === 'A',
        "bg-red-100": active && line === 'B',
        "bg-green-100": active && line === 'C',
        "bg-yellow-100": active && line === 'D',
        "bg-purple-100": active && line === 'E',
        "bg-orange-100": active && line === 'F',
        "rounded-l-md": isFirst,
        "rounded-r-md": isLast
      })}
      {...rest}
    >
      <Text className="text-xl font-semibold">{text}</Text>
    </TouchableOpacity>
  );
}

SwitchChoice.Choice = Choice;

export { SwitchChoice };

