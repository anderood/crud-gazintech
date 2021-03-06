import styled from 'styled-components';

export const Container = styled.form`

    h2 {
        color: #969CB2;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        border-radius: 0.25rem;
        color: #6c6c6c;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        & + input {
            margin-top: 1rem;
        }
    }

    div {
        display:flex;
        margin-top: 1rem;

        select {
            width: 100%;
            padding: 0 1.5rem;
            height: 3rem;
            border-radius: 0.25rem;

            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-size: 1rem;
            color: #6c6c6c;
            margin-right:4px;
        }
        
        input {
            margin-left:4px;
            
        }
    }

    div {
        display:flex;
        margin-top: 1rem;

        select {
            width: 100%;
            padding: 0 1.5rem;
            height: 3rem;
            border-radius: 0.25rem;

            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-size: 1rem;
            color: #6c6c6c;
            margin-right:4px;
        }
        
        input {
            margin-left:4px;
            
        }
    }

    textarea {
        width: 100%;
        padding: 1rem 1.5rem;
        height: 8rem;
        margin-top: 1rem;
        border-radius: 0.25rem;
        color: #6c6c6c;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;
    }

    button {
        width: 100%;
        padding: 0 1.5rem;
        height: 3rem;
        background: #33CC95;
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
    }
`;