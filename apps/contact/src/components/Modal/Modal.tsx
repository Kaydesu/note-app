import React, { useState } from "react";
import { ModalMask, ModalWrapper, ModalHeader, ModalBody } from "./Styled";
import { InputText } from "../commons/Input";
import CloseIcon from "../../assets/close.svg";

type FooterButton = {
  name: string;
  id: string;
  onClick(): any;
};

interface ModalProps {
  renderContent(): React.ReactElement;
  footerButtons: FooterButton[];
}

const Modal: React.FunctionComponent<any> = () => {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    visible && (
      <>
        <ModalMask />
        <ModalWrapper>
          <ModalHeader>
            <div className="header-title"> Add New Contact</div>
            <div className="close-btn" onClick={() => setVisible(!visible)}>
              <img src={CloseIcon} />
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <span className="form-group__label"> Name </span>
              <InputText className="form-group__input" />
            </div>
            <div className="form-group">
              <span className="form-group__label"> E-mail </span>
              <InputText className="form-group__input" />
            </div>
            <div className="form-group">
              <span className="form-group__label"> Address </span>
              <InputText className="form-group__input" />
            </div>
            <div className="form-group">
              <span className="form-group__label"> Phone </span>
              <InputText className="form-group__input" />
            </div>
          </ModalBody>
        </ModalWrapper>
      </>
    )
  );
};

export default Modal;
