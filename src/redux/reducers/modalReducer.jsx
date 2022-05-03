import { SHOW_MODAL, CLOSE_MODAL } from '../types/authTypes';

const initialState = {
  show: false,
  modalType: null,
  meta: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        modalType: action.modalType,
        meta: action.meta,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
