import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RocketList from '../components/RocketList';
import { reserveRocket, cancelReservationRocket } from '../Redux/rockets/rocketsSlice';

const mockStore = configureStore([]);

describe('RocketList', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: [],
    });
  });

  test('renders rocket details correctly', () => {
    const rocket = {
      img: 'rocket-image.jpg',
      id: '123',
      name: 'Falcon 9',
      description: 'Rocket description',
      reserved: false,
    };

    render(
      <Provider store={store}>
        <RocketList {...rocket} />
      </Provider>
    );

    expect(screen.getByAltText(rocket.name)).toBeInTheDocument();
    expect(screen.getByText(rocket.name)).toBeInTheDocument();
    expect(screen.getByText(rocket.description)).toBeInTheDocument();
    expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  });

  test('dispatches reserveRocket action when Reserve Rocket button is clicked', () => {
    const rocket = {
      img: 'rocket-image.jpg',
      id: '123',
      name: 'Falcon 9',
      description: 'Rocket description',
      reserved: false,
    };

    render(
      <Provider store={store}>
        <RocketList {...rocket} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Reserve Rocket'));

    const actions = store.getActions();
    expect(actions).toContainEqual(reserveRocket(rocket.id));
  });

  test('dispatches cancelReservationRocket action when Cancel Reservation button is clicked', () => {
    const rocket = {
      img: 'rocket-image.jpg',
      id: '123',
      name: 'Falcon 9',
      description: 'Rocket description',
      reserved: true,
    };

    render(
      <Provider store={store}>
        <RocketList {...rocket} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Cancel Reservation'));

    const actions = store.getActions();
    expect(actions).toContainEqual(cancelReservationRocket(rocket.id));
  });
});
