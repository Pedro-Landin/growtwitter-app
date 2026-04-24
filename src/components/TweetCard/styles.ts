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
        
        p,
        span{
        color: ${props => props.theme.colors.textColorTweet};
    }

    strong{
        color: ${props => props.theme.colors.textColor};
    }

`;

export const TweetCardRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

export const TweetLinkReplie = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 28px;

    img{
        width: 13px;
        height: 13px;
        margin-right: 4px;
    }
`;
