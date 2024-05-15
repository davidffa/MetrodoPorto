import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export function PayButton({ ...rest }: TouchableOpacityProps) {

  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <TouchableOpacity
      className="w-full py-3 items-center justify-center rounded-md" style = {{backgroundColor: theme === 'dark' ? '#0c4b21' : '#16a34a'}}
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="text-white font-semibold text-xl">Pagar</Text>
    </TouchableOpacity>
  );
}
