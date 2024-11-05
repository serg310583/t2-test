import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenuHamburger } from '../../core/hamburgerMenu/slices';
// import { BellIndicator } from '../bellIndicator/bellIndicator';
import { HamburgerButton } from '../hamburgerButton/hamburgerButton';
import { LocationInfo } from '../locationInfo/LocationInfo';
import { Notification } from '../notification/Notification';
import style from './Header.module.scss';

export function Header() {
  const dispatch = useDispatch();
  return (
    <div className={style.headerWrapper}>
      <div className={style.headerLogo}>
        <Link to='/' onClick={() => dispatch(closeMenuHamburger())}>
          <picture className={style.logoImg}>
            <source
              media='(min-width: 1440px)'
              srcSet='./assets/img/Logo.png'
            />
            <source
              media='(min-width: 375px) and (max-width: 1439px)'
              srcSet='./assets/img/Logo-mobile.png'
            />
            <img src='./assets/img/Logo.png' alt='Логотип компании'></img>
          </picture>
        </Link>
      </div>
      <div className={style.infoPanel}>
        <div className={style.locationInfo}>
          <LocationInfo />
        </div>

        {/* <BellIndicator /> */}
        <div>
          <Notification />
        </div>
        <HamburgerButton />
      </div>
    </div>
  );
}
