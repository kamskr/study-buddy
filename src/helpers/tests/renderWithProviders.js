import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from 'assets/styles/theme';
import UsersProvider from '../../providers/UsersProvider';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <UsersProvider>{children}</UsersProvider>
    </ThemeProvider>
  );
};
