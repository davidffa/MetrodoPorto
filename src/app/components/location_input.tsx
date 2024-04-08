import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export function LocationInput({ ...rest }: TextInputProps) {
  return (
    <View className="flex-row items-center w-full p-1 px-4 bg-white rounded-sm border border-zinc-300">
      <Feather name="map-pin" color="#525251" size={28} />
      <TextInput
        className="p-1 px-4 text-xl flex-1"
        {...rest}
      />
    </View>
  )
}
