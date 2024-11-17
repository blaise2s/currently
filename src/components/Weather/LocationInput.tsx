import { Autocomplete, TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import { SyntheticEvent } from 'react';
import { useLocationContext } from '../../providers/location/locationContext';
import {
  getLocationsFromQuery,
  Location,
} from '../../services/locationServices';

export const LocationInput = () => {
  const { location, setLocation, locations, setLocations } =
    useLocationContext();

  const handleLocationChange = (
    _event: SyntheticEvent,
    loc: Location | null,
  ) => {
    if (loc) {
      setLocation(loc);
    }
  };

  const handleLocationSearch = async (
    _event: SyntheticEvent,
    value: string,
  ) => {
    if (value !== location?.displayName && value.length > 2) {
      const locs = await getLocationsFromQuery(value);
      setLocations(locs);
    }
  };

  return (
    <Autocomplete
      options={locations}
      value={location}
      getOptionKey={(option) => option.id}
      getOptionLabel={(option) => option.displayName}
      onChange={handleLocationChange}
      onInputChange={debounce(handleLocationSearch, 300)}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          placeholder='Search for a city...'
        />
      )}
    />
  );
};
