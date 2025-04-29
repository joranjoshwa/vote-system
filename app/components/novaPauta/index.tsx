type Props = {
    onNavigate: (page: 'pautas' | 'detalhes' | 'novaSessao' | 'novaPauta' | 'validaCPF') => void;
  };

export const NovaPauta = ({ onNavigate }: Props) => {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <div className="flex-1 flex flex-col items-center  px-4 py-8">
                <div className="w-full max-w-2xl mb-4 text-left">
                    <button 
                        className="text-sm text-cyan-400 hover:underline"
                        onClick={() => onNavigate('pautas')}
                    >← Voltar para Pautas</button>
                </div>

                <div className="bg-zinc-900 w-full max-w-2xl p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-6">Criar Nova Pauta</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm">Descrição da Pauta</label>
                            <input
                                type="text"
                                placeholder="Ex: Aprovação do orçamento anual"
                                className="w-full bg-zinc-800 border border-zinc-700 px-3 py-2 mt-1 rounded outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm">Email do Responsável</label>
                            <input
                                type="text"
                                placeholder="Ex: admin@exemplo.com"
                                className="w-full bg-zinc-800 border border-zinc-700 px-3 py-2 mt-1 rounded outline-none focus:border-cyan-400"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="bg-cyan-400 text-black font-bold px-6 py-2 rounded hover:bg-cyan-300">Criar Pauta</button>
                    </div>
                </div>
            </div>
        </div>
    );
}