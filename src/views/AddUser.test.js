import React from 'react';
import AddUser from './AddUser';
import { renderWithProviders } from 'helpers/tests/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Kamil' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '80%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.7' } });
    fireEvent.click(screen.getByText('Add'));

    screen.getByText('Kamil');
  });
});
