import React from 'react';
import { Text, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native";



function Page1() {
    // stay selected

}

export function Switchchoice() {
    return (
        <View>
            <TouchableOpacity onPress={Page1}>
                <Text className="text-slate-600 font-bold text-lg">Bilhetes</Text>
            </TouchableOpacity>
        </View>

    )
}