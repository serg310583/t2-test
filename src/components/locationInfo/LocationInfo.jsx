import style from './LocationInfo.module.scss';

export function LocationInfo() {
  return (
    <div className={style.locationWrapper}>
      <img src='./assets/img/location.png' alt='location' />
      <a href='#' className={style.locationTitle}>
        Москва и область
      </a>
    </div>
  );
}
