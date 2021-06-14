
import { Contact, AppAction, ActionType } from "../actions";

const contactsReducer = (
    state: Contact[] = [],
    action: AppAction
) => {
    switch (action.type) {
        case ActionType.FETCH_CONTACT:
            return action.payload;
        case ActionType.DELETE_CONTACT:
            return state.filter(contact => contact.id !== action.payload)
        default:
            return state;
    }
}

    export default contactsReducer;