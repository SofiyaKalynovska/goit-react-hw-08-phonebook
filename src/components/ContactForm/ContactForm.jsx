import { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Box, Button, TextField, Typography } from '@mui/material';
import { AddBoxTwoTone } from '@mui/icons-material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(e => e.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#e8ebff',
        marginTop: '30px',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Typography
          variant="body"
          component="label"
          color="#1976d2"
          sx={{ fontSize: { xs: '20px', sm: '28px' } }}
        >
          Name
        </Typography>
        <TextField
          label="Provide name"
          variant="outlined"
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          inputProps={{ style: { fontSize: 26 } }}
        />
        <Typography
          variant="body"
          component="label"
          color="#1976d2"
          sx={{ fontSize: { xs: '20px', sm: '28px' } }}
        >
          Number
        </Typography>
        <TextField
          label="Provide number"
          variant="outlined"
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          inputProps={{ style: { fontSize: 26 } }}
        />
        <Button
          variant="contained"
          startIcon={<AddBoxTwoTone />}
          color="info"
          type="submit"
          sx={{
            m: 'auto',
            fontSize: {xs: 10, sm: 20},
            
          }}
        >
          Add contact
        </Button>
      </Form>
    </Box>
  );
};

export default ContactForm;

