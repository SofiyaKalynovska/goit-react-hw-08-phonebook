import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filtersSlice';
import { Typography, TextField, Box } from '@mui/material';
import { Form } from 'components/ContactForm/ContactForm.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = e => {
    e.preventDefault();
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <Box
      sx={{
        backgroundColor: '#e8ebff',
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Form>
        <Typography
          variant="body"
          component="label"
          color="#1976d2"
          sx={{ fontSize: { xs: '20px', sm: '28px' } }}
        >
          Find contacts by name
        </Typography>
        <TextField
          fullWidth
          label="Start typing..."
          variant="outlined"
          type="search"
          fontSize="40"
          name="filter"
          value={filter}
          onChange={handleFilter}
          inputProps={{ style: { fontSize: 24 } }}
        />
      </Form>
    </Box>
  );
};

export default Filter;
