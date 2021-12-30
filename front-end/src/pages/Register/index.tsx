import React from 'react';

import { EditDev } from './style'

const Register: React.FC = () => {
    return(
        <EditDev>
            <img src="https://avatars.githubusercontent.com/u/47918900?v=4" alt="Imagem de Perfil" />
            <input placeholder="Digite o Nome" />
            <input placeholder="Digite o Hobby" />
            <input placeholder="Escolha o Nivel" />

            <button>Salvar</button>

        </EditDev>
    );
}

export default Register;
