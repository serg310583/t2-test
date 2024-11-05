import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { HeaderMenu } from '../components/headerMenu/HeaderMenu';
import style from './Layout.module.scss';

export function Layout() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header />
        <HeaderMenu />
      </header>

      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  );
}
