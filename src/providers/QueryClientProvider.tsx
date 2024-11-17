import { ReactNode } from 'react';
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from 'react-query';

const reactQueryClient = new QueryClient();

interface QueryClientProviderProps {
  children: ReactNode;
}

export const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  return (
    <ReactQueryClientProvider client={reactQueryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};
