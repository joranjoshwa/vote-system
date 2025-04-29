
import { Home, FileText, UserCheck, PlusCircle } from 'lucide-react';
import './style.css';

type Props = {
    onNavigate: (page: 'pautas' | 'detalhes' | 'novaSessao' | 'novaPauta' | 'validaCPF') => void;
};

export const Header = ({ onNavigate }: Props) => {


    return (
        <div className='header'>
            <div className="logo">
                <span className="glow-text mr-2">VoteSystem</span>
            </div>

            <div className="buttons">
                <div className="button button-active">
                    <Home className="icon" />
                    <button onClick={() => onNavigate('pautas')}>Pautas</button>
                </div>

                <div className="button">
                    <PlusCircle className="icon" />
                    <button onClick={() => onNavigate('novaPauta')}>Nova Pauta</button>
                </div>

                <div className="button">
                    <UserCheck className="icon" />
                    <button onClick={() => onNavigate('validaCPF')}>Validar CPF</button>
                </div>

            </div>
        </div>
    )

}