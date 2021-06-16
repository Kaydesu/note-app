import React from "react";
import { ButtonMain } from "../commons/Buttons";
import { InputText } from "../commons/Input";
import { SearchWrapper } from "./Styled";

const SearchBox: React.FunctionComponent = () => {
  return (
    <SearchWrapper>
      <InputText />
      <ButtonMain>Search</ButtonMain>
    </SearchWrapper>
  );
};

export default SearchBox;

