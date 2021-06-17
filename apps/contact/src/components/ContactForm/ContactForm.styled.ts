import styled from "styled-components";

export const Wrapper = styled.div`
  .form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .form-group__input {
      width: 200px;
    }
  }

  .button-group {
    text-align: center;
    button{
      display: inline;
      margin:0 10px;
      margin-top: 20px
    }
  }
`;