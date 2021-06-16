import React from "react";
import { ButtonMain } from "../commons/Buttons";
import { HeaderWrapper } from "./Styled";
import SearchBox from "../SearchBox/SearchBox";

const Header: React.FunctionComponent = () => {
  return (
    <HeaderWrapper>
      <SearchBox />
      <div className="add-contact-btn-container">
        <ButtonMain>Add Contact</ButtonMain>
      </div>
    </HeaderWrapper>
  );
};

export default Header;