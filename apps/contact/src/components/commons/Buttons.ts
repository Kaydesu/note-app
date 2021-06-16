import styled, { css } from "styled-components";

export const ButtonMain = styled.button`
  border-radius: 15px;
  position: relative;
  ${({ theme }) => {
        return css`
      border: 2px solid ${theme.borderColor};
      color: ${theme.textColor};
    `;
    }}
  display: flex;
  img {
    width: 14px;
    margin-left: 10px;
  }
  &:hover {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      opacity: 0.2;
      border-radius: 15px;
    }
  }
`;

export const ButtonDanger = styled(ButtonMain)`
  border: none;
  background-color: #eb3333;
  color: #fff;
`;

export const ButtonSuccess = styled(ButtonMain)`
  border: none;
  background-color: #33eb50;
  color: #fff;
`;