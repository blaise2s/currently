import { Box, Divider } from '@mui/material';
import { HeadlinesContainer } from './components/Headlines/HeadlinesContainer';
import { WeatherContainer } from './components/Weather/WeatherContainer';

export const App = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
      }}
    >
      <WeatherContainer />
      <Divider />
      <HeadlinesContainer />
    </Box>
  );
};
