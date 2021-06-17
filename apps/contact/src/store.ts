import { createStore, IModuleStore } from "redux-dynamic-modules";
import { Contact } from "./redux/Contact/ContactModule";
import { ModalState } from "./redux/Modal/ModalModule";

export interface StoreState {
  contacts: Contact[];
  modal: ModalState;
}

export const store: IModuleStore<StoreState> = createStore({});