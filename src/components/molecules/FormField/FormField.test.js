import React from 'react';
import FormField from './FormField';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/tests/renderWithProviders';

describe('InputWithButton', () => {
  it('Renders the component', () => {
    const name = 'name';
    renderWithProviders(<FormField id={name} name={name} label="Name" />);
  });
});
