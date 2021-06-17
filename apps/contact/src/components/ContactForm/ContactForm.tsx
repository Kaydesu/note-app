import React, { useState } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./ContactForm.styled";
import { InputText } from "../commons/Input";
import { ButtonSuccess, ButtonDanger } from "../commons/Buttons";
import { ContactActions } from "../../redux/Contact/ContactActions";

interface IFormData {
  id?: string | null;
  name: string;
  mail: string;
  address: string;
  phone: string;
}

interface IContactFormProps {
  userData: IFormData;
  createNewContact(data);
}

const ContactForm: React.FunctionComponent<IContactFormProps> = ({
  userData,
  createNewContact,
}) => {
  const [formData, setFormData] = useState<IFormData>(() => {
    return (
      userData || {
        id: null,
        name: "",
        mail: "",
        address: "",
        phone: "",
      }
    );
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <div className="form-group">
        <span className="form-group__label"> Name </span>
        <InputText
          className="form-group__input"
          onChange={onChange}
          value={formData.name}
          name="name"
        />
      </div>
      <div className="form-group">
        <span className="form-group__label"> E-mail </span>
        <InputText
          className="form-group__input"
          onChange={onChange}
          value={formData.mail}
          name="mail"
        />
      </div>
      <div className="form-group">
        <span className="form-group__label"> Address </span>
        <InputText
          className="form-group__input"
          onChange={onChange}
          value={formData.address}
          name="address"
        />
      </div>
      <div className="form-group">
        <span className="form-group__label"> Phone </span>
        <InputText
          className="form-group__input"
          onChange={onChange}
          value={formData.phone}
          name="phone"
        />
      </div>
      <div className="button-group">
        <ButtonSuccess onClick={() => createNewContact(formData)}>
          Add Contact
        </ButtonSuccess>
        <ButtonDanger>Cacnel</ButtonDanger>
      </div>
    </Wrapper>
  );
};

const ConnectedForm = connect(() => ({}), ContactActions)(ContactForm);

export default ConnectedForm;