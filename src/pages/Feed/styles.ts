import styled from 'styled-components';

export const Title = styled.h1`
    color: ${props => props.theme.colors.primary};
`;

export const ContainerFeed = styled.main`
    min-width: 452px;
    border-left: 0.8px solid ${props => props.theme.colors.border};
    border-right: 0.8px solid ${props => props.theme.colors.border};
`;

export const BlockTitleFeed = styled.div`
    padding: 10px;
    border-bottom: 0.8px solid ${props => props.theme.colors.border};

    h1{
        color: ${props => props.theme.colors.textColor};
        font-size: 14px;
        font-weight: 800px;
    }
`;