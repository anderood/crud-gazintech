import { ListDevs } from "./styles"

export function Dashboard() {
    return(
        <>
            <ListDevs>
                <a href="">
                    <img src="https://avatars.githubusercontent.com/u/47918900?v=4" alt="Imagem de Perfil" />
                    <div>
                        <strong>Anderson Santos</strong>
                        <p>Programador para o Mundo ser Melhor</p>
                        <p>Nivel: Junior</p>
                    </div>
                    {/* <FiChevronRight size={20} /> */}
                </a>
            </ListDevs>
        </>
    );
}