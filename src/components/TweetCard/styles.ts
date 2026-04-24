import styled from 'styled-components';

export const ContainerTweetCard = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid ${props => props.theme.colors.border};
    padding: 10px;

    img {
        width: 37px;
        height: 37px;
    }
`;

export const InfoTweetCard = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const TweetCardRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;