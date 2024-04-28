import { Text, TextInput, TextInputProps, View } from "react-native";

type Props = {
  name: string;
} & TextInputProps;

export function FormInput({ name, ...rest }: Props) {
  return (
    <View className="w-full gap-2">
      <Text className="font-regular text-lg">{name}</Text>

      <TextInput className="bg-white p-2 rounded-md border border-zinc-300" {...rest} />
    </View>
  );
}
