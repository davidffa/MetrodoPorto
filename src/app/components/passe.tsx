import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import dayjs from "dayjs";
import clsx from "clsx";

type PassProps = {
  id: string;
  type: string;
  expireDate?: string;
  usePass: (id: string) => void;
  managePass: (id: string) => void;
}

export function Passe({ id, type, expireDate, usePass, managePass }: PassProps) {
  const diff = dayjs(expireDate).diff(dayjs(), 'days');

  return (
    <View className="px-5 py-8 border border-blue-800 rounded-md bg-white w-full mt-4 flex-row justify-between items-center" >
      <View className="gap-3">
        <Text className="font-semibold text-l text-slate-800">
          {type}
        </Text>
        {
          diff < 0 ? (
            <View className="flex-row items-center gap-1">
              <Text className="font-bold text-sm text-red-600">
                Expirou!
              </Text>
            </View>
          )
            : diff < 10 && (
              <View className="flex-row items-center gap-1">
                <Ionicons name="warning-outline" size={20} color="orange" />

                <Text className="font-regular text-xs text-slate-800">
                  Expira em {diff} dias
                </Text>
              </View>
            )
        }
      </View>

      <View className="flex-row gap-1">
        <TouchableOpacity className="bg-green-800 items-center justify-center px-6 py-3 rounded-md" onPress={() => managePass(id)}>
          <Text className="font-bold text-white text-l">
            Gerir
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className={clsx("bg-blue-800 items-center justify-center px-6 py-3 rounded-md", {
          "opacity-50": diff < 0
        })} disabled={diff < 0} onPress={() => usePass(id)}>
          <Text className="font-bold text-white text-l">
            Usar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
