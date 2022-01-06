import { ListDevs } from "./styles"
import { FiChevronRight } from "react-icons/fi";

interface DashboardProps{
    listdevs:{
        id:number;
        name:string;
        gender:string;
        birthday:Date;
        hobby:string;
        urlimg:string;
        Level: {
          id:number;
          level:string;
        }
    }
    onOpenViewDevsModal: (id: number) => void;
    // onOpenViewDevsModal: (id: number) => void;
}

export function Dashboard({listdevs, onOpenViewDevsModal }: DashboardProps) {

    return(
        <>
            <ListDevs>
                <a href="#" onClick={() => onOpenViewDevsModal(listdevs.id)}>
                    <img src={listdevs.urlimg} alt="Imagem de Perfil" />
                    <div>
                        <strong>{listdevs.name}</strong>
                        <p>{listdevs.hobby}</p>
                        <span>Nivel: {listdevs.Level.level}</span>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </ListDevs>
        </>
    );
}