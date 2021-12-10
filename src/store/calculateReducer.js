import { ACTION_SAVED_EXPRESSION, ACTION_SAVED_NUMBER } from "@/constants/actions";

const initialState = {
  savedExpression: [],
  savedNumber: '',
};

export const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SAVED_EXPRESSION:
      return { ...state, savedExpression: [...state.savedExpression, action.payload] };
    case ACTION_SAVED_NUMBER:
      return { ...state, savedNumber: action.payload};
    default:
      return state;
  }
};


export const setSavedExpression = (payload) => ({
  type: ACTION_SAVED_EXPRESSION,
  payload,
});

export const setSavedNumber = (payload) => ({
  type: ACTION_SAVED_NUMBER,
  payload,
});
