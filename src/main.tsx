import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';
import { LocationContextProvider } from './providers/location/LocationContextProvider.tsx';
import { QueryClientProvider } from './providers/QueryClientProvider.tsx';
import { ThemeProvider } from './providers/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider>
        <LocationContextProvider>
          <App />
        </LocationContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>,
);
