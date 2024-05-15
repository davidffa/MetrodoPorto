import React, { useState } from 'react';

import { Text, View, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useContext } from 'react';
import { useEffect } from 'react';
import { DarkModeContext } from '../contexts/theme';

import { useRouter } from 'expo-router';

export default function DarkMode() {
const router = useRouter();

const {theme, setTheme} = useContext(DarkModeContext);

const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    };

useEffect(() => {
    console.log('Theme:', theme);
    }, [theme]);

   
    return (
        // change background color based on theme
        <View style={{backgroundColor: theme === 'dark' ? 'gray' : 'white', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: theme === 'dark' ? 'white' : 'black'}}>{theme} Mode</Text>
            <Switch
            
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={theme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={handleThemeChange}
                value={theme === 'dark'}
            />
        </View>
    );
}