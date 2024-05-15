import { Feather } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

type Props = {
  name: string;
  icon: ReactNode;
} & TouchableOpacityProps;

export function MoreOption({ name, icon, ...rest }: Props) {

  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <TouchableOpacity className="flex-row justify-between items-center border border-blue-100 rounded-lg ps-2 py-2" style={{backgroundColor: theme === 'dark' ? '#475569' : 'white'}} {...rest}>
      <View className="flex-row gap-4 items-center justify-center">
        {icon}
        <Text className="font-medium text-xl" style={{color: theme === 'dark' ? 'white' : 'black'}}>{name}</Text>
      </View>
      <Feather name="chevron-right" size={32} style={{color: theme === 'dark' ? 'white' : 'grey'}} />
    </TouchableOpacity>
  )
}
