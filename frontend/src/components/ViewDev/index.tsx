
import Modal from 'react-modal';
import { Container } from './styles';

interface ViewDevProps{
    isOpen: boolean;
    onRequestClose: () => void;
    items:{
        id:number;
        name:string;
        gender:string;
        birthday:number;
        hobby:string;
        urlimg:string;
        Level: {
            id:number;
            level:string;
        }
    }
}

export function ViewDev({ isOpen, onRequestClose, items}: ViewDevProps){
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
                        type="date"
                        placeholder="Data de Nascimento"
                        value={items.birthday}
                    />
                    
                </div>
                <img src={items.urlimg} alt="" />

            </div>
            <div className="container-main">
                <select value="">
                    <option value="">Sexo</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>
                <select value="">
                    <option value="">Nivel</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>
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