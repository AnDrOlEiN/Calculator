import { ACTION_ADD_EXPRESSION, ACTION_CLEAR_EXPRESSION, ACTION_SAVED_NUMBER } from "@/constants/actions";

const initialState = {
  expressions: [],
  savedNumber: '', // удалить
};

export const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ADD_EXPRESSION:
      return { ...state, expressions: [...state.expressions, action.payload] };
    case ACTION_CLEAR_EXPRESSION:
      return { ...state, expressions: action.payload };
    case ACTION_SAVED_NUMBER:
      return { ...state, savedNumber: action.payload};
    default:
      return state;
  }
};


export const addExpression = (payload) => ({
  type: ACTION_ADD_EXPRESSION,
  payload,
});

export const clearExpression = (payload) => ({
  type: ACTION_CLEAR_EXPRESSION,
  payload,
});

export const setSavedNumber = (payload) => ({
  type: ACTION_SAVED_NUMBER,
  payload,
});
