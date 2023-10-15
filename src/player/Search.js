import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles";
import { MAPPED_COUNTRIES } from "../countries";

const Search = ({country, setCountry}) => (

    <Box
      component="form"
      className='search'
      noValidate
      autoComplete="off"
    >
        <div>
            <TextField
                id="countries"
                select
                label="Country"
                value={country.value}
                variant='standard'
                sx={{
                    "width": '200px',
                    "& .MuiInputBase-input": {
                        color: "#F1B4BB"
                      },
                      "& .MuiInput-underline:root": {
                        borderBottomColor: "#F1B4BB"
                      },
                      "& .MuiInputLabel-root": {
                        color: "#F1B4BB"
                      },
                    "& label.Mui-focused": {
                        color: "#F1B4BB"
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#F1B4BB"
                      },
                }}
                onChange={(e) => {
                    console.log("text field changing country:", e.target.value);
                    const country = MAPPED_COUNTRIES.find((country) => country.value === e.target.value);
                    setCountry(country);
                }}
            >
            {MAPPED_COUNTRIES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
    </Box>
  );

export default Search;
