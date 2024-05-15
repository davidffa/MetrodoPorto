import { ReactNode } from "react";
import { View } from "react-native";


import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';
function Steps({ children }: { children: ReactNode }) {
  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <View className="flex-row justify-around items-center gap-1">
      {children}
    </View>
  );
}

function Empty() {
  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <View className="w-3 h-3 rounded-xl border" style={{borderColor: theme === 'dark' ? 'white' : '#60a5fa'}}  />
  )
}

function Full() {
  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <View className="w-3 h-3 rounded-xl" style={{backgroundColor: theme === 'dark' ? 'white' : '#1e40af'}} />
  )
}

Steps.Empty = Empty;
Steps.Full = Full;

export { Steps };
