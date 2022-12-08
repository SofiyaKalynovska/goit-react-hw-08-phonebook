import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const Wrapper = styled(Container)`
  padding: 20px;
  margin: auto;
  width: 300px;
  @media (min-width: 480px) {
    width: 420px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 1280px) {
    width: 1000px;
  }
`;
