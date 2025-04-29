type Props = {
    onNavigate: (page: 'pautas' | 'detalhes' | 'novaSessao' | 'novaPauta' | 'validaCPF') => void;
};

export const DetalheSessao = ({ onNavigate }: Props ) => {

    const pauta = {
        id: 1,
        titulo: "Aprovação do orçamento anual",
        email: "admin@example.com",
        criadaEm: "2025-04-23T23:47:00",
        sessoes: [
            {
                id: 1,
                duracao: 60,
                inicio: "2025-04-10T07:00:00",
                fim: "2025-04-10T08:00:00",
                status: "Encerrada",
            },
            {
                id: 2,
                duracao: 120,
                inicio: "2025-04-15T11:00:00",
                fim: "2025-04-15T13:00:00",
                status: "Encerrada",
            },
        ],
    };

    return (
        <div className="max-w-6xl mx-auto p-6 mt-6 text-white">
            <button className="text-cyan-400 hover:underline text-sm" onClick={() => onNavigate('pautas')}>
                ← Voltar para Pautas
            </button>

            <div className="bg-zinc-900 mt-4 p-6 rounded-lg shadow">
                <h1 className="text-xl font-bold mb-2">{pauta.titulo}</h1>

                <div className="text-sm text-gray-300 space-y-1">
                    <p className="text-cyan-300">Criada em: {new Date(pauta.criadaEm).toLocaleString()}</p>
                    <p className="text-cyan-300">Email: {pauta.email}</p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-10 mb-4">
                <h2 className="text-lg font-semibold ">Sessões de Votação</h2>
                <button 
                    className="bg-cyan-400 text-black font-bold px-3 py-2 rounded hover:bg-cyan-300"
                    onClick={() => onNavigate('novaSessao')}
                >+ Nova Sessão</button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {pauta.sessoes.map((sessao) => (
                    <div
                        key={sessao.id}
                        className="bg-zinc-800 p-4 rounded-lg shadow space-y-2 w-80 h-55"
                    >
                        <h3 className="text-base font-semibold">Sessão de Votação</h3>

                        <p className="text-sm text-cyan-400">🕒 Duração: {sessao.duracao} minutos</p>
                        <p className="text-sm text-cyan-400">📅 Início: {new Date(sessao.inicio).toLocaleString()}</p>
                        <p className="text-sm text-cyan-400">📅 Fim: {new Date(sessao.fim).toLocaleString()}</p>
                        <button 
                            className="inline-block bg-cyan-400 text-black font-bold px-3 py-1 rounded hover:bg-cyan-300 mt-4"
                            onClick={() => onNavigate('detalhes')}
                        >Ver Detalhes</button>
                    </div>
                ))}
            </div>
        </div>
    );
}