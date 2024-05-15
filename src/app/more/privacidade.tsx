import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";

import { useContext } from 'react';
import { DarkModeContext } from '../contexts/theme';


export default function Privacidade() {
  const router = useRouter();

  const { theme, setTheme } = useContext(DarkModeContext);

  return (
    <View className=" px-8 pt-8 flex-1">
      <View className="flex-row w-full gap-4 items-center">
        <Feather name="arrow-left" size={32} style={{color: theme === 'dark' ? 'white' : '#475569'}} onPress={() => router.back()} />
        <Text className="font-bold text-3xl " style={{color: theme === 'dark' ? 'white' : '#475569'}}>Política de Privacidade</Text>
      </View>

      <View className="w-full h-[1px] bg-blue-100 mt-2 mb-2" />

      <ScrollView className="mt-4">
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>1. PROTEÇÃO DE DADOS PESSOAIS</Text>

        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>A Metro do Porto, S.A. (“MdP”), com sede em Avenida Fernão Magalhães 1862, 7.º, 4350-158 Porto, com número único de pessoa coletiva e de matrícula 503278602, matriculada na Conservatória de Registo Comercial do Porto, com o capital social de 8 517 540 euros (oito milhões e quinhentos e dezassete mil quinhentos e quarenta euros), procede ao tratamento de dados pessoais no âmbito da sua atividade, como melhor se descreverá adiante, para que compreenda de que forma os seus dados pessoais são utilizados.

          A sua privacidade e a proteção dos seus dados pessoais são fundamentais para a MdP. Por esta razão – a par de cumprir com a legislação aplicável –, a MdP aconselha a leitura desta Política e de outros documentos que lhe possam ser transmitidos ou comunicados e que versem sobre a privacidade e a proteção dos seus dados pessoais.

          Quaisquer alterações a esta Política de Privacidade serão disponibilizadas em www.metrodoporto.pt ou através dos outros canais de comunicação normalmente utilizados.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>2. TRATAMENTO DE DADOS PESSOAIS</Text>

        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>  2.1. Condições de licitude</Text>

        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>Para proceder ao tratamento dos seus dados pessoais nos termos do Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho, de 27 de abril de 2016 relativo à proteção das pessoas singulares no que diz respeito ao tratamento de dados pessoais e à livre circulação desses dados e que revoga a Diretiva 95/46/CE (“RGPD”), a MdP deve atuar com base numa condição de licitude. Esta condição pode ser:

          (i) Consentimento: sempre que tenha previamente consentido no tratamento dos seus dados para uma determinada finalidade;
          (ii) Diligências pré-contratuais ou execução de contrato: sempre que o tratamento de dados seja necessário no âmbito de serviços solicitados;
          (iii) Cumprimento de uma obrigação legal: sempre que o tratamento de dados seja necessário para cumprir com obrigações legais a que a MdP esteja sujeita;
          (iv) Interesse legítimo: sempre que a MdP proceda ao tratamento de dados pessoais em virtude de um interesse considerado legítimo que seja prevalecente perante os seus direitos e interesses.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>  2.2. Finalidades</Text>

        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>A MdP procede ao tratamento dos seus dados pessoais (ou seja, à recolha, registo, organização, estruturação, conservação, consulta, utilização, divulgação por transmissão, difusão ou qualquer outra forma de disponibilização, entre outros) e é responsável por esse tratamento quando estejam em causa as finalidades descritas adiante e sempre que esteja reunida uma condição de licitude para esse tratamento.

          A MdP procede ao tratamento das seguintes categorias de dados pessoais:

          a) Dados pessoais básicos (nome, morada, naturalidade, nacionalidade, número do documento de identificação, sexo, data de nascimento, idade, número de contribuinte, estado civil, filiação);
          b) Dados de contacto (morada, contacto telefónico, endereço de correio eletrónico);
          c) Dados relativos a contraordenações (data, identificação do local onde ocorreu a infração – linha, zona andante, localidade, destino, veículo –, identificação da infração, dados sobre o arquivo do documento);
          d) Dados relativos a reclamações (motivos da reclamação);
          e) Dados relativos a atividade profissional (vencimentos, atividade profissional/profissão, educação, experiência profissional, filiações, notas da entrevista de emprego);
          f) Dados de faturação (número de conta, IBAN);
          g) Videovigilância (imagens captadas pelo sistema);
          h) Dados de Atendimento ao Público (número de telefone utilizado, duração da chamada, e-mail)

          Os tratamentos de dados pessoais levados a cabo pela MdP têm uma das seguintes finalidades:
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.2.1. Recrutamento</Text>

        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>A MdP procede ao tratamento de dados pessoais sempre que os respetivos titulares submetem candidaturas no âmbito de um processo de recrutamento.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.2.2. Gestão de reclamações</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Quando apresente uma reclamação, a MdP tratará dados pessoais de forma a poder dar seguimento ao respetivo processo. Este tratamento é efetuado com base num interesse legítimo da MdP.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.2.3. Gestão de autos de contraordenação</Text>

        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>A MdP procede ao tratamento dos seus dados pessoais sempre que cometa uma infração. Este tratamento é efetuado em virtude de uma obrigação legal e com base num interesse legítimo da MdP.
        </Text>
        <Text className="text-xl"style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.2.4. Videovigilância</Text>

        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>As instalações da MdP tem câmaras de videovigilância em alguns locais, cujas imagens trata ao abrigo de interesse legítimo na proteção de pessoas e bens. As imagens captadas apenas podem ser transmitidas no âmbito da lei processual penal, sem prejuízo do direito de acesso que assiste aos titulares dos dados.
          As imagens tratadas através de câmaras de videovigilância colocadas no sistema de metro ligeiro da área metropolitana do Porto e respetivas instalações são tratados pela Viaporto, Operação e Manutenção de Transportes, Unipessoal Lda., subconcessionária do sistema de metro ligeiro da área metropolitana do Porto.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.2.5. Gestão de fornecedores, prestadores de serviço e empreiteiros</Text>

        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>A MdP procede ao tratamento dos dados pessoais dos seus fornecedores, prestadores de serviço e empreiteiros, sempre que seja utilizador dos serviços, do fornecedor ou no âmbito de contrato de empreitada, de forma a poder prosseguir a sua atividade comercial e inerente gestão de contabilidade e administrativa, bem como cumprimento de obrigações fiscais. Este tratamento tem por base a execução de um contrato e/ou uma obrigação legal e/ou um interesse legítimo na prestação de atendimento.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.2.6. Gestão de colaboradores externos</Text>

        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>A MdP procede ao tratamento de dados pessoais de colaboradores de algumas entidades que lhe prestam serviços ao abrigo dos procedimentos previstos no Código dos Contratos Públicos, com base num interesse legítimo na proteção de pessoas e bens e para cumprimento de obrigações legais.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.2.7. Atendimento ao Público</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          A MdP procede ao tratamento dos dados pessoais de Atendimento ao Público acima referidos quando algum Utilizador a contacte, com base num interesse legítimo da MdP.
          Os dados de gravação de chamadas telefónicas efetuadas para a linha Olá Metro são tratados pela ViaPorto, Operação e Manutenção de Transportes, Unipessoal Lda., subconcessionária do sistema de metro ligeiro da área metropolitana do Porto.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>  2.3. Períodos de conservação</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          A MdP conserva os seus dados pessoais pelos seguintes períodos:

          FINALIDADE CATEGORIAS DE DADOS PRAZO DE CONSERVAÇÃO
          Recrutamento Dados pessoais básicos (dados constantes do CV, designadamente nome, morada, contactos, atividade profissional, educação, experiência profissional e afiliações); notas da entrevista de emprego. Até à conclusão do processo de recrutamento.
          A MdP conserva também dados relativos a processos de recrutamento efetuados, por um prazo de 5 anos após conclusão do respetivo processo.
          Gestão de reclamações Nome, e-mail, telefone, morada, sexo, data de nascimento, profissão, motivos da reclamação, n.º do documento de identificação e nacionalidade. Até à resolução da reclamação, sem prejuízo de a informação se manter enquanto pendente eventual processo judicial daquela decorrente e até seis meses após o trânsito em julgado da decisão proferido
          Gestão de autos de contraordenação Nome, filiação, data de nascimento, idade, estado civil, profissão, morada, n.º do documento de identificação; data do auto; identificação do local onde ocorreu a infração (linha, zona andante, localidade, destino, veículo); identificação da infração; dados sobre o arquivo do documento Até 5 anos. Em sede judicial, até seis meses após o trânsito em julgado da decisão final proferida no processo respetivo

          Videovigilância (proteção de pessoas e bens) Imagens captadas pelo sistema 30 dias
          Gestão de Fornecedores e Prestadores de Serviço Nome, número de contribuinte, morada, contato e dados bancários (IBAN) 10 anos ou enquanto não decorrer o prazo de prescrição respectivo, no caso de estes dados serem necessários para demonstrar o cumprimento de obrigações
          Gestão de colaboradores externos Dados relativos a actividade profissional Até à cessação do contrato celebrado com a respectiva entidade empregadora
          Dados de Atendimento ao Público Dados de Atendimento ao Público (número de telefone utilizado, duração da chamada, e-mail) 30 dias

        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>  2.4. Destinatários dos seus dados pessoais</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          De forma a que a MdP consiga cumprir todos os seus deveres poderá ter que comunicar ou dar acesso aos seus dados pessoais a outras entidades. Garantimos, no entanto, que estes apenas serão transmitidos a Autoridades Públicas, Administrativas, Judiciárias e Policiais, nomeadamente, Autoridade Tributária e Aduaneira.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>  2.5. Exercício de direitos pelos titulares dos dados</Text>

        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.1. Direito de acesso</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Sempre que o entender, tem o direito de solicitar à MdP confirmação sobre se os seus dados pessoais são tratados, bem como informações relativas a esse tratamento (por exemplo, quais as razões pelas quais os seus dados pessoais são tratados, que tipos de dados pessoais são tratados, quais os destinatários dos seus dados e quais os prazos de conservação dos seus dados, qual o prazo de conservação dos seus dados ou, se tal não for possível, os critérios para fixar esse prazo).
          Tem ainda o direito de obter uma cópia dos seus dados pessoais que sejam tratados pela MdP.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.2. Direito de retificação</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Sempre que considerar que os seus dados pessoais estão incorretos ou incompletos, pode requerer a sua retificação ou que os mesmos sejam completados.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.3. Direito ao apagamento</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Tem também o direito de solicitar o apagamento dos seus dados pessoais quando:
          (i) retire o consentimento em que se baseie o tratamento dos seus dados e não exista outro fundamento jurídico para esse tratamento;
          (ii) os dados pessoais deixem de ser necessários para a finalidade que motivou a sua recolha ou tratamento;
          (iii) apresente oposição ao tratamento dos dados e não existam interesses legítimos prevalecentes que justifiquem o tratamento ou os dados forem tratados para efeitos de marketing direto (comunicações não solicitadas);
          (iv) os dados pessoais forem tratados ilicitamente;
          (v) os dados pessoais tenham que ser apagados ao abrigo de uma obrigação jurídica a que a MdP esteja sujeita; ou
          (vi) os dados pessoais tenham sido recolhidos no contexto da oferta de serviços da sociedade de informação.

          Nestas situações, a MdP apagará os seus dados, exceto se o seu tratamento for necessário para algum dos seguintes efeitos:
          (i) cumprimento de obrigação legal que exija o tratamento e a que a MdP esteja sujeita;
          (ii) fins de arquivo de interesse público, fins de investigação científica ou histórica ou fins estatísticos, na medida em que o exercício do direito ao apagamento prejudique gravemente a obtenção dos objetivos desse tratamento; ou
          (iii) declaração, exercício ou defesa de um direito num processo judicial.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.4. Direito à limitação do tratamento</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Poderá também requerer a limitação do tratamento dos seus dados pessoais em determinadas situações (por exemplo, quando conteste a exatidão dos seus dados pessoais, durante um período de tempo que permita à MdP verificar a sua exatidão, ou nos casos em que tiver apresentado oposição ao tratamento, até que se verifique se os interesses da MdP prevalecem sobre os seus).
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.5. Direito de portabilidade</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Tem o direito de receber os dados pessoais que lhe digam respeito e que tenha fornecido, num formato estruturado, de uso corrente e de leitura automática. Tem ainda o direito de pedir que a MdP transmita esses dados a outro responsável pelo tratamento, desde que tal seja tecnicamente possível e desde que, no caso concreto, estejam cumpridos os requisitos legais para o exercício deste direito.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.6. Direito de oposição</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Tem o direito de a qualquer momento se opor ao tratamento dos seus dados pessoais, por motivos relacionados com a sua situação particular, quando esse tratamento se basear no interesse legítimo da MdP ou quando o mesmo for realizado para fins diversos daqueles para os quais os dados foram recolhidos, mas que sejam compatíveis com os mesmos. Nesses casos a MdP deixará de tratar os seus dados pessoais, a não ser que tenha razões legítimas para realizar esse tratamento e que estas que prevaleçam sobre os seus interesses.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.7. Direito a retirar o seu consentimento</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Nos casos em que o tratamento dos dados seja feito com base no seu consentimento, poderá retirar o consentimento a qualquer momento.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.8. Direito de não ficar sujeito a decisões individuais automatizadas</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          A MdP não adota decisões individuais automatizadas, incluindo definição de perfis, que produzam efeitos na sua esfera jurídica ou o afetem significativamente de forma similar.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.9. Direito de apresentar reclamações junto da autoridade de controlo</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Tem o direito de apresentar reclamações junto da autoridade de controlo competente (em Portugal, a Comissão Nacional de Proteção de Dados), relativamente a matérias relacionadas com o tratamento dos seus dados pessoais.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>      2.5.10. Como pode exercer os seus direitos</Text>
        <Text style={{color: theme === 'dark' ? 'white' : '#black'}}>Pode exercer os seus direitos através dos seguintes canais:

          (i) Presencialmente: pode exercer os seus direitos presencialmente, em Avenida Fernão Magalhães, 1862 – 6.º, Porto;
          (ii) Online: pode exercer no endereço metro@metro-porto.pt;
          (iii) Carta: pode exercer os seus direitos através de carta dirigida a Metro do Porto, S.A. - Avenida Fernão Magalhães, 1862 – 6.º, 4350-158 Porto;
          (iv) Telefone: pode exercer os seus direitos através de chamada telefónica para o serviço de apoio ao Utilizador, através do número 22 508 10 00.

          O exercício dos seus direitos é gratuito, sem prejuízo de, sempre que haja pedidos reiterados, manifestamente infundados e repetitivos, a MdP poder exigir o pagamento de uma taxa razoável, em virtude dos custos administrativos do fornecimento das informações ou de tomada das medidas solicitadas – ou mesmo recusar dar seguimento ao seu pedido.
        </Text>
        <Text className="text-xl" style={{color: theme === 'dark' ? 'white' : '#black'}}>  2.6. Encarregado da Proteção de Dados</Text>
        <Text className="mb-10" style={{color: theme === 'dark' ? 'white' : '#black'}}>
          Sempre que tiver alguma dúvida acerca do tratamento dos seus dados pessoais pela MdP (ou das informações que lhe foram prestadas) pode também contactar o Encarregado da Proteção de Dados da MdP, através dos seguintes contactos: metro@metro-porto.pt.
        </Text>
      </ScrollView>
    </View >
  )
}
