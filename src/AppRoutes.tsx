import React from 'react';
import { useRoutes } from 'react-router-dom';

import Decorator from './views/Decorator';
import Home from './views/Home';
import About from './views/About';
import Hello from './views/Hello';

const AppRoutes = () =>
  useRoutes([
    {
      path: '/',
      element: <Decorator />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/hello/:name', element: <Hello /> },
        { path: '/', element: <About /> },
      ],
    },
  ]);

export default AppRoutes;
