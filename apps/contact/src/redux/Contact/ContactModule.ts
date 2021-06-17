import { IModule } from "redux-dynamic-modules";
import { ModalMiddlewares } from "../Modal/ModalMiddlewares";
import { modalReducer } from "../Modal/ModalReducer";
import { ContactActions } from "./ContactActions";
import { ContactMiddlewares } from "./ContactMiddlewares";
import { contactReducer } from "./ContactReducer";

export interface Contact {
  id?: string;
  name: string;
  phone: string;
  mail: string;
  address: string;
}

export const ContactModule: IModule<Contact[]> = {
  id: "order",
  reducerMap: {
    contacts: contactReducer,
    modal: modalReducer,
  } as any,
  initialActions: [ContactActions.getContacts()],
  middlewares: [...ContactMiddlewares, ...ModalMiddlewares],
};