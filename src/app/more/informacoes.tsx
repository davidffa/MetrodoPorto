import React from "react";
import { Dropdown } from "../components/drop-down";
import { ScrollView } from "react-native";

// TODO: Move to utils
const info = [
  {
    title: "Perdidos e Achados",
    content: "Os objetos encontrados nos metros e estações devem ser entregues a um segurança da estação ou num dos Gabinetes de Apoio ao Cliente. Se perdeu algum objeto nas nossas instalações, deve dirigir- se a um Gabinete de Apoio ao Cliente, a um segurança, ou contactar telefonicamente a Linha de Apoio ao Cliente, para obter informação relativa ao eventual local onde se encontra o objeto perdido."
  },
  {
    title: "Horários",
    content: "Horários de funcionamento",
  },
  {
    title: "Perdidos e Achados",
    content: "Foste rickrolled"
  },
  {
    title: "Perdidos e Achados",
    content: "Foste rickrolled"
  },
  {
    title: "Perdidos e Achados",
    content: "Foste rickrolled"
  },
  {
    title: "Perdidos e Achados",
    content: "Foste rickrolled"
  },
  {
    title: "Perdidos e Achados",
    content: "Foste rickrolled"
  },
  {
    title: "Perdidos e Achados",
    content: "Foste rickrolled"
  },
]

export default function Informacoes() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24, gap: 28 }}>
      {
        info.map((item, idx) =>
          <Dropdown
            key={idx}
            title={item.title}
            content={item.content}
          />
        )
      }
    </ScrollView>
  );
};


