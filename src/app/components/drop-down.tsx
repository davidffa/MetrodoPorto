import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        
            <View className="flex-col items-center justify-center mt-8 mx-6">

            <TouchableOpacity className="w-full flex-row items-center justify-center bg-white p-6 rounded-lg border border-gray-400" onPress={toggleDropdown}>
                <Text className="text-lg font-blond">{title}</Text>
                <Ionicons className="ml-auto"
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="black"
        />
            </TouchableOpacity>
            {isOpen && <View className="w-full flex-row bg-white p-6 border border-gray-400 rouded-lg">{content}</View>}
        </View>
        
    );
};
