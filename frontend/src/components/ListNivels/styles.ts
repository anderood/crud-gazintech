import styled from "styled-components";

export const Container = styled.div`
    h2 {
        color: #969cb2;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    form {
        
        input {
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;

            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-weight: 400;
            font-size: 1rem;

            & + input {
                margin-top: 1rem;
            }
        }

        button {
        /* width: 100%; */
        padding: 0 1.5rem;
        height: 4rem;
        background: #33CC95;
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
    }

    }
`;