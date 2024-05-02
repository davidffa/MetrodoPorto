import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from '../components/drop-down';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

export default function Informacoes() {
    const router = useRouter();
    return (
        <ScrollView>
            <View className="flex-1 justify-center ">

                <Dropdown
                    title="Perdidos e Achados"
                    content={<Text>Os objetos encontrados nos metros e estações devem ser entregues a um segurança da estação ou num dos Gabinetes de Apoio ao Cliente.

                        Se perdeu algum objeto nas nossas instalações, deve dirigir-se a um Gabinete de Apoio ao Cliente, a um segurança, ou contactar telefonicamente a Linha de Apoio ao Cliente, para obter informação relativa ao eventual local onde se encontra o objeto perdido.</Text>}
                />
                <Dropdown
                    title="Horários"
                    content={<Text>Horários de funcionamento</Text>}
                />
                <Dropdown
                    title="Perdidos e Achados"
                    content={<Text>Foste rickrolled</Text>}
                />
                <Dropdown
                    title="Horários"
                    content={<Text>Horários de funcionamento</Text>}
                />
                <Dropdown
                    title="Perdidos e Achados"
                    content={<Text>Foste rickrolled</Text>}
                />
                <Dropdown
                    title="Horários"
                    content={<Text>Horários de funcionamento</Text>}
                />
                <Dropdown
                    title="Perdidos e Achados"
                    content={<Text>Foste rickrolled</Text>}
                />
                <Dropdown
                    title="Horários"
                    content={<Text>Horários de funcionamento</Text>}
                />
            </View>
        </ScrollView>
    );
};


