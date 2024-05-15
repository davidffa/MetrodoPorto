import { Stack } from "expo-router";
import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export default function BuyTicketLayout() {
    const { theme } = useContext(DarkModeContext);
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: theme === 'dark' ? '#414956' : '#f1f5f9' 
                }

            }}
        />
    )
}
