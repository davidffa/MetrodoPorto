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

type ChoiceProps = {
  text: string;
  active?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
} & TouchableOpacityProps;

function Choice({ text, active = false, isFirst = false, isLast = false, ...rest }: ChoiceProps) {
  return (
    <TouchableOpacity
      className={clsx("flex-grow items-center border border-blue-800 py-1", {
        "bg-white": !active,
        "bg-blue-100": active,
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
