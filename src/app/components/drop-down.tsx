import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { clsx } from "clsx";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

type Props = {
  title: string;
  content: string;
};

export function Dropdown({ title, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const {theme, setTheme} = useContext(DarkModeContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="flex-col items-center justify-center">
      <TouchableOpacity
        className={clsx("w-full flex-row items-center justify-center p-6 border border-gray-400", {
          "rounded-t-lg": isOpen,
          "rounded-lg": !isOpen
        })} 
        style={{backgroundColor: theme === 'dark' ? '#1e2e5b' : 'white'}}
        activeOpacity={0.7}
        onPress={toggleDropdown}
      >
        <Text className="text-2xl font-bold" style={{color: theme === 'dark' ? 'white' : 'black'}}>{title}</Text>
        <Ionicons className="ml-auto"
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={24}
          color={theme === 'dark' ? 'white' : 'black'}
        />
      </TouchableOpacity>
      {
        isOpen && (
          <View className="w-full flex-row p-6 border border-gray-400 rounded-b-lg" style={{backgroundColor: theme === 'dark' ? '#1e2e5b' : 'white'}}>
            <Text className="font-regular" style={{color: theme === 'dark' ? 'white' : 'black'}}>{content}</Text>
          </View>
        )
      }
    </View >
  );
};
