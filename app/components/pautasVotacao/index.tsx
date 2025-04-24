import { Home, FileText, UserCheck, PlusCircle } from 'lucide-react';
import { PautaCard } from '../PautaCard';
import { pautas } from '@/data/pautas'

export const PautasVotacao = () => {

    return (
        <div className="min-h-screen bg-zinc-900 text-white flex flex-col">
            <div className='container mx-auto p-6 flex-grow'>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 mb-6">
                    <h1 className="text-3xl font-bold">Pautas de Votação</h1>
                    <button className='flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-4 py-2 rounded-md transition-colors'><PlusCircle className="h-5 w-5" />Nova Pauta</button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {pautas.map((pauta) => (
                        <PautaCard key={pauta.id} pauta={pauta}/>
                    ))}
                </div>
            </div>
        </div>
    );
}