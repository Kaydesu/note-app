import React, { useState } from "react";
import { connect } from "react-redux";
import {
  ModalMask,
  ModalWrapper,
  ModalHeader,
  ModalBody,
} from "./Modal.styled";
import CloseIcon from "../../assets/close.svg";
import {
  getModalMeta,
  getVisibleState,
} from "../../redux/Modal/ModalSeletectors";
import { StoreState } from "../../store";
import { ModalActions } from "../../redux/Modal/ModalActions";
import { Contact } from "../../redux/Contact/ContactModule";
import ContactForm from "../ContactForm/ContactForm";

interface ModalProps {
  visible: boolean;
  closeModal();
  meta: Contact | null;
  maskClosable?: boolean;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  visible,
  meta,
  closeModal,
  maskClosable = true,
}) => {
  return (
    visible && (
      <>
        <ModalMask onClick={maskClosable ? closeModal : null} />
        <ModalWrapper>
          <ModalHeader>
            <div className="header-title"> Add New Contact</div>
            <div className="close-btn" onClick={closeModal}>
              <img src={CloseIcon} />
            </div>
          </ModalHeader>
          <ModalBody>
            <ContactForm userData={meta} />
          </ModalBody>
        </ModalWrapper>
      </>
    )
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    visible: getVisibleState(state),
    meta: getModalMeta(state),
  };
};

const ConnectedModal = connect(mapStateToProps, ModalActions)(Modal);

export default ConnectedModal;