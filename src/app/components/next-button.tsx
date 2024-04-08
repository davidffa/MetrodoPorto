import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export function NextButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className="w-full bg-blue-600 py-3 items-center justify-center rounded-md"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="text-white font-semibold text-xl">Próximo</Text>
    </TouchableOpacity>
  );
}
