import styled from "styled-components";

export const Container = styled.header`
    background: #ccc;
    height: 70px;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`;

export const NavBar = styled.nav`
     height: 70px;
    margin-bottom: 30px;
    padding: 5px 0 5px 5px;

    font-size: 48px;
    color: #3a3a3a;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
       
       display: flex;
       button {
           margin: 0 10px 0 10px;
           padding: 16px 16px;
           background: #04d361;
           border-radius: 5px 5px;
           border: 0;
           color: #fff;
           font-weight: bold;
       }
   }
`;