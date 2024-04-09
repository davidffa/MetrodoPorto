import { Tabs } from 'expo-router';
import { Header } from '../components/header';
import { Feather, Fontisto, Ionicons } from '@expo/vector-icons';
import { Menu } from '../components/menu';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#1E40AF' }}>
      <Tabs.Screen
        name="index"
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
        name="settings"
        // component={Menu}
        options={{
          tabBarIcon: ({ color }) => <Feather name="menu" size={28} color={color} />,
          header: () => <Header />,
          tabBarLabel: () => null
        }}
      />
    </Tabs>
  );
}
