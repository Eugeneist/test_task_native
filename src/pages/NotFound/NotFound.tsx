import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import AlertTitle from '@mui/material/AlertTitle';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';

const NotFound = () => {
  return (
    <Container
      sx={{ maxWidth: '2000px', textAlign: 'center', gap: '25px' }}
      className="container__game"
    >
      <Alert severity="error">
        <AlertTitle>Error, 404!</AlertTitle>
        Sorry, page is not found!
      </Alert>
      <Box>
        <Typography variant="body1">To Homepage:</Typography>
        <IconButton aria-label="delete" component={Link} to="/">
          <CottageRoundedIcon color="warning" fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default NotFound;
