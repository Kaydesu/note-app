import { AddContactAction, DeleteContactAction, EditContactAction, FetchContactAction } from "./contactActions";

export enum ActionType {
    FETCH_CONTACT,
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT
}

export type AppAction = FetchContactAction | AddContactAction | DeleteContactAction | EditContactAction;