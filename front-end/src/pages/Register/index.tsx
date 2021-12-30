import React from 'react';

import { Form } from './style'
import imgPerfil from '../../assets/perfil.svg'

const Register: React.FC = () => {
    return(
        <Form >           
            <img src={imgPerfil} alt="Imagem de Perfil" />
            <div>
                <input type="text" name="" id=""  placeholder="Nome Completo"/>
                <input type="text" name="" id=""  placeholder="URL Imagem"/>
                <input type="text" name="" id=""  placeholder="Hobby"/>
                <input type="text"  placeholder="Nivel"/>
            </div>
            <button>Salvar</button>
                
        </Form>
    );
}

export default Register;
