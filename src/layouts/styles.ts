import styled from 'styled-components';

export const ContainerDefaultLayout = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.backgrounColor};
    justify-content: center;
    gap: 32px;
`;