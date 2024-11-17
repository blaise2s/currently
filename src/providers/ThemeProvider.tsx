import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

const muiTheme = createTheme({});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};
