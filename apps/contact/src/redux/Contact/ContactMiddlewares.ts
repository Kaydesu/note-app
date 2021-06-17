import { Middleware } from "redux";
import {
  ContactActionUnion,
  ContactActionTypes,
  ContactActions,
} from "./ContactActions";
import { v4 as uuidv4 } from "uuid";
import { ModalActions } from "../Modal/ModalActions";

const formatNewContact: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action: ContactActionUnion) => {
    if (action.type === ContactActionTypes.NEW_CONTACT) {
      if (!action.payload.id) {
        let newContact = {
          ...action.payload,
          id: uuidv4(),
        };
        dispatch(ContactActions.addContact(newContact));
      } else {
        dispatch(ContactActions.editContact(action.payload));
      }
      dispatch(ModalActions.closeModal());
    }
    next(action);
  };

export const ContactMiddlewares = [formatNewContact];