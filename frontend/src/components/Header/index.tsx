import { Container, Content, NavBar } from "./styles";

interface HeaderProps {
    onOpenNewRegisterModal: () => void;
}

export function Header({ onOpenNewRegisterModal }: HeaderProps){
    return(
        <Container>
            <Content>
                <NavBar>
                    <span>GazinTech</span>
                    <div>
                        <button type="button" onClick={onOpenNewRegisterModal}>
                            Cadastrar
                        </button>
                        <button type="button">Niveis</button>
                    </div>
                </NavBar>
                
            </Content>
        </Container>
    );
}