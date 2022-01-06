import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container } from '../NewRegisterModal/styles';

interface NewRegisterModalProps {
    items:Array<{
        id:number;
        level: string;
    }>
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewRegisterModal({items, isOpen, onRequestClose}: NewRegisterModalProps) {

    const [name, setName] = useState('');
    const [urlperfil, setUrlperfil] = useState('');
    const [genre, setGenre] = useState(0);
    const [birthday, setBirthday] = useState(1);
    const [hobby, setHobby] = useState('');


    function handleNewRegisterDev(event: FormEvent){
        event.preventDefault();
        console.log(name, urlperfil, birthday, hobby)

    }


    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
        >
            <Container onSubmit={handleNewRegisterDev}>
                <h2>Cadastrar Dev</h2>
                <input 
                    type="text"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input 
                    type="text"
                    placeholder="URL Imagem"
                    value={urlperfil}
                    onChange={(event) => setUrlperfil(event.target.value)}
                />
                <div>
                    <select>
                        <option value="Sexo">Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                    <input 
                        type="number"
                        placeholder="Data de Nascimento"
                        value={birthday}
                        onChange={(event) => setBirthday(Number(event.target.value))}
                    />
                </div>

                    <select className="selectnivel">
                        {items.map(item=>(
                           <option key={item.id} value={item.id}>{item.level}</option>
                        ))}
                    </select>
                <textarea 
                    typeof="text"
                    placeholder="Atividades"
                    value={hobby}
                    onChange={(event)=> setHobby(event.target.value)}
                />

                <button 
                    type="submit">
                        Salvar
                </button>
            </Container>
        </Modal>
    );
}