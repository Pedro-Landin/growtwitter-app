import styled from "styled-components";

export const ContainerExplorar = styled.div`
  min-width: 452px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 0.8px solid ${(props) => props.theme.colors.border};
  border-right: 0.8px solid ${(props) => props.theme.colors.border};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
    width: 100%;
    min-width: 100%;
  }
`;

export const ExplorarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 8px 8px;
  gap: 24px;
  justify-content: flex-start;
  border-bottom: 0.8px solid ${(props) => props.theme.colors.border};

  h3 {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 14px;
    font-weight: 800;
  }
`;

export const BlockNews = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px;

  p {
    font-size: 12px;
    color: #828282;
  }

  strong {
    font-size: 12px;
    color: #333;
  }
`;
