import { Text, TextInput, TextInputProps, View } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

type Props = {
  name: string;
} & TextInputProps;

export function FormInput({ name, ...rest }: Props) {

  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <View className="w-full gap-2">
      <Text className="font-regular text-lg" style={{color: theme === 'dark' ? 'white' : '#475569'}}>{name}</Text>

      <TextInput className="bg-white p-2 rounded-md border border-zinc-300" {...rest} />
    </View>
  );
}
