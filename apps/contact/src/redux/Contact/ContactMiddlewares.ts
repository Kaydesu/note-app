import { Middleware } from "redux";
import { ContactActionUnion, ContactActionTypes, ContactActions } from "./ContactActions";
import { v4 as uuidv4 } from 'uuid';

const formatNewContact: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action: ContactActionUnion) => {
    if(action.type === ContactActionTypes.NEW_CONTACT) {
      let newContact = {
        ...action.payload,
        id: uuidv4()
      }
      dispatch(ContactActions.addContact(newContact));
    }
    next(action);
  };

export const ContactMiddlewares = [formatNewContact];