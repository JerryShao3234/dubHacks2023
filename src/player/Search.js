import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from "@mui/styles";


const countries = [
    {
      value: 'CAN',
      label: 'Canada',
    },
    {
      value: 'USD',
      label: 'United States',
    },
    {
      value: 'UK',
      label: 'United Kingdom',
    },
];

const Search = () => (

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
                defaultValue="CAN"
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
            >
            {countries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
    </Box>
  );

export default Search;
