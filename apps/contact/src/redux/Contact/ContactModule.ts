import { IModule } from "redux-dynamic-modules";
import { ContactActions } from "./ContactActions";
import { contactReducer } from "./ContactReducer";

export interface Contact {
    id: string;
    name: string;
    phone: string;
    mail: string;
    address: string;
  }

export const ContactModule: IModule<Contact[]> = {
  id: "order",
  reducerMap: {
    contacts: contactReducer,
  } as any,
  initialActions: [ContactActions.getContacts()]
};