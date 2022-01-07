import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container } from '../NewRegisterModal/styles';
import InputMask from 'react-input-mask';
import api from '../../services/api';

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
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [hobby, setHobby] = useState('');
    const [level, setLevel] = useState(Number);
    const [age, setAge] = useState(Number);

    async function handleNewRegisterDev(event: FormEvent){
        event.preventDefault();
        
        const dateformat = birthday.split("/").reverse().join("-");
        const data = {
            level_id:level,
            name: name, 
            gender: gender,
            birthday: dateformat,
            age: age,
            hobby: hobby, 
            urlimg: urlperfil,
        }
        await api.post('/devs', data);
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
            <Container onSubmit={handleNewRegisterDev}>
                <h2>Cadastrar Dev</h2>
                <input
                    required 
                    type="text"
                    placeholder="Nome Completo"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    required 
                    type="text"
                    placeholder="URL Imagem"
                    value={urlperfil}
                    onChange={(event) => setUrlperfil(event.target.value)}
                />
                <div>
                    <select value={gender} onChange={(event) => setGender(event.target.value)}>
                        <option value="Sexo">Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                    
                <InputMask mask="99/99/9999" placeholder="99/99/9999" onChange={(event) => setBirthday(event.target.value)}/>

                </div>
                <div>

                
                    <select className="selectnivel"  onChange={(event)=>{setLevel(Number(event.target.value))}}>
                        {items.map(item=>(
                           <option key={item.id} value={item.id}>
                                {item.level}
                            </option>
                        ))}
                    </select>
                    <input
                    required 
                    type="number"
                    placeholder="Idade"
                    value={age}
                    onChange={(event) => setAge(Number(event.target.value))}
                />
                </div>
                <textarea 
                    typeof="text"
                    placeholder="Atividades"
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