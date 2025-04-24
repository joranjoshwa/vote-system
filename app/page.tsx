"use client"
import { Header } from "./components/header";
import { PautasVotacao } from './components/pautasVotacao';
import { DetalheSessao } from './components/detalhesSessao';


const Page = () => {
  return (
    <div>
      <Header/>
      {/* <PautasVotacao /> */}
      <DetalheSessao />
    </div>
  );
}

export default Page;


