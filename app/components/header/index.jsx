
import { Home, FileText, UserCheck, PlusCircle } from 'lucide-react';
import './style.css';

export const Header = () => {


    return (
        <div className='header'>
            <div className="logo">
                <span className="glow-text mr-2">VoteSystem</span>
            </div>

            <div className="buttons">
                <div className="button button-active">
                    <Home className="icon" />
                    <span>Pautas</span>
                </div>

                <div className="button">
                    <PlusCircle className="icon" />
                    <span>Nova Pauta</span>
                </div>

                <div className="button">
                    <UserCheck className="icon" />
                    <span>Validar CPF</span>
                </div>

            </div>
        </div>
    )

}