"use client"
import { Header } from "./components/header";
import { PautasVotacao } from './components/pautasVotacao';
import { DetalheSessao } from './components/detalhesSessao';
import { NovaSessao } from "./components/novaSessao";


const Page = () => {
  return (
    <div>
      <Header/>
      {/* <PautasVotacao /> */}
      {/* <DetalheSessao /> */}
      <NovaSessao />
    </div>
  );
}

export default Page;


