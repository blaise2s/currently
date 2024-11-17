import { ReactNode, useEffect, useState } from 'react';
import {
  Coordinates,
  getCurrentLocationCoordinates,
  getLocationFromCoordinates,
  Location,
} from '../../services/locationServices';
import { LocationContext, LocationContextType } from './locationContext';

interface LocationContextProviderProps {
  children: ReactNode;
}

export const LocationContextProvider = ({
  children,
}: LocationContextProviderProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates>();
  const [location, setLocation] = useState<Location>();
  const [locations, setLocations] = useState<Location[]>([]);
  const [loadingCurrentLocation, setLoadingCurrentLocation] = useState(true);
  const [locationError, setLocationError] = useState<Error>();

  useEffect(() => {
    getCurrentLocationCoordinates()
      .then((coords) => {
        setCoordinates(coords);
        return getLocationFromCoordinates(coords);
      })
      .then((loc) => {
        setLocation(loc);
        setLocations([loc]);
      })
      .catch((error) => setLocationError(error as Error))
      .finally(() => setLoadingCurrentLocation(false));
  }, []);

  const locationContext: LocationContextType = {
    coordinates,
    setCoordinates,
    location,
    setLocation,
    locations,
    setLocations,
    loadingCurrentLocation,
    setLoadingCurrentLocation,
    locationError,
    setLocationError,
  };

  return (
    <LocationContext.Provider value={locationContext}>
      {children}
    </LocationContext.Provider>
  );
};
