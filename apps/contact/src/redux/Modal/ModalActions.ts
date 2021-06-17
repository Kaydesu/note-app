export enum ModalActionTypes {
    TOGGLE_MODAL = "Modal/Toggle",
    OPEN_MODAL = "Modal/Open",
    CLOSE_MODAL = "Modal/Close",
    SET_META = "Modal/Set Meta",
    CLEAR_META = "Modal/Close Meta",
}

export interface OpenModalActionType {
    type: ModalActionTypes.OPEN_MODAL;
    meta?: object;
}

export interface CloseModalActionType {
    type: ModalActionTypes.CLOSE_MODAL;
}

export interface ToggleModalACtionType {
    type: ModalActionTypes.TOGGLE_MODAL;
    payload: boolean;
    meta?: object;
}

export interface SetMetaActionType {
    type: ModalActionTypes.SET_META;
    payload: {};
}

export interface ClearMetaActionType {
    type: ModalActionTypes.CLEAR_META;
}

export type ModalActionUnionType =
    | OpenModalActionType
    | CloseModalActionType
    | ToggleModalACtionType
    | SetMetaActionType
    | ClearMetaActionType;

export const ModalActions = {
    openModal: (meta?: object): OpenModalActionType => {
        return {
            type: ModalActionTypes.OPEN_MODAL,
            meta: meta,
        };
    },
    closeModal: (): CloseModalActionType => {
        return {
            type: ModalActionTypes.CLOSE_MODAL
        }
    },
    toggleModal: (visible: boolean): ToggleModalACtionType => {
        return {
            type: ModalActionTypes.TOGGLE_MODAL,
            payload: visible
        }
    },
    setMeta: (meta: object): SetMetaActionType => {
        return {
            type: ModalActionTypes.SET_META,
            payload: meta
        }
    },
    clearMeta: (): ClearMetaActionType => {
        return {
            type: ModalActionTypes.CLEAR_META,
        }
    }
};