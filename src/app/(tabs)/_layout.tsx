import { Tabs } from 'expo-router';
import { Header } from '../components/header';
import { Feather } from '@expo/vector-icons';

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
    </Tabs>
  );
}
