import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import CustomPopUPPaper from './CustomPopUpPaper';
const apiUrl = import.meta.env.VITE_API_URL;
import { hoverEffect } from '../sharedStyles';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

// component for autosuggest searchbar

const SearchBar = ({ onStationSelect }) => {
  const [stations, setStations] = useState([]);

  const theme = useTheme();

  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch(`${apiUrl}/api/stations`);
      const data = await response.json();
      setStations(data.sort((a, b) => a.station_name.localeCompare(b.station_name)));
    };

    fetchStations();
  }, []);

  return (
    <Autocomplete
      options={stations}
      getOptionLabel={(option) => option.station_name}

      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.station_name, inputValue, {
          insideWords: true,
          findAllOccurrences: true
        });
        const parts = parse(option.station_name, matches);

        return (
          <li {...props} key={option.id}>
            <div>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}


      PaperComponent={CustomPopUPPaper}
      ListboxProps={{
        sx: {
          '& .MuiAutocomplete-option': hoverEffect(theme), // Apply hover effect to each option
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            borderRadius: theme.custom.borderRadius.medium,
            backgroundColor: 'white',
            '& .MuiOutlinedInput-root': {
              borderRadius: theme.custom.borderRadius.medium
            }
          }}
          placeholder="Search stations by name"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                {params.InputProps.startAdornment}
                <SearchIcon style={{ color: theme.custom.colors.middleGreyInfoElement }} />
              </>
            ),
          }}
        />
      )}
      onChange={(event, value) => onStationSelect(value.id)}

    />
  );
};

SearchBar.propTypes = {
  onStationSelect: PropTypes.func.isRequired,
};



export default SearchBar;
