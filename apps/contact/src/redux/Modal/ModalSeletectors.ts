import { StoreState } from "../../store";

export const getVisibleState = (state: StoreState):boolean => {
  return state.modal.visible;
}

export const getModalMeta = (state: StoreState):object => {
  return state.modal.meta;
}