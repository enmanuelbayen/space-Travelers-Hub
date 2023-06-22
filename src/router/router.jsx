import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Mission from '../pages/Mission';
import MyProfile from '../pages/MyProfile';
import Dragons from '../pages/Dragons';
import App from '../App';
import Navigation from '../pages/Navigation';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Navigation>
        <App />
      </Navigation>
    ),
  },
  {
    path: '/Missions',
    element: (
      <Navigation>
        <Mission />
      </Navigation>
    ),
  },
  {
    path: '/MyProfile',
    element: (
      <Navigation>
        <MyProfile />
      </Navigation>
    ),
  },
  {
    path: '/dragons',
    element: (
      <Navigation>
        <Dragons />
      </Navigation>
    ),
  },
]);

export default router;
