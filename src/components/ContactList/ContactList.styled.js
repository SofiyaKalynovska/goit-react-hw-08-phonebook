import styled from '@emotion/styled';
import { List, ListItem } from '@mui/material';

export const ContactsList = styled(List)`
padding: 10px;
`
export const ContactListItem = styled(ListItem)`
margin-bottom: 10px;
height: max-content;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid grey;

`
export const DeleteBtn = styled.button`

margin-left: 20px;
`