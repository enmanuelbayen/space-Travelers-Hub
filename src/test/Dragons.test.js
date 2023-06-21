import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Dragons from '../pages/Dragons';

const mockStore = configureStore([]);

describe('Dragons Component', () => {
  it('should match the snapshot', () => {
    const store = mockStore({
      dragons: {
        dragons: [
          {
            id: '1', name: 'Dragon 1', type: 'Type 1', flickr_images: ['image1'], reserved: false,
          },
          {
            id: '2', name: 'Dragon 2', type: 'Type 2', flickr_images: ['image2'], reserved: true,
          },
        ],
        status: 'succeeded',
        error: null,
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
