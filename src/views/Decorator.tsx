import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Decorator: FC = () => (
  <>
    <Navigation />
    <aside></aside>
    <main>
      <Outlet></Outlet>
    </main>
    <footer></footer>
  </>
);

export default Decorator;
