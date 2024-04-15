import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

export function PayButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      className="w-full bg-green-600 py-3 items-center justify-center rounded-md"
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="text-white font-semibold text-xl">Pagar</Text>
    </TouchableOpacity>
  );
}
