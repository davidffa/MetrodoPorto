import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export function NextButton({ ...rest }: TouchableOpacityProps) {
  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <TouchableOpacity
      className="w-full py-3 items-center justify-center rounded-md"
      style = {{backgroundColor: theme === 'dark' ? '#123071' : '#2563eb'}}
      activeOpacity={0.7}
      {...rest}
    >
      <Text className="text-white font-semibold text-xl">Próximo</Text>
    </TouchableOpacity>
  );
}
