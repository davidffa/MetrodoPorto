import { Text, ViewBase, View, TouchableOpacity } from "react-native";

type TicketProps = {
    type: string;
    quantity: number;
    id: string;
}


export function Ticket({ type, quantity }: TicketProps) {
    function useTicket() {
        console.log("Ticket used")
    }
    return (
        <View className="p-7 border border-blue-800 rounded-md bg-white w-full mt-4 flex-row justify-between items-center" >
            <View className="gap-4">
                <Text className="font-semibold text-l text-slate-800">
                    {type}
                </Text>
                <Text className="font-semibold text-l text-slate-800">
                    Quantidade: {quantity}
                </Text>
            </View>

            <TouchableOpacity className="bg-blue-800 items-center justify-center px-5 py-2 rounded-md" onPress={useTicket}>

                <Text className="font-bold text-white text-xl">
                    Usar
                </Text>
            </TouchableOpacity>
        </View>
    )
}