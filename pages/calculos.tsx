import type { NextPage } from "next";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Calculos: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-col justify-center items-center mt-2 text-slate-800 text-center">
        <h1 className="text-4xl font-semibold">Como o calculo é feito?</h1>
        <div
          className="flex flex-wrap flex-col items-center justify-center gap-4 mt-4 lg:px-16 px-8 w-[calc(100%-40px)] rounded-xl border-[1px] border-slate-400/60 
            max-w-5xl py-4 mb-4 shadow-lg shadow-slate-400/50 text-lg"
        >
          <h2 className="text-3xl pt-4 font-semibold">Metabolismo Basal</h2>
          <p className="text-justify indent-8">
            Saber quantas calorias o corpo gasta para manter se manter, é o
            primeiro passo para adequar a alimentação ao gasto energético
            diário.
            <strong> Metabolismo basal</strong> é a quantidade de energia mínima
            que o corpo necessita em repouso e em estado de jejum. Indica a
            quantidade de energia necessária para manter os processos vitais -
            respiração, metabolismo celular, circulação, atividade glandular,
            manutenção da temperatura corporal, etc. Para isso usamos a equação
            ou fórmula de Harris Benedict, baseado em parâmetros
            personalizáveis, como peso, altura, idade e sexo.
          </p>
          <div
            className="flex flex-col items-center justify-center rounded-lg border-[1px] border-slate-400/40 p-6 gap-2 text-xl
            lg:w-[80%] mt-4"
          >
            <h3 className="font-bold mb-1">{"HARRIS & BENEDICT (1919):"}</h3>
            <div
              id="h-HR"
              className="border-t-[1px] border-slate-400/40 h-0 w-full"
            ></div>
            <p>
              <strong>Homens</strong> = 66 + (13,7 x peso kg) + (5 x altura cm)
              – (6,8 x idade anos)
              <br />
              <strong>Mulheres</strong> = 655 + (9,6 x peso kg) + (1,8 x altura
              cm) – (4,7 x idade anos)
            </p>
          </div>
          <h2 className="text-3xl pt-4 font-semibold">
            Necessidade Energética Diária
          </h2>
          <p className="text-justify indent-8">
            Segundo a Organização Mundial de Saúde, necessidade energética é
            definida como o nível de energia ingerida que seria suficiente para
            compensar o gasto energético segundo: as características físicas do
            indivíduo (altura, peso, sexo, idade, composição corporal), o
            momento fisiológico do organismo (gravidez e lactação) e o grau de
            atividade física (trabalho mecânico). A manutenção de um balanço
            energético adequado depende de um equilíbrio entre a ingestão
            energética e o gasto energético; caso não haja tal equilíbrio, podem
            ocorrer estados de massa corporal excessiva ou deficiente. A energia
            para o ser humano é necessária para: suprir o metabolismo basal em
            cada momento fisiológico, suprir o ETA (efeito termogênico dos
            alimentos) e o gasto com atividade física.
          </p>
          <h3 className="text-justify indent-8 font-semibold text-2xl">
            Níveis de atividade:
          </h3>
          <ul className="mb-8 text-justify indent-8">
            <li>
              • LEVE: atividade geralmente realizada na posição sentada, como é
              o caso de: professores, profissionais liberais, empregados do
              comércio, bancários, estudantes, etc.
              <br />
            </li>
            <li>
              • MODERADA: realizada normalmente de pé, em locais fechados. Nesse
              grupo incluem-se balconistas de lojas, trabalhadores em indústrias
              leves, empregados de restaurantes, etc.
              <br />
            </li>
            <li>
              • INTENSA OU PESADA: aquela em que há um grande dispêndio de
              energia e normalmente é realizada ao ar livre como é o caso de:
              mineiros, bailarinos, metalúrgicos, agricultores não mecanizados,
              alpinistas, atletas de força, juiz de futebol, técnico ou
              preparador físico, jardineiros, carpinteiros, marceneiros,
              ambulantes, etc.
              <br />
            </li>
            <li>
              • MUITO INTENSA OU MUITO PESADA: aquela em que há um dispêndio
              exacerbado de energia, as vezes sob intempéries (condições do
              tempo) ou em ambientes muito quentes, como é o caso de:
              lenhadores, ajudante de pedreiro, trabalhadores da construção,
              ferreiro, maquinistas, atletas de resistência como jogadores de
              futebol, tênis, triatletas e outros.
              <br />
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calculos;