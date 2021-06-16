import { CONTACT_LIST } from "../../contactList";
import { Contact } from "./ContactModule";

export enum ContactActionTypes {
  ADD_CONTACT = "Contact/Add",
  DELETE_CONTACT = "Contact/Delete",
  EDIT_CONTACT = "Contact/Edit",
  REQUEST_CONTACT = "Contact/Contact",
}

export interface RequestContactAction {
  type: ContactActionTypes.REQUEST_CONTACT;
  payload: Contact[];
}

export interface AddContactAction {
  type: ContactActionTypes.ADD_CONTACT;
  payload: Contact;
}

export interface DeleteContactAction {
  type: ContactActionTypes.DELETE_CONTACT;
  payload: string;
}

export interface EditContactAction {
  type: ContactActionTypes.EDIT_CONTACT;
  payload: Contact;
}

export type ContactActionUnion =
  | RequestContactAction
  | AddContactAction
  | DeleteContactAction
  | EditContactAction;

export const ContactActions = {
  getContacts: (): RequestContactAction => {
    return {
      type: ContactActionTypes.REQUEST_CONTACT,
      payload: CONTACT_LIST,
    };
  },
  deleteContacts: (id: string): DeleteContactAction => {
    return {
      type: ContactActionTypes.DELETE_CONTACT,
      payload: id,
    }
  }
};