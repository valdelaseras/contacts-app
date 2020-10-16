import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: FC = () => (
  <nav>
    <NavLink to="/" end={true}>
      Home
    </NavLink>{' '}
    <NavLink to="/" end={true}>
      About
    </NavLink>{' '}
    <NavLink to="/hello/:name" end={true}>
      Hello
    </NavLink>
  </nav>
);

export default Navigation;
