import axios from 'axios';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  id: string;
  displayName: string;
  lat: string | number;
  lon: string | number;
}

export const DefaultLocation: Location = {
  id: '313430382',
  displayName:
    'Brentwood, Williamson County, Middle Tennessee, Tennessee, 37027, USA',
  lat: 36.0325687,
  lon: -86.7825235,
};

export const getCurrentLocationCoordinates = () => {
  return new Promise<Coordinates>((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => reject(error),
      );
    }
  });
};

interface LocationResponse {
  place_id: string;
  display_name: string;
  lat: string;
  lon: string;
}

export const getLocationFromCoordinates = async (
  coordinates: Coordinates,
): Promise<Location> => {
  return axios
    .get<LocationResponse>('https://us1.locationiq.com/v1/reverse', {
      params: {
        key: import.meta.env.VITE_LOCATION_IQ_API_KEY || '',
        format: 'json',
        lat: coordinates.latitude,
        lon: coordinates.longitude,
      },
    })
    .then((response) => {
      const data = response.data;
      return {
        id: data.place_id,
        displayName: data.display_name,
        lat: data.lat,
        lon: data.lon,
      };
    });
};

export const getLocationsFromQuery = async (
  query: string,
): Promise<Location[]> => {
  return axios
    .get<LocationResponse[]>('https://us1.locationiq.com/v1/search', {
      params: {
        key: import.meta.env.VITE_LOCATION_IQ_API_KEY || '',
        format: 'json',
        normalizeaddress: 1,
        q: query,
      },
    })
    .then((response) => {
      const data = response.data;
      return data.map<Location>((location) => {
        const { display_name, lat, lon } = location;
        return { id: location.place_id, displayName: display_name, lat, lon };
      });
    });
};
