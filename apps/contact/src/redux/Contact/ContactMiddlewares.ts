import { Middleware } from "redux";
import { ContactActionUnion, ContactActionTypes } from "./ContactActions";

const idSetter: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action: ContactActionUnion) => {
    if(action.type === ContactActionTypes.ADD_CONTACT) {
      console.log("Added contact:", action.payload)
    }
    next(action);
  };

export const ContactMiddlewares = [idSetter];