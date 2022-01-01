import Modal from 'react-modal';
import { Container } from '../NewRegisterModal/styles';

interface NewRegisterModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewRegisterModal({ isOpen, onRequestClose}: NewRegisterModalProps) {
    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Dev</h2>
                <input 
                    placeholder="Nome Completo"
                />
                <input 
                    placeholder="URL Imagem"
                />
                <div>
                    <select value="">
                        <option value="">Sexo</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                    </select>
                    <input 
                        type="date"
                        placeholder="Data de Nascimento"
                    />

                </div>
                <select value="" className="selectnivel">
                        <option value="">Nivel</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                    </select>
                <textarea 
                    placeholder="Atividades"
                />

                <button 
                    type="submit">
                        Salvar
                </button>
            </Container>
        </Modal>
    );
}