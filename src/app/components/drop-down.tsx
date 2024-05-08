import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { clsx } from "clsx";

type Props = {
  title: string;
  content: string;
};

export function Dropdown({ title, content }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className="flex-col items-center justify-center">
      <TouchableOpacity
        className={clsx("w-full flex-row items-center justify-center bg-white p-6 border border-gray-400", {
          "rounded-t-lg": isOpen,
          "rounded-lg": !isOpen
        })}
        activeOpacity={0.7}
        onPress={toggleDropdown}
      >
        <Text className="text-2xl font-bold">{title}</Text>
        <Ionicons className="ml-auto"
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
      {
        isOpen && (
          <View className="w-full flex-row bg-white p-6 border border-gray-400 rounded-b-lg">
            <Text className="font-regular">{content}</Text>
          </View>
        )
      }
    </View >
  );
};
