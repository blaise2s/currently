import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { getWeatherIconUrl, WeatherData } from '../../services/weatherServices';

const Sizing = { xs: 6, sm: 4, md: 4, lg: 3 };

interface DataPointProps {
  label: string;
  value: ReactNode;
}
const DataPoint = ({ label, value }: DataPointProps) => {
  return (
    <Grid
      size={Sizing}
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <Typography component='h2' fontWeight='700'>
        {label}
      </Typography>
      <Typography component='span'>{value}</Typography>
    </Grid>
  );
};

interface WeatherDisplayProps {
  weather?: WeatherData;
}

export const WeatherDisplay = ({ weather }: WeatherDisplayProps) => {
  if (!weather) {
    return;
  }

  const mainWeather = weather.weather[0];

  return (
    <Grid container alignItems='center' spacing={2}>
      <Grid size={Sizing} display='flex' justifyContent='center'>
        <img
          src={getWeatherIconUrl(mainWeather.icon)}
          alt={mainWeather.description}
        />
      </Grid>
      <DataPoint label='Conditions' value={mainWeather.main} />
      <DataPoint label='Temperature' value={`${weather.main.temp} °F`} />
      <DataPoint label='Feels Like' value={`${weather.main.feels_like} °F`} />
      <DataPoint label='High' value={`${weather.main.temp_max} °F`} />
      <DataPoint label='Low' value={`${weather.main.temp_min} °F`} />
      <DataPoint label='Humidity' value={`${weather.main.humidity} %`} />
      <DataPoint
        label='Wind'
        value={
          <Box component='span'>
            <Box
              component='span'
              pr='0.25rem'
            >{`${weather.wind.speed} mph`}</Box>
            <ArrowDownwardIcon
              sx={{ transform: `rotate(${weather.wind.deg}deg)` }}
            />
          </Box>
        }
      />
    </Grid>
  );
};
