import { Box, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';

interface LoadingProps {
  additionalDetails?: ReactNode;
}

export const Loading = ({ additionalDetails }: LoadingProps) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
      {additionalDetails}
    </Box>
  );
};
