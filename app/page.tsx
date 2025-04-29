"use client"
import { Header } from "./components/header";
import { PautasVotacao } from './components/pautasVotacao';
import { DetalheSessao } from './components/detalhesSessao';
import { NovaSessao } from "./components/novaSessao";
import { NovaPauta } from "./components/novaPauta";
import { ValidaCPF } from "./components/validaCPF";
import { useState } from "react";


const Page = () => {
  
  const [page, setPage] = useState<'pautas' | 'detalhes' | 'novaSessao' | 'novaPauta' | 'validaCPF'>('pautas');
  
  return (
    <div>
      <Header onNavigate={setPage}/>

      {page === 'pautas' && <PautasVotacao onNavigate={setPage} />}
      {page === 'detalhes' && <DetalheSessao onNavigate={setPage} />}
      {page === 'novaSessao' && <NovaSessao onNavigate={setPage} />}
      {page === 'novaPauta' && <NovaPauta onNavigate={setPage} />}
      {page === 'validaCPF' && <ValidaCPF />}
    </div>
  );
}

export default Page;


