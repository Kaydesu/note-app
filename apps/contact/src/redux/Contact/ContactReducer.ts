import { Contact } from "./ContactModule";
import { ContactActionTypes, ContactActionUnion } from "./ContactActions";

export function contactReducer(
  state: Contact[] = [],
  action: ContactActionUnion
): Contact[] {
  switch (action.type) {
    case ContactActionTypes.REQUEST_CONTACT:
      return action.payload;
    case ContactActionTypes.ADD_CONTACT:
      let newContactList = [...state];
      newContactList.unshift(action.payload);
      return newContactList;
    case ContactActionTypes.EDIT_CONTACT:
      newContactList = [...state];
      newContactList.map((contact) => {
        if (contact.id === action.payload.id) {
          contact.address = action.payload.address;
          contact.name = action.payload.name;
          contact.phone = action.payload.phone;
          contact.mail = action.payload.mail;
        }
      });
      return newContactList;
    case ContactActionTypes.DELETE_CONTACT:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}