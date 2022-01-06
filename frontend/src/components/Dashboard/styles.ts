import styled from 'styled-components';

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


export const Form = styled.form`
    margin-top: 40px;
    max-width: 550px;
    

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 25px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
    }

    button {
        width: 210px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
    }

`;

export const ListDevs = styled.div`
    margin-top: 80px;
    max-width: 700px;
    margin: 0 auto;
    padding: 16px 16px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;

        & + a {
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p, span {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }

`;
