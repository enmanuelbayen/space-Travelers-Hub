import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Mission from '../pages/Mission';
import Rocket from '../pages/Rocket';
import MyProfile from '../pages/MyProfile';
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
    path: '/Rockets',
    element: (
      <Navigation>
        <Rocket />
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
]);

export default router;
