import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Grid2 as Grid,
  IconButton,
  Snackbar,
  SnackbarCloseReason,
  Typography,
} from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useLocationContext } from '../../providers/location/locationContext';
import { DefaultLocation } from '../../services/locationServices';
import { getWeather, WeatherData } from '../../services/weatherServices';
import { Loading } from '../common/Loading';
import { LocationInput } from './LocationInput';
import { Radar } from './Radar';
import { WeatherDisplay } from './WeatherDisplay';
import { WeatherSender } from './WeatherSender';

export const WeatherContainer = () => {
  const {
    loadingCurrentLocation,
    location,
    setLocation,
    setLocations,
    locationError,
    setLocationError,
  } = useLocationContext();

  const [weather, setWeather] = useState<WeatherData>();

  const handleSnackbarClose = (
    _event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway' || reason === 'escapeKeyDown') {
      return;
    }
    setLocationError(undefined);
  };

  useEffect(() => {
    if (location) {
      getWeather(location.lat, location.lon).then((w) => setWeather(w));
    }
  }, [location]);

  useEffect(() => {
    if (locationError) {
      setLocation(DefaultLocation);
      setLocations([DefaultLocation]);
    }
  }, [locationError, setLocation, setLocations]);

  return (
    <>
      {loadingCurrentLocation ? (
        <Box py='5rem'>
          <Loading
            additionalDetails={
              <Typography pt='1rem'>Loading weather...</Typography>
            }
          />
        </Box>
      ) : (
        <Box pb='1rem'>
          <LocationInput />
          <Grid px='1rem' container>
            <Grid container spacing={2} size={{ sm: 12, md: 6 }}>
              <WeatherDisplay weather={weather} />
              <Box width='100%' display='flex' justifyContent='center'>
                <WeatherSender weather={weather} location={location} />
              </Box>
            </Grid>
            <Grid pt='1rem' size={{ xs: 12, sm: 12, md: 6 }} minHeight='20rem'>
              <Radar location={location} />
            </Grid>
          </Grid>
        </Box>
      )}
      <Snackbar
        open={Boolean(locationError)}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={locationError?.message || 'Location is required'}
        action={
          <IconButton
            size='small'
            aria-label='close'
            color='inherit'
            onClick={handleSnackbarClose}
          >
            <CloseIcon fontSize='small' />
          </IconButton>
        }
      />
    </>
  );
};
