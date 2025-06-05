import { createSlice } from '@reduxjs/toolkit';

type TTheme = 'dark' | 'light';

const initialState: {
  theme: TTheme;
  menu: {
    isOpen: boolean;
  };
} = {
  theme:
    typeof window === 'undefined'
      ? 'dark'
      : (localStorage?.getItem?.('theme') as 'dark' | 'light') ||
        (window?.matchMedia?.('(prefers-color-scheme: dark)') ? 'dark' : 'light'),
  menu: {
    isOpen: false
  }
};

export const userSettingSlice = createSlice({
  name: 'userSetting',
  initialState: initialState,
  reducers: {
    changeTheme(state, action: { payload: TTheme }) {
      localStorage.setItem('theme', action.payload);
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (action.payload === 'dark' || (!action.payload && systemPreference)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      state.theme = action.payload;
    },
    openMenu(state) {
      state.menu.isOpen = true;
    },
    closeMenu(state) {
      state.menu.isOpen = false;
    }
  }
});

export const { changeTheme, closeMenu, openMenu } = userSettingSlice.actions;

export default userSettingSlice.reducer;
