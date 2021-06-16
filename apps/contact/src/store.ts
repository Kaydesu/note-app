import { createStore, IModuleStore } from "redux-dynamic-modules";
import { Contact } from "./redux/Contact/ContactModule";


export interface StoreState {
  contacts: Contact[],
}

export const store: IModuleStore<StoreState> = createStore({});