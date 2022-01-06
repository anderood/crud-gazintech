
import Modal from 'react-modal';
import { Container } from './styles';

interface ViewDevProps{
    items: {
        id:number;
        name:string;
        gender:string;
        birthday:string;
        hobby:string;
        urlimg:string;
        Level: {
            id:number;
            level:string;
        }
    }
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ViewDev({ items, isOpen, onRequestClose}: ViewDevProps){
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false} //add para ligar o log, tratar mais tarde
        >
        <Container>
            <h2>Editar Dev</h2>
            <div className="container-header">
                <div className="container-header-main">
                    <input 
                        placeholder="Nome Completo"
                        value={items.name}
                    />
                     <input 
                        type="text"
                        placeholder="Data de Nascimento"
                        value={new Intl.DateTimeFormat('pt-BR').format(new Date(items.birthday))}
                    />
                    
                </div>
                <img src={items.urlimg} alt="Imagem de Perfil" />

            </div>
            <div className="container-main">
            <input 
                placeholder="Nome Completo"
                value={items.gender}
            />
            <input 
                placeholder="Nome Completo"
                value={items.Level.level}
            />
            </div>
            <div className="container-options">
               
                <input 
                    placeholder="URL Imagem"
                    value={items.urlimg}
                />
                <textarea 
                    placeholder="Atividades"
                    value={items.hobby}
                />
            </div>
            <div className="container-footer">
                <button 
                    type="submit">
                        Salvar
                </button>
                <button 
                    >
                        Excluir
                </button>
            </div>
        </Container>
        </Modal>
    );
}