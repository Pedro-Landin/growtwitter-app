import { NavLink } from "react-router";
import styled from 'styled-components';

export const ContainerSidebarLeft = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 15px;
    align-items: flex-start;
    padding-top: 16px;
`;

export const BlockMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const LinkMenu = styled(NavLink)`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.textColor};
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;

    &.active {
        font-weight: 800;
    }
`;

export const ButtonTweet = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    cursor: pointer;
    padding: 7px 15px;
    border-radius: 15px;
    font-size: 14px;
    width: 100%;
`;

export const CardUser = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;

export const CardUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
        color: ${props => props.theme.colors.textColor};
        font-weight: 800;
        font-size: 12px;
    }

    span {
        color: #828282;
        font-weight: 400;
        font-size: 12px;
    }
`;

export const ButtonSair = styled.button`
    background-color: transparent;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
    padding: 3px 15px;
    margin-top: 10px;
    border-radius: 8px;
    font-size: 12px;
    border: 1px solid ${props => props.theme.colors.primary};

    &:hover {
        background-color: red;
        color: #fff;
        border: 1px solid red;
    }
`;