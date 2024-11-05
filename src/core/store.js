import { configureStore } from '@reduxjs/toolkit';
import menuHamburgerReducer from './hamburgerMenu/slices';

export const store = configureStore({
  reducer: {
    menuHamburgerReducer: menuHamburgerReducer,
  },
});
