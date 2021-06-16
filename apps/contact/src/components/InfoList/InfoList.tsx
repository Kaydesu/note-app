import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ButtonDanger, ButtonSuccess } from "../Buttons";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";
import { CardList, CardItem } from "./Styled";
import { Contact } from "../../redux/Contact/ContactModule";
import { StoreState } from "../../store";
import { ContactActions } from "../../redux/Contact/ContactActions";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { ContactModule } from "../../redux/Contact/ContactModule";

interface InfoListProps {
  contacts: Contact[];
  getContacts();
  deleteContacts(id: string);
}

const InfoList: React.FC<InfoListProps> = ({
  contacts,
  getContacts,
  deleteContacts,
}) => {
  return (
    <CardList>
      {contacts.map((cardItem) => {
        return (
          <CardItem key={cardItem.id}>
            <div className="card-item__header">
              <div className="card-item__header-title">{cardItem.name}</div>
              <div className="card-item__header-actions">
                <ButtonSuccess>
                  {" "}
                  Edit <img src={EditIcon} alt="" />{" "}
                </ButtonSuccess>
                <ButtonDanger onClick={() => deleteContacts(cardItem.id)}>
                  {" "}
                  Delete <img src={TrashIcon} alt="" />
                </ButtonDanger>
              </div>
            </div>
            <div className="card-item__body">
              <div className="card-item-info">Phone: {cardItem.phone}</div>
              <div className="card-item-info">Email: {cardItem.mail}</div>
              <div className="card-item-info">Address: {cardItem.address}</div>
            </div>
          </CardItem>
        );
      })}
    </CardList>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    contacts: state.contacts,
  };
};

const ConnectedInfoList = connect(mapStateToProps, ContactActions)(InfoList);

const DynamicInfoList = () => (
  <DynamicModuleLoader modules={[ContactModule]}>
    <ConnectedInfoList />
  </DynamicModuleLoader>
);
export default DynamicInfoList;