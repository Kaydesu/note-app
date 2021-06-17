import React from "react";
import { connect } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules";

import { ButtonMain } from "../commons/Buttons";
import { HeaderWrapper } from "./Header.styled";
import SearchBox from "../SearchBox/SearchBox";
import { ModalActions } from "../../redux/Modal/ModalActions";

interface IHeaderProps {
  openModal(meta?: object);
}

const Header: React.FunctionComponent<IHeaderProps> = ({ openModal }) => {
  return (
    <HeaderWrapper>
      <SearchBox />
      <div className="add-contact-btn-container">
        <ButtonMain onClick={() => openModal()}>Add Contact</ButtonMain>
      </div>
    </HeaderWrapper>
  );
};

const ConnectedHeader = connect(() => ({}), ModalActions)(Header);

export default ConnectedHeader;