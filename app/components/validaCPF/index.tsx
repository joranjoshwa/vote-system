export const ValidaCPF = () => {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <div className="flex-1 flex flex-col items-center px-8 py-8">
                <div className="w-full max-w-5xl mb-4 text-left">
                    <div className="text-sm text-cyan-400 hover:underline">← Voltar para Pautas</div>
                </div>

                <div className="bg-zinc-900 w-full max-w-5xl p-8 rounded-xl shadow-lg mb-6">
                    <h2 className="text-2xl font-bold mb-6">Validar CPF para Votação</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="text-sm">CPF do Associado</label>
                            <input
                                type="text"
                                placeholder="Digite o CPF"
                                className="w-full bg-zinc-800 border border-zinc-700 px-3 py-2 mt-1 rounded outline-none focus:border-cyan-400"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button className="bg-cyan-400 text-black font-bold px-6 py-2 rounded hover:bg-cyan-300">Validar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}