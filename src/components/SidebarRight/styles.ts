import styled from 'styled-components';

export const ContainerSidebarRight = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #E9E9E9;
    height: 100%;
    width: 263px;
    border-radius: 10px;
    padding: 16px;
    gap: 10px;
    align-items: flex-start;

    h3{
        font-size: 14px;
        color: #333;
    }
`;

export const BlockNews = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    p{
        font-size: 12px;
        color: #828282;
    }

    strong {
        font-size: 12px;
        color: #333;
    }
`;

export const ButtonShowMore = styled.button`
    cursor: pointer;
    color: #1D9BF0;
    font-size: 10px;
`;