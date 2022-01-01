import { ListDevs } from "./styles"
import { FiChevronRight } from "react-icons/fi";

interface DashboardProps{
    onOpenViewDevsModal: () => void;
}

export function Dashboard({onOpenViewDevsModal}: DashboardProps) {
    return(
        <>
            <ListDevs>
                <a href="#" onClick={onOpenViewDevsModal}>
                    <img src="https://avatars.githubusercontent.com/u/47918900?v=4" alt="Imagem de Perfil" />
                    <div>
                        <strong>Anderson Santos</strong>
                        <p>Programador para o Mundo ser Melhor</p>
                        <span>Nivel: Junior </span>
                        
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </ListDevs>
        </>
    );
}