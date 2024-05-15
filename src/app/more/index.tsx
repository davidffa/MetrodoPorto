import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Linking } from "react-native";
import { MoreOption } from "../components/more-option";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';

export default function More() {
  const router = useRouter();
  const {theme, setTheme} = useContext(DarkModeContext);

  return (
    <View className="p-8 flex-1">
      <View className="w-full">
        <Text className="font-bold text-4xl" style={{color: theme === 'dark' ? 'white' : '#475569'}}>Mais</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-2" />

      <View className="flex-1 my-6 gap-4">
        <MoreOption
          name="Informações"
          icon={<Feather name="info" style={{color: theme === 'dark' ? 'white' : 'black'}} size={28} />}
          onPress={() => router.push("/more/informacoes")}
        />
        <MoreOption
          name="Website"
          icon={<Feather name="globe" style={{color: theme === 'dark' ? 'white' : 'black'}}size={28} />}
          onPress={() => Linking.openURL("https://www.metrodoporto.pt")}
        />
        <MoreOption
          name="Quiosques"
          icon={<Feather name="monitor" style={{color: theme === 'dark' ? 'white' : 'black'}} size={28} />}
          onPress={() => Linking.openURL("https://www.metrodoporto.pt/pages/761")}
        />
        <MoreOption
          name="Críticas/Sugestões"
          icon={<Feather name="message-circle" style={{color: theme === 'dark' ? 'white' : 'black'}} size={28} />}
          onPress={() => (router.push("/more/criticas"))}
        />
        <MoreOption
          name="Recuperar Passes"
          icon={<Feather name="archive" style={{color: theme === 'dark' ? 'white' : 'black'}} size={28} />}
          onPress={() => (router.push("/more/recuperar"))}
        />
        <MoreOption
          name="Política de Privacidade"
          icon={<Feather name="paperclip" style={{color: theme === 'dark' ? 'white' : 'black'}} size={28} />}
          onPress={() => (router.push("/more/privacidade"))}
        />
        <MoreOption
          name="Contactos"
          icon={<Feather name="phone" style={{color: theme === 'dark' ? 'white' : 'black'}} size={28} />}
          onPress={() => (router.push("/more/contactos"))}
        />
        <MoreOption
          name="Dark Mode"
          icon={<Feather name="moon" style={{color: theme === 'dark' ? 'white' : 'black'}} size={28} />}
          onPress={() => router.push("/more/darkmode")}
        />
      </View>
    </View>
  )
}
