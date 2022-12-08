import PropTypes from 'prop-types';
import { Box, Typography, Container } from '@mui/material';

export default function Section({ title, children }) {
  return (
    <Container sx={{mt: 3}}>
      <Box
        sx={{
          backgroundColor: '#e8ebff',
          boxShadow:
            ' rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;',
          padding: 2,
        }}
      >
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        {children}
      </Box>
    </Container>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
