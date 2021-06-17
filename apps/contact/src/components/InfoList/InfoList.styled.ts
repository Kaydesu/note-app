import styled, {css} from "styled-components";



export const CardList = styled.div`
  margin-top: 50px;
  height: calc(100% - 65px);
  overflow: auto;
`;

export const CardItem = styled.article`
  padding: 10px 20px;
  padding-bottom: 20px;
  margin-bottom: 35px;
  border-radius: 15px;
  width: 70%;
  margin: 0 auto 35px auto;

  ${({theme}) => {
    return css`
      color: ${theme.textColor};
      background: ${theme.cardBodyColor};
      box-shadow: ${theme.cardBodyShadow};
    `
  }}


  .card-item__header {
    display: flex;
    font-size: 26px;
    justify-content: space-between;
    margin-bottom: 10px;
    .card-item__header-actions {
      button {
        display: inline-flex;
        margin: 0 5px;
      }
    }
  }
`;