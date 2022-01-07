import styled from "styled-components";

export const Container = styled.form`

    h2 {
        color: #969CB2;
        font-size: 1.5rem;
    }

    .container-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .container-header-main{
            display: flex;
            flex-direction: column;
            

            input {
                width: 100%;
                padding: 0 2.5rem;
                height: 3rem;
                border-radius: 0.25rem;

                border: 1px solid #d7d7d7;
                background: #e7e9ee;

                font-weight: 400;
                font-size: 1rem;

                & + input {
                    margin-top: 1rem;
                }
            }

        }
        
        img {
            width: 180px;
            border-radius: 50%;
        }
    }


    .container-main {

        display:flex;
        margin-top: 1rem;

        input {
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
        
        display:flex;
        margin-top: 1rem;

        input {
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

        
    }

    .container-options {
        input {
                width: 100%;
                padding: 0 1.5rem;
                height: 3rem;
                border-radius: 0.25rem;

                border: 1px solid #d7d7d7;
                background: #e7e9ee;

                font-weight: 400;
                font-size: 1rem;

                margin-top: 1rem;
            }

        textarea {
            width: 100%;
            padding: 1rem 1.5rem;
            height: 8rem;
            margin-top: 1rem;
            border-radius: 0.25rem;

            border: 1px solid #d7d7d7;
            background: #e7e9ee;

            font-weight: 400;
            font-size: 1rem;
        }
    }

    .container-footer {

        display: flex;

        button[type="submit"] {
            width: 100%;
            padding: 0 1.5rem;
            height: 3rem;
            background: #33CC95;
            color: #fff;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1rem;
            font-weight: 600;
            margin-right:4px;
        }

        button {
            width: 100%;
            padding: 0 1.5rem;
            height: 3rem;
            background: #E52E4D;
            color: #fff;
            border-radius: 0.25rem;
            border: 0;
            font-size: 1rem;
            margin-top: 1rem;
            font-weight: 600;
            margin-right:4px;
        }
    }

`;