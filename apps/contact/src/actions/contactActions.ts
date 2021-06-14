import { CONTACT_LIST } from "../contactList"
import { ActionType } from "./type"

export interface Contact {
    id: number;
    name: string;
    phone: string;
    mail: string;
    address: string;
}

export interface FetchContactAction {
    type: ActionType.FETCH_CONTACT,
    payload: Contact[]
}

export interface AddContactAction {
    type: ActionType.ADD_CONTACT,
    payload: Contact
}

export interface DeleteContactAction {
    type: ActionType.DELETE_CONTACT,
    payload: number
}

export interface EditContactAction {
    type: ActionType.EDIT_CONTACT,
    payload: Contact
}

export const fetchActions = (): FetchContactAction => {
    return {
        type: ActionType.FETCH_CONTACT,
        payload: CONTACT_LIST
    }
}

export const deleteActions = (id: number): DeleteContactAction => {
    return {
        type: ActionType.DELETE_CONTACT,
        payload: id
    }
}