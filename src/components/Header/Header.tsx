import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import s from './Header.css';

export const Header = () => {
  const routeMatch = useRouteMatch('/movie/:id');
  const isMinimized = routeMatch && routeMatch.params && !!(routeMatch.params as any).id;
  return (
    <header className={`${s.header}${isMinimized ? ` ${s.isMinimized}` : ''}`}>
      <h1>
        <img src={logo} /> Movies App
      </h1>
    </header>
  );
};
