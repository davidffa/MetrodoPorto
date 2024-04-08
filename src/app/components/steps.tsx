import { ReactNode } from "react";
import { View } from "react-native";

function Steps({ children }: { children: ReactNode }) {
  return (
    <View className="flex-row justify-around items-center gap-1">
      {children}
    </View>
  );
}

function Empty() {
  return (
    <View className="w-3 h-3 rounded-xl border border-blue-400" />
  )
}

function Full() {
  return (
    <View className="w-3 h-3 rounded-xl bg-blue-800" />
  )
}

Steps.Empty = Empty;
Steps.Full = Full;

export { Steps };
