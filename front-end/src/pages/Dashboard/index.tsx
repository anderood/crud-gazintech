import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, ListDevs } from './styles';

const Dashboard: React.FC = () => {
    return(
        <>
            <Title>Cadastros de Devs</Title>

            <Form>
                <input placeholder="Pesquise Por Devs" />
                <button type="submit">Pesquisar</button>
            </Form>

            <ListDevs>
                <a href="">
                    <img src="https://avatars.githubusercontent.com/u/47918900?v=4" alt="Imagem de Perfil" />
                    <div>
                        <strong>Anderson Santos</strong>
                        <p>Programador para o Mundo ser Melhor</p>
                        <p>Nivel: Junior</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="">
                    <img src="https://avatars.githubusercontent.com/u/47918900?v=4" alt="Imagem de Perfil" />
                    <div>
                        <strong>Anderson Santos</strong>
                        <p>Programador para o Mundo ser Melhor</p>
                        <p>Nivel: Junior</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="">
                    <img src="https://avatars.githubusercontent.com/u/47918900?v=4" alt="Imagem de Perfil" />
                    <div>
                        <strong>Anderson Santos</strong>
                        <p>Programador para o Mundo ser Melhor</p>
                        <p>Nivel: Junior</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </ListDevs>
        </>
    );
}

export default Dashboard;

