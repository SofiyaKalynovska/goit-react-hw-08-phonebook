// import { FilterTitle, FilterInput } from './Filter.styled';
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
        <Typography variant="body" component="label" color="#1976d2">
          Find contacts by name
        </Typography>
        {/* <FilterTitle>Find contacts by name</FilterTitle> */}
        <TextField
          fullWidth="true"
          label="Start typing..."
          variant="outlined"
          type="search"
          fontSize="40"
          name="filter"
          value={filter}
          onChange={handleFilter}
          inputProps={{ style: { fontSize: 20 } }}
        />
        {/* <FilterInput
        type="search"
        name="filter"
        value={filter}
        onChange={handleFilter}
      /> */}
      </Form>
    </Box>
  );
};

export default Filter;
