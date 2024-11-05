import { useDispatch } from 'react-redux';
import { closeMenuHamburger } from '../../core/hamburgerMenu/slices';
import style from './Notification.module.scss';

export function Notification() {
  const dispatch = useDispatch();
  return (
    <div
      className={style.notificationBox}
      onClick={() => dispatch(closeMenuHamburger())}
    >
      <span className={style.notificationCount}></span>
      <div className={style.notificationBell}>
        <span className={style.bellTop}>
          <span className={style.bellTop2}></span>
        </span>
        <span className={style.bellMiddle}>
          <span className={style.bellMiddle2}></span>
        </span>

        <span className={style.bellBottom}></span>
        <span className={style.bellRad}>
          <span className={style.bellRad2}></span>
        </span>
      </div>
    </div>
  );
}
