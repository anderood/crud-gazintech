import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* background: #000; */
    }

    body {
        background: #f0f2f5;
    }

    body, input textarea, button{
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    .react-modal-overlay {
        background: rgba(0,0,0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: #F0F2F5;
        padding: 48px;
        position: relative;
        border-radius: 0.25rem;
        /* background: #000; */
    }

`;