import styled from 'styled-components';

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.backgrounColor};
    color: ${props => props.theme.colors.textColor};
    padding: 10px 20px;
`;