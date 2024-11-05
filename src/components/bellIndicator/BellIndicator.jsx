import { useDispatch } from 'react-redux';
import { closeMenuHamburger } from '../../core/hamburgerMenu/slices';
import style from './BellIndicator.module.scss';

export function BellIndicator() {
  const dispatch = useDispatch();
  return (
    <div
      className={style.bellIndicatorWrapper}
      onClick={() => dispatch(closeMenuHamburger())}
    >
      <img className={style.bell} src='./assets/img/bell.png' alt='bell' />
      <img
        className={style.indicator}
        src='./assets/img/inbox_indicator.png'
        alt='indicator'
      />
    </div>
  );
}
