import { Platform, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { locations } from "@/utils/locations";
import { clsx } from "clsx";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

type Props = {
  placeholder: string;
  value: string;
  onValueChange(name: string): void;
}

export function LocationInput({ placeholder, value, onValueChange }: Props) {

  const {theme, setTheme} = useContext(DarkModeContext);
  return (
    <View className="flex-row items-center w-full ps-4 bg-white rounded-md border border-zinc-300">
      <Feather name="map-pin" color="#525251" size={28} />

      <View className={clsx("flex-1", {
        'p-4': Platform.OS === 'ios'
      })}>
        <RNPickerSelect
          placeholder={{ label: placeholder }}
          items={locations.map(name => ({ label: name, value: name }))}
          onValueChange={v => onValueChange(v)}
          value={value}
        />
      </View>
    </View >
  );
}
