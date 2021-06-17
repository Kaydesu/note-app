import { Middleware } from "redux";
import {
  ModalActionUnionType,
  ModalActionTypes,
  ModalActions,
} from "./ModalActions";

const toggleWithData: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action: ModalActionUnionType) => {
    if (action.type === ModalActionTypes.OPEN_MODAL) {
      dispatch(ModalActions.toggleModal(true));
      if (!action.meta) dispatch(ModalActions.clearMeta());
      if (action.meta) dispatch(ModalActions.setMeta(action.meta));
    } else if (action.type === ModalActionTypes.CLOSE_MODAL) {
      dispatch(ModalActions.toggleModal(false));
    }
    next(action);
  };

export const ModalMiddlewares = [toggleWithData];