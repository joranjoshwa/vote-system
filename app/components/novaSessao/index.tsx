export const NovaSessao = () => {
    return (
        <div className="flex-1 flex justify-center items-center px-4 py-12 bg-black text-white">
            {/* <div className="w-full max-w-xl mb-4 text-left">
                <div className="text-sm text-cyan-400 hover:underline cursor-pointer">← Voltar para a Pauta</div>
            </div>
             */}
            <div className="bg-zinc-900 p-8 rounded-xl w-full max-w-5xl shadow-lg h-full">
                <div className="text-sm text-cyan-400 hover:underline flex items-center mb-6">← Voltar para a Pauta</div>

                <h2 className="text-2xl font-bold mb-2">Criar Nova Sessão de Votação</h2>
                <p className="text-sm text-white/80 mb-6">Pauta: <strong>Aprovação do orçamento anual</strong></p>

                <div className="space-y-2 mb-6">
                    <label className="text-sm">Duração da Sessão (em minutos)</label>
                    <input
                        type="number"
                        defaultValue={60}
                        className="w-full bg-zinc-800 border border-zinc-700 px-2 py-2 rounded outline-none focus:border-cyan-400"
                    />
                    <p className="text-xs text-white/60">A sessão começará imediatamente após a criação.</p>
                </div>

                <div className="flex justify-end">
                    <button className="bg-cyan-400 text-black font-semibold px-4 py-2 rounded hover:bg-cyan-300">Criar Sessão</button>
                </div>
            </div>



        </div>
    );
}