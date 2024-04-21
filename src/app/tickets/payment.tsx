import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type Props = {
  image: ImageProps;
  name: string;
  selected?: boolean;
} & TouchableOpacityProps;

export function Payment({ image, name, selected = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="w-full p-4 flex-row items-center justify-between rounded-md border border-blue-200 bg-white"
      activeOpacity={0.7}
      {...rest}
    >
      <Image source={image} />
      <Text className="font-medium text-xl">{name}</Text>
      <View className="border border-blue-400 rounded-full w-6 h-6 p-1">
        {
          selected && (
            <View className="rounded-full w-full h-full bg-blue-400" />
          )
        }
      </View>
    </TouchableOpacity>
  );
}
