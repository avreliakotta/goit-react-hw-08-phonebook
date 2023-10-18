import { useSelector, useDispatch } from 'react-redux';
import { setFilterByName } from '../../redux/filterSlice';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const Filter = () => {
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();
  const defaultTheme = createTheme();
  const handleChange = event => {
    const name = event.target.value;
    dispatch(setFilterByName(name));
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Contacts
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            label="Find contacts by name"
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Filter;
