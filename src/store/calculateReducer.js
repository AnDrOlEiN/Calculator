import { ACTION_SAVED_NUMBER } from "@/constants/actions";

const initialState = {
  savedNumber: '',
};

export const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SAVED_NUMBER:
      return { ...state, savedNumber: action.payload};
    default:
      return state;
  }
};

export const setSavedNumber = (payload) => ({
  type: ACTION_SAVED_NUMBER,
  payload,
});
