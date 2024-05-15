import "@/styles/global.css";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from "@expo-google-fonts/inter";
import { StatusBar } from "expo-status-bar";
import { Tabs } from "expo-router";
import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { Header } from "./components/header";
import { ThemeProvider } from "./contexts/theme";

import { useContext } from 'react';
import { DarkModeContext } from './contexts/theme';

export default function Layout() {

  const { theme, setTheme } = useContext(DarkModeContext);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });

  if (!fontsLoaded) return;

  // , tabBarBackground() {return theme === 'dark' ? '#1e1e1e' : '#ffffff';},

  return (
    <ThemeProvider>
      <>
        <StatusBar style='light' />

        <Tabs screenOptions={{ tabBarActiveTintColor: theme == 'dark' ? '#4748b' : '#2465c7',
          tabBarStyle: { backgroundColor: theme === 'dark' ? '#1e1e1e' : '#ffffff' },
        }} sceneContainerStyle={{ backgroundColor: "#ffffff" }}
            
            
        >
          <Tabs.Screen
            name="index"
            redirect
          />
          <Tabs.Screen
            name="buy-ticket"
            options={{
              tabBarIcon: ({ color }) => <Feather name="map" size={28} color={color} />,
              header: () => <Header />,
              tabBarLabel: () => null

            }}
          />
          <Tabs.Screen
            name="tickets"
            options={{
              tabBarIcon: ({ color }) => <Ionicons name="ticket-outline" size={28} color={color} />,
              header: () => <Header />,
              tabBarLabel: () => null
            }}
          />
          <Tabs.Screen
            name="train"
            options={{
              tabBarIcon: ({ color }) => <Fontisto name="train" size={28} color={color} />,
              header: () => <Header />,
              tabBarLabel: () => null
            }}
          />
          <Tabs.Screen
            name="more"
            options={{
              tabBarIcon: ({ color }) => <Feather name="menu" size={28} color={color} />,
              header: () => <Header />,
              tabBarLabel: () => null
            }}
          />
        </Tabs>
      </>
    </ThemeProvider>
  );
}
