import { DataGrid, GridColumnsMenuItem } from '@mui/x-data-grid';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import api from '../../services/api';
import { Container } from './styles';

interface ListNivelsProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ListNivels({ isOpen, onRequestClose }: ListNivelsProps){


    const [level, setLevel ] = useState('');

    async function handleRegisterLevel(event: FormEvent){
        event.preventDefault();

        const data = {
            level: level
        }
        await api.post('/levels', data);
        onRequestClose();


    }

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <Container >
                <h2>Cadastrar Niveis</h2>

                <form onSubmit={handleRegisterLevel}>
                    <input 
                        placeholder="Nivel"
                        onChange={(event)=>{setLevel(event.target.value)}}
                    />
                    

                    <button 
                        type="submit">
                            Cadastrar
                    </button>
                </form>
                
            </Container>
        </Modal>
    );
}