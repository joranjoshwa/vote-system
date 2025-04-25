"use client"
import { Header } from "./components/header";
import { PautasVotacao } from './components/pautasVotacao';
import { DetalheSessao } from './components/detalhesSessao';
import { NovaSessao } from "./components/novaSessao";
import { NovaPauta } from "./components/novaPauta";
import { ValidaCPF } from "./components/validaCPF";


const Page = () => {
  return (
    <div>
      <Header/>
      {/* <PautasVotacao /> */}
      {/* <DetalheSessao /> */}
      {/* <NovaSessao /> */}
      {/* <NovaPauta /> */}
      <ValidaCPF />
    </div>
  );
}

export default Page;


