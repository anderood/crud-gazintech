import { DataGrid, GridColumnsMenuItem } from '@mui/x-data-grid';
import Modal from 'react-modal';
import { Container } from './styles';

interface ListNivelsProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const columns = [
    {field: 'id', headerName: 'ID', width: 70 },
    {field: 'Nivel', headerName: 'Nivel', width: 70 },
    {field: 'description', headerName: 'Descrição', width: 300 },
]

const rows = [
    { id: 1, Nivel: 'Snow', description: 'Jon' },
    { id: 1, Nivel: 'Snow', description: 'Jon' },
  ];
  
export function ListNivels({ isOpen, onRequestClose }: ListNivelsProps){
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Niveis</h2>

                <form action="">
                    <input 
                        placeholder="Nivel"
                    />
                    <input 
                        placeholder="Descrição"
                    />

                    <button 
                        type="submit">
                            Cadastrar
                    </button>
                </form>

                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        // checkboxSelection
                    />
                </div>
                
            </Container>
        </Modal>
    );
}