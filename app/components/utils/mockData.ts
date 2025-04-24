export interface Pauta {
    id: string;
    descricao: string;
    email: string;
    createdAt: string;
}

export interface VoteOption {
    voto: 'SIM' | 'NAO';
    dataHoraVoto: string;
}

export interface Sessao {
    id: string;
    pautaId: string;
    votos: VoteOption[];
    dataHoraCriacao: string;
    dataHoraFim: string;
    duracaoMinutos: number;
    startTime: string;
    endTime: string;
    status: string;
}

export interface VoteCounts {
    votoSim: number;
    votoNao: number;
    totalVotos: number;
}

export interface User {
    id: number;
    nome: string;
    cpf: string;
}

export interface CPFValidationResult {
    status: 'ABLE_TO_VOTE' | 'UNABLE_TO_VOTE';
}

export interface Vote {
    id: string;
    associadoId: string;
    associadoName: string;
    voteOption: 'SIM' | 'NAO';
    votedAt: string;
}

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };