import axios from 'axios';

interface Coordinates {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const getWeather = async (
  latitude: string | number,
  longitude: string | number,
): Promise<WeatherData> => {
  return axios
    .get<WeatherData>('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        appid: import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY || '',
        units: 'imperial',
        lat: latitude,
        lon: longitude,
      },
    })
    .then((response) => response.data);
};

type IconSize = 'medium' | 'large';
export const getWeatherIconUrl = (
  iconCode: string,
  size: IconSize = 'large',
) => {
  const iconSize = size === 'large' ? '@2x' : '';
  return `https://openweathermap.org/img/wn/${iconCode}${iconSize}.png`;
};
