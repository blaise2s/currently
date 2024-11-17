import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { Coordinates, Location } from '../../services/locationServices';

export interface LocationContextType {
  coordinates: Coordinates | undefined;
  setCoordinates: Dispatch<SetStateAction<Coordinates | undefined>>;
  location: Location | undefined;
  setLocation: Dispatch<SetStateAction<Location | undefined>>;
  locations: Location[];
  setLocations: Dispatch<SetStateAction<Location[]>>;
  loadingCurrentLocation: boolean;
  setLoadingCurrentLocation: Dispatch<SetStateAction<boolean>>;
  locationError: Error | undefined;
  setLocationError: Dispatch<SetStateAction<Error | undefined>>;
}

export const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error(
      'useLocationContext must be used within a <LocationContextProvider />',
    );
  }
  return context;
};
