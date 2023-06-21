import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from './Mission';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Missions', () => {
  let store;
  let missions;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: 'mission001',
            mission_name: 'Mission 1',
            description: 'Mission 1 description',
            reserved: false,
          },
          {
            mission_id: 'mission002',
            mission_name: 'Mission 2',
            description: 'Mission 2 description',
            reserved: true,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });

    missions = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
  });

  it('should dispatch joinMission action when joined button is clicked on a non-reserved mission', () => {
    const { getByText } = missions;

    fireEvent.click(getByText('Join Mission'));

    expect(store.getActions()).toEqual([
      {
        type: 'missions/joinMission',
        payload: 'mission001',
      },
    ]);
  });

  it('should dispatch cancelReservation action when leave button is clicked on a reserved mission', () => {
    const { getByText } = missions;

    fireEvent.click(getByText('Leave Mission'));

    expect(store.getActions()).toEqual([
      {
        type: 'missions/cancelReservation',
        payload: 'mission002',
      },
    ]);
  });
});
