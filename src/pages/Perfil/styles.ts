import styled from "styled-components";

export const ContainerPerfil = styled.main`
  min-width: 452px;

  border-left: 0.8px solid ${(props) => props.theme.colors.border};
  border-right: 0.8px solid ${(props) => props.theme.colors.border};
`;

export const PerfilHeader = styled.div`
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

  p {
    color: ${(props) => props.theme.colors.textColor};
    font-size: 10px;
    font-weight: 400;
  }
`;

export const PerfilBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px 8px 8px;
  height: 131px;
  gap: 24px;
  background-color: #bdbdbd;
  border-bottom: 0.8px solid ${(props) => props.theme.colors.border};
  margin-bottom: 48px;
  position: relative;

  img {
    position: absolute;
    bottom: -45px;
  }
`;

export const PerfilInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 16px 8px 8px;
  border-bottom: 0.8px solid ${(props) => props.theme.colors.border};

  strong {
    font-size: 14px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.textColor};
  }

  span{
    font-size: 10px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const PerfilTweets = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
