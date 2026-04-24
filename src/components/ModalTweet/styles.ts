import styled from "styled-components";

interface ButtonProps {
  isActive: boolean;
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: ${(props) => props.theme.colors.backgrounColor};
  width: 100%;
  max-width: 454px;
  max-height: 236px;
  border-radius: 11px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  textarea {
    width: 100%;
    height: 150px;
    border: none;
    resize: none;
    font-size: 14px;
    margin-top: 40px;
    font-weight: 500;
    outline: none;
    background: transparent;
    color: ${(props) => props.theme.colors.textColor};
  }
`;

export const FooterModal = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #e0e0e0;
  padding-top: 12px;
`;

export const ButtonTweetar = styled.button<ButtonProps>`
  background-color: ${(props) => (props.isActive ? "#1D9BF0" : "#064E7E")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#758D9D")};

  font-size: 12px;
  /* width: 70px; */
  height: 29px;
  border-radius: 14.5px;
  padding: 0px 20px;
  border: none;
  cursor: ${(props) => (props.isActive ? "pointer" : "not-allowed")};
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.7;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textColor};
`;
