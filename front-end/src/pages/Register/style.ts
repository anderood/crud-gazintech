import styled from "styled-components";

export const Form = styled.form`

    max-width: 400px;
    background: #fff;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      margin: 16px 16px;
    }

    img {
      width: 200px;
      height: 200px;
      margin: 16px 16px;
    }

    div {
      width: 100%;
      height: 200px;

      display: flex;
      flex-direction: column;
      padding: 16px 16px;

      input {
        height: 70px;
        padding: 0 25px;
        border: 0;
        border-radius: 5px 5px;
        color: #3a3a3a;
        margin: 6px 6px;
      }

      
    }

    button {
        width: 210px;
        height: 50px;
        margin: 16px 16px;
        background: #04d361;
        border-radius: 5px 5px;
        border: 0;
        color: #fff;
        font-weight: bold;
    }
    
    
   

   
`;