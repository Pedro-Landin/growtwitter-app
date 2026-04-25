import styled from "styled-components";

export const ContainerDefaultLayout = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.backgrounColor};
  justify-content: center;
  gap: 32px;

  @media (max-width: 768px) {
    gap: 0px;
    padding: 0 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
