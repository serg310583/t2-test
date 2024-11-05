import { useDispatch, useSelector } from 'react-redux';
import {
  closeMenuHamburger,
  openMenuHamburger,
} from '../../core/hamburgerMenu/slices';
import style from './hamburgerButton.module.scss';

export function HamburgerButton() {
  const dispatch = useDispatch();
  const isMenuHamburgerVisible = useSelector(
    (state) => state.menuHamburgerReducer.isMenuVisible
  );
  const srcImg = isMenuHamburgerVisible
    ? './assets/img/close.png'
    : './assets/img/Hamburger-icon.png';
  return (
    <div
      onClick={() =>
        isMenuHamburgerVisible
          ? dispatch(closeMenuHamburger())
          : dispatch(openMenuHamburger())
      }
      role='button'
      className={style.hamburgerButtonWrapper}
    >
      <img src={srcImg} alt='hamburger button' />
    </div>
  );
}
