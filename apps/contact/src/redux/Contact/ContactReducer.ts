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
    case ContactActionTypes.DELETE_CONTACT:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}