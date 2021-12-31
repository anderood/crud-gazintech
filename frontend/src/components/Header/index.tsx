import { Container, Content, NavBar } from "./styles";

interface HeaderProps {
    onOpenNewRegisterModal: () => void;
    onOpenListNivelsModal: () => void;
}

export function Header({ onOpenNewRegisterModal, onOpenListNivelsModal }: HeaderProps){
    return(
        <Container>
            <Content>
                <NavBar>
                    <strong>GazinTech</strong>
                    <div>
                        <button type="button" onClick={onOpenNewRegisterModal}>
                            Cadastrar
                        </button>
                        <button 
                            type="button" onClick={onOpenListNivelsModal}>
                            Niveis
                        </button>
                    </div>
                </NavBar>
                
            </Content>
        </Container>
    );
}