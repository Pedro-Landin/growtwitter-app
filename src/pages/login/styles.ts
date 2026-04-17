import styled from 'styled-components';

export const ContainerLogin = styled.div`
  height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(242, 242, 242);
    padding: 20px;
`;

export const LoginCard = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: stretch; 
    width: 100%;
    max-width: 900px; 
    min-height: 450px;
    border-radius: 8px;
    background-color: white;
    overflow: hidden; 
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);

    @media (max-width: 768px) {
        flex-direction: column; 
        max-width: 400px;
    }
`;

export const LoginCardLeft = styled.div`
    padding: 24px;
    width: 50%;
    background-color: rgb(29, 155, 240);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 32px 20px;

        h1 { 
            font-size: 24px; 
        }
    
    }
`;

export const LoginCardRight = styled.div` 
  padding: 40px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        padding: 30px 20px;
    }
    h2 {
     margin-bottom: 12px;
     text-align: center;
    }

    form{
        width: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: left;
        width: 100%;
        margin: 12px 0px;
    }

    label {
    color: rgb(136, 136, 136);
    font-size: 14px;
    margin-bottom: 4px;
    }

    input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 4px;
    margin-bottom: 8px;
    outline: none;
    border-radius: 8px;
    border: 1px solid rgb(221, 221, 221);
    }

    button{
    margin-top: 8px;
    width: 100%;
    border-width: medium;
    border-style: none;
    border-color: currentcolor;
    border-image: initial;
    border-radius: 8px;
    background-color: rgb(29, 155, 240);
    color: rgb(250, 250, 250);
    padding: 8px 4px;
    }
`;