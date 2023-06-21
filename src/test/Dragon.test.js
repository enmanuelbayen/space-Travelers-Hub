/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Dragon from '../components/Dragon';
import { cancelReservation, joinMission } from '../Redux/dragons/dragonsSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Dragon Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Dragon component with correct props', () => {
    const dragonProps = {
      id: '1',
      name: 'Dragon 1',
      type: 'Type 1',
      image: 'dragon1.jpg',
      reserved: true,
    };

    render(<Dragon {...dragonProps} />);

    expect(screen.getByText('Dragon 1')).toBeInTheDocument();
    expect(screen.getByText('Type 1')).toBeInTheDocument();
    expect(screen.getByAltText('Dragon 1')).toBeInTheDocument();
    expect(screen.getByText('Cancel Reservation')).toBeInTheDocument();
    expect(screen.queryByText('Reserve Dragon')).not.toBeInTheDocument();
  });

  it('should dispatch cancelReservation action when reserved and button is clicked', () => {
    const dragonProps = {
      id: '1',
      name: 'Dragon 1',
      type: 'Type 1',
      image: 'dragon1.jpg',
      reserved: true,
    };

    render(<Dragon {...dragonProps} />);

    const cancelButton = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelButton);

    expect(mockDispatch).toHaveBeenCalledWith(cancelReservation('1'));
  });

  it('should dispatch joinMission action when not reserved and button is clicked', () => {
    const dragonProps = {
      id: '1',
      name: 'Dragon 1',
      type: 'Type 1',
      image: 'dragon1.jpg',
      reserved: false,
    };

    render(<Dragon {...dragonProps} />);

    const reserveButton = screen.getByText('Reserve Dragon');
    fireEvent.click(reserveButton);

    expect(mockDispatch).toHaveBeenCalledWith(joinMission('1'));
  });
});
