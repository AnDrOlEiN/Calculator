import { ACTION_SET_THEME } from "@/constants/actions";
import { lightTheme } from "@/constants/themes";

const initialState = {
  theme: lightTheme,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_THEME:
      return { ...state, theme: action.payload};
    default:
      return state;
  }
};

export const setTheme = (payload) => ({
  type: ACTION_SET_THEME,
  payload,
});
