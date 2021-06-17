import { CONTACT_LIST } from "../../contactList";
import { Contact } from "./ContactModule";

export enum ContactActionTypes {
  ADD_CONTACT = "Contact/Add",
  NEW_CONTACT = "Contact/New",
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

export interface NewContactACtion {
  type: ContactActionTypes.NEW_CONTACT;
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
  | NewContactACtion
  | DeleteContactAction
  | EditContactAction;

export const ContactActions = {
  createNewContact: (contact: Contact): NewContactACtion => {
    return {
      type: ContactActionTypes.NEW_CONTACT,
      payload: contact,
    };
  },
  addContact: (contact: Contact): AddContactAction => {
    return {
      type: ContactActionTypes.ADD_CONTACT,
      payload: contact,
    };
  },
  editContact: (contact: Contact): EditContactAction => {
    return {
      type: ContactActionTypes.EDIT_CONTACT,
      payload: contact,
    };
  },
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
    };
  },
};