import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const SearchBar = ({ updateLocation }) => {
  const [options, setOptions] = useState();

  const updateOptions = (newInput) => {
    //fetch(`http://localhost:8010/proxy/api/location/search/?query=${newInput}`)
    fetch(`http://www.metaweather.com/api/location/search/?query=${newInput}`)
      .then(res => res.json())
      .then(data => setOptions(data))
  }

  return (
    <Autocomplete
      style={{ height: '100%' }}
      fullWidth
      options={options ? options : []}
      getOptionLabel={option => option.title}
      renderInput={params => (
        <TextField
          {...params}
          label="Select a Location"
          variant="outlined"
          onChange={(event, value) => updateOptions(event.target.value)}
        />
      )}
      onChange={(event, value) => updateLocation(value)}
    />
  );
}
export default SearchBar;
