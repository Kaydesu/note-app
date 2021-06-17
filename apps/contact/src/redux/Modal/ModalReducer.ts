import { ModalActionTypes, ModalActionUnionType } from "./ModalActions";
import { ModalState } from "./ModalModule";

export function modalReducer(
  state: ModalState = { visible: false, meta: null },
  action: ModalActionUnionType
): ModalState {
  switch (action.type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        visible: action.payload,
      };
    case ModalActionTypes.SET_META:
      return {
        ...state,
        meta: action.payload,
      };
    case ModalActionTypes.CLEAR_META:
      return {
        ...state,
        meta: null,
      };
    default:
      return state;
  }
}