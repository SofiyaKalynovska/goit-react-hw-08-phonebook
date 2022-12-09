import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import {
  List,
  ListItem,
  ListItemIcon,
  Button,
  ListItemText,
} from '@mui/material';
import { Phone } from '@mui/icons-material';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <List
      sx={{
        [`& :hover`]: {
          fontWeight: 'bold',
        },
      }}
    >
      {visibleContacts.map(contact => (
        <ListItem
          key={contact.id}
          dense={true}
          sx={{
            boxShadow: 3,
          }}
        >
          <ListItemIcon>
            <Phone sx={{ inlineSize: 35 }} />
          </ListItemIcon>
          <ListItemText sx={{ fontSize: 26 }} disableTypography>
            {contact.name}: {contact.number}
          </ListItemText>
          <Button
            color="error"
            variant="contained"
            size="small"
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
