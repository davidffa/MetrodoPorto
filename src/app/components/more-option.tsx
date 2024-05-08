import { Feather } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type Props = {
  name: string;
  icon: ReactNode;
} & TouchableOpacityProps;

export function MoreOption({ name, icon, ...rest }: Props) {
  return (
    <TouchableOpacity className="flex-row justify-between items-center border border-blue-100 bg-white rounded-lg ps-2 py-2" {...rest}>
      <View className="flex-row gap-4 items-center justify-center">
        {icon}
        <Text className="font-medium text-xl">{name}</Text>
      </View>
      <Feather name="chevron-right" size={32} color="gray" />
    </TouchableOpacity>
  )
}
