import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeMenuHamburger } from '../../core/hamburgerMenu/slices';
import links from '../../router/links';
import { LocationInfo } from '../locationInfo/LocationInfo';
import style from './HeaderMenu.module.scss';

export function HeaderMenu() {
  const dispatch = useDispatch();
  const menuItems = [
    {
      id: 1,
      title: 'Преимущества Tele2',
      link: links.advantages,
    },
    {
      id: 2,
      title: 'Тарифы',
      link: 'rates',
    },
    {
      id: 3,
      title: 'Акции и спецпредложения',
      link: 'sales',
    },
    {
      id: 4,
      title: 'Промотариф Tele2',
      link: 'promoRate',
    },
    {
      id: 5,
      title: 'Технология eSIM',
      link: 'eSim',
    },
    {
      id: 6,
      title: 'Подключение нового абонента',
      link: 'addNewSubscriber',
    },
  ];
  const isMenuHamburgerVisible = useSelector(
    (state) => state.menuHamburgerReducer.isMenuVisible
  );

  const activeMenu =
    isMenuHamburgerVisible == true
      ? style.containerMenuActive
      : style.containerMenu;

  return (
    <div className={`${activeMenu}`}>
      <nav className={style.menuWrapper}>
        <ul className={style.menu}>
          {menuItems.map((item) => (
            <li className={style.menuItem} key={item.id}>
              <Link
                className={style.menuLink}
                to={item.link}
                onClick={() => dispatch(closeMenuHamburger())}
              >
                {' '}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={style.locationInfo}>
        <LocationInfo />
      </div>
    </div>
  );
}
