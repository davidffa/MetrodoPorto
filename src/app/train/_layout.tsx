import { Stack } from "expo-router";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export default function TrainLayout() {
  const { theme } = useContext(DarkModeContext);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme === 'dark' ? '#484674' : '#f1f5f9' 
        }
    
      }}
    />
  )
}
