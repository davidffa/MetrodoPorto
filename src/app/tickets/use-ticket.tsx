import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import QRCode from 'react-native-qrcode-svg';



export default function UseTicket() {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    return (


        <View className="bg-white flex-1 flex-row w-full">
            <Feather name="arrow-left" size={24} onPress={() => router.back()} />
            <View className="bg-blue-600 flex-1 items-center justify-center">



                <View className="p-2 rounded-md items-center justify-center bg-white">
                    <QRCode
                        logoBorderRadius={10} size={210} logoSize={20}
                        logoMargin={20} logoBackgroundColor="transparent" logo={require("@/assets/logo.png")}
                        color="black" value="http://awesome.link.qr"
                    />
                </View>
                <Text className="text-white font-bold text-2xl mt-6">{id}</Text>
            </View>
        </View>
    )
}