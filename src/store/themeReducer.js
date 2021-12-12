import { ACTION_SET_THEME } from "@/constants/actions";
import { THEME_MODE } from "@/constants/themes";

const themeFromLocalStorage = sessionStorage.getItem('theme');

const initialState = {
  theme: themeFromLocalStorage || THEME_MODE.DARK,
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
