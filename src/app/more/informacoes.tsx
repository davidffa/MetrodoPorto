import { Dropdown } from "../components/drop-down";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Feather } from "@expo/vector-icons";

// TODO: Move to utils
const info = [
  {
    title: "O que é preciso",
    content: "Para poder viajar na rede metropolitana, necessita de um cartão Andante carregado com títulos de transporte e de o validar antes de iniciar viagem. OU Pode também utilizar a aplicação no seu telemóvel. É igualmente obrigatória a validação antes de iniciar viagem."
  },
  {
    title: "1 bilhete = ? viagens",
    content: "Pode fazer o número de viagens que quiser respeitando os limites de zona e de tempo definidos. Exemplo: se comprar um Título de Viagem Z2, pode viajar durante uma hora, na zona em que começa a viagem (1ª validação) bem como em todas as outras que com ela fazem fronteira. Sempre que fizer uma validação dentro dessa mesma hora, não lhe é descontado outro título de viagem. Não está a gastar mais mas apenas a aproveitar o tempo de viagem que ainda lhe resta!"
  },
  {
    title: "Duração de um bilhete",
    content: "O que importa é a hora e a zona da 1ª validação. A partir daí tem um tempo máximo para validar o título pela última vez, sem que seja descontada outra viagem. Na realidade, a duração máxima da viagem é o tempo contado entre a 1ª e a última validação que fizer na sua viagem. Exemplo: se tiver um título de viagem Z2 (válido para uma hora), pode validar pela última vez aos 59 minutos e 59 segundos e prosseguir a viagem até ao seu destino. Neste caso, a última validação que fez, ainda está dentro do limite de uma hora que impõe o título de viagem Z2 pelo que não necessita de interromper a viagem.",
  },

  {
    title: "Quando devo validar",
    content: "SEMPRE! Ao iniciar uma viagem, quando muda de linha e qualquer que seja o seu bilhete e passe. Pode validar, no máximo, com 10 minutos de antecedência antes de iniciar a viagem."
  },
  {
    title: "Onde posso validar",
    content: "Use os validadores existentes nas estações. Em caso de avaria dos mesmos, por favor ligue para o número disponível no topo de cada validador, podendo circular dessa estação para a seguinte e validar na seguinte."
  },
  {
    title: "Crianças no Metro",
    content: "As crianças com idade inferior a 12 anos podem viajar sem título de transporte. Sendo obrigatória a presença de um adulto que a acompanhe."
  },
  {
    title: "Perdidos e Achados",
    content: "Os objetos encontrados nos metros e estações devem ser entregues a um segurança da estação ou num dos Gabinetes de Apoio ao Cliente. Se perdeu algum objeto nas nossas instalações, deve dirigir- se a um Gabinete de Apoio ao Cliente, a um segurança, ou contactar telefonicamente a Linha de Apoio ao Cliente, para obter informação relativa ao eventual local onde se encontra o objeto perdido."
  }
]

export default function Informacoes() {
  const router = useRouter();
  return (

    <>
      <View className="items-center mt-8 ml-8 mr-8">
        <View className="flex-row items-center gap-4 w-full">
          <Feather name="arrow-left" size={36} color="#475569" onPress={() => router.back()} />
          <Text className="font-bold text-4xl text-slate-600">Informações</Text>
        </View>
        <View className="w-full h-[1px] bg-blue-100 mt-2 " />
      </View>
      <ScrollView contentContainerStyle={{ padding: 24, gap: 28 }} className="w-full">
        {info.map((item, idx) => <Dropdown
          key={idx}
          title={item.title}
          content={item.content} />
        )}
      </ScrollView>
    </>

  );
};


