import { Box, Button, TextField } from '@mui/material';
import { ChangeEventHandler, useState } from 'react';
import { Location } from '../../services/locationServices';
import { sendSMS } from '../../services/twilioServices';
import { WeatherData } from '../../services/weatherServices';

interface WeatherSenderProps {
  location?: Location;
  weather?: WeatherData;
}

export const WeatherSender = ({ location, weather }: WeatherSenderProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validNumber, setValidNumber] = useState(false);

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const value = event.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
      setValidNumber(value.length === 10);
    }
  };

  const sendWeather = () => {
    if (validNumber && weather && location) {
      sendSMS(
        phoneNumber,
        `Currently in ${location.displayName}, it's ${weather.weather[0].main} with a temperature of ${weather.main.temp} °F and feels like ${weather.main.feels_like} °F.`,
      ).then(() => {
        setPhoneNumber('');
        setValidNumber(false);
      });
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }} columnGap='1rem'>
      <TextField
        label='Phone Number'
        variant='outlined'
        value={phoneNumber}
        onChange={handleChange}
        slotProps={{
          htmlInput: {
            maxLength: 10,
          },
        }}
        placeholder='10-digit number'
      />
      <Button
        variant='contained'
        onClick={sendWeather}
        disabled={!validNumber || !location || !weather}
      >
        Send Weather
      </Button>
    </Box>
  );
};
