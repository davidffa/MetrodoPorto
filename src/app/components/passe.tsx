import { Text, ViewBase, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type TicketProps = {
    type: string;
    expireDate?: string;
}


export function Passe({ type, expireDate }: TicketProps) {
    function usePasse() {
        console.log("Passe usado")
    }
    function gerirPasse() {
        console.log("Gerir Passe")
    }
    return (
        <View className="px-5 py-8 border border-blue-800 rounded-md bg-white w-full mt-4 flex-row justify-between items-center" >
            <View className="gap-3">
                <Text className="font-semibold text-l text-slate-800">
                    {type}
                </Text>
                {

                    expireDate && (
                        <View className="flex-row items-center gap-1">
                            <Ionicons name="warning-outline" size={20} color="orange" />


                            <Text className="font-regular text-xs text-slate-800">



                                {expireDate}
                            </Text>

                        </View>
                    )
                }
            </View>

            <View className="flex-row px-40 gap-1 absolute">

                <TouchableOpacity className="bg-green-800 items-center justify-center px-6 py-3 rounded-md" onPress={gerirPasse}>

                    <Text className="font-bold text-white text-l">
                        Gerir
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-blue-800 items-center justify-center px-6 py-3 rounded-md" onPress={usePasse}>

                    <Text className="font-bold text-white text-l">
                        Usar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}