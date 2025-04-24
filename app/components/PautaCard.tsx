import { Calendar, Mail } from 'lucide-react';
import { Pauta, formatDate } from './utils/mockData';

type Props = {
    pauta: Pauta;
};

export const PautaCard = ({ pauta }: Props) => {
    return (
        <div className="bg-zinc-800 rounded-lg shadow-md p-5 border border-zinc-700 hover:border-cyan-400 transition-colors">

            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white mb-3">{pauta.descricao}</h3>
            </div>

            <div className="flex flex-col items-start text-gray-300 mb-2 text-sm gap-2">
                <div className="flex items-center text-gray-400">
                    <Mail className="h-4 w-4 mr-2 text-cyan" />
                    <span>{pauta.email}</span>
                </div>

                <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-cyan" />
                    <span>Criada em: {formatDate(new Date().toISOString())}</span>
                </div>
            </div>

            <div className="flex justify-end mt-auto w-auto bg-cyan-400 text-black font-medium px-4 py-2 rounded-md">
                Ver Sessões
            </div>
        </div>
    );
}