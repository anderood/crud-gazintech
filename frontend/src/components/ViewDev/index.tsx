
import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';
import InputMask from 'react-input-mask';
import api from '../../services/api';

interface ViewDevProps{
    items: {
        id:number;
        name:string;
        gender:string;
        birthday:string;
        age: string;
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

    const [name, setName] = useState('');
    const [urlperfil, setUrlperfil] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [age, setAge] = useState('');
    const [hobby, setHobby] = useState('');

    async function handleEditRegister(event: FormEvent){
        event.preventDefault();
        
        const dateformat = birthday.split("/").reverse().join("-");
        const data = {
            level_id:items.Level.id,
            name: name, 
            gender: gender,
            birthday: dateformat,
            age: age,
            hobby: hobby, 
            urlimg: urlperfil,
        }

        await api.post('/devs/'+items.Level.id, data);
        onRequestClose();
    }

    async function handleDeleteRegister(){
        await api.post('/devs/'+items.Level.id);
        onRequestClose();
    }

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false} //add para ligar o log, tratar mais tarde
        >
        <Container onSubmit={handleEditRegister}>
            <h2>Editar Dev</h2>
            <div className="container-header">
                <div className="container-header-main">
                    <input 
                        placeholder={items.name}
                        onChange={(event) => setName(event.target.value)}
                    />
                     
                     <div>
                        <InputMask 
                            mask="99/99/9999" 
                            placeholder={new Intl.DateTimeFormat('pt-BR').format(new Date(items.birthday))} 
                            onChange={(event) => setBirthday(event.target.value)}/>

                        <input 
                            placeholder={items.age}
                            onChange={(event) => setAge(event.target.value)}
                        />

                     </div>
                    
                </div>
                <img src={items.urlimg} alt="Imagem de Perfil" />

            </div>
            <div className="container-main">
            <input 
                placeholder={items.gender}
                onChange={(event)=>{setGender(event.target.value)}}
            />
            
            <input 
                placeholder={items.Level.level}
                value={items.Level.level}
            />
            </div>
            <div className="container-options">
               
                <input 
                    placeholder={items.urlimg}
                    onChange={(event)=>{setUrlperfil((event.target.value))}}
                />
                <textarea 
                    placeholder={items.hobby}
                    onChange={(event)=>{setHobby((event.target.value))}}
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