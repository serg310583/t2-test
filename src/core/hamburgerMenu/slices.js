import { createSlice } from '@reduxjs/toolkit';

export const menuHamburgerSlice = createSlice({
  name: 'menuHamburger',
  initialState: {
    isMenuVisible: false,
  },
  reducers: {
    openMenuHamburger: (state) => {
      state.isMenuVisible = true;
    },
    closeMenuHamburger: (state) => {
      state.isMenuVisible = false;
    },
  },
});

export const { openMenuHamburger, closeMenuHamburger } =
  menuHamburgerSlice.actions;

export default menuHamburgerSlice.reducer;
