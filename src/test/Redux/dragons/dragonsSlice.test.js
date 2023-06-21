import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Dragons from '../../../pages/Dragons';
import { fetchDragons } from '../../../Redux/dragons/dragonsSlice';

const mockStore = configureStore([thunk]);

const mockState = {
  dragons: {
    dragons: [
      {
        id: '1',
        name: 'Dragon 1',
        type: 'Type 1',
        flickr_images: ['image1'],
      },
      {
        id: '2',
        name: 'Dragon 2',
        type: 'Type 2',
        flickr_images: ['image2'],
      },
    ],
    status: 'succeeded',
    error: null,
  },
};

describe('Dragons Page', () => {
  it('should fetch and display dragons', async () => {
    const store = mockStore(mockState);

    await store.dispatch(fetchDragons());

    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    expect(screen.getByText('Dragon 1')).toBeInTheDocument();
    expect(screen.getByText('Dragon 2')).toBeInTheDocument();

    expect(screen.getByText('Type 1')).toBeInTheDocument();
    expect(screen.getByText('Type 2')).toBeInTheDocument();

    expect(screen.getByAltText('Dragon 1')).toBeInTheDocument();
    expect(screen.getByAltText('Dragon 2')).toBeInTheDocument();

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.queryByText('Error')).not.toBeInTheDocument();
  });

  it('should render error message on failed fetch', async () => {
    const store = mockStore({
      dragons: {
        dragons: [],
        status: 'failed',
        error: 'Failed to fetch dragons.',
      },
    });

    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );

    expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    expect(screen.getByText('Failed to fetch dragons.')).toBeInTheDocument();
    expect(screen.queryByAltText('Dragon')).not.toBeInTheDocument();
  });
});
