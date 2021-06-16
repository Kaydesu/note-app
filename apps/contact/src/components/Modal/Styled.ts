import styled from "styled-components";

export const ModalMask = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.modalMask};
  top: 0;
  left: 0;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.modalBodyColor};
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const ModalHeader = styled.div`
  background-color: ${({ theme }) => theme.modalHeaderColor};
  padding: 5px 20px;
  color: var(--white);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .close-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 18px;
      margin: 0;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 20px 40px;
  color: ${({ theme }) => theme.textColor};
  .form-group {
    display:flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .form-group__input {
      width: 200px;
    }
  }
`;