
import Modal from 'react-modal';
import { Container } from './styles';

interface ViewDevProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ViewDev({ isOpen, onRequestClose }: ViewDevProps){
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
        <Container>
            <h2>Editar Dev</h2>
            <div className="container-header">
                <div className="container-header-main">
                    <input 
                        placeholder="Nome Completo"
                    />
                     <input 
                        type="date"
                        placeholder="Data de Nascimento"
                    />
                    
                </div>
                <img src="https://avatars.githubusercontent.com/u/47918900?v=4" alt="" />

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
                />
                <textarea 
                    placeholder="Atividades"
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