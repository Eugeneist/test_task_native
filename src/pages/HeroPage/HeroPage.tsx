import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useGameLogic } from '../../hooks';
import '../../index.css';

const HeroPage = () => {
  const { isGameOver, isPlayerFirst, setPlayerFirst } = useGameLogic();

  return (
    <Container className="container" maxWidth="xl">
      <Box className="container__inner">
        <Typography
          variant="h1"
          component="div"
          color="#ed6c02"
          sx={{ WebkitTextStroke: '1px #ed6c02' }}
        >
          Match Game
        </Typography>
        {!isGameOver && (
          <Box className="container__box">
            <Typography variant="h6" component="div">
              Choose the first player:
            </Typography>
            <Box>
              <Typography
                sx={{ padding: '0' }}
                variant="body1"
                component="span"
              >
                AI
              </Typography>
              <Switch
                checked={isPlayerFirst}
                onChange={() => setPlayerFirst(!isPlayerFirst)}
                color="primary"
                name="player-switch"
                inputProps={{ 'aria-label': 'Player Switch' }}
              />
              <Typography
                sx={{ padding: '0' }}
                variant="body1"
                component="span"
              >
                Human
              </Typography>
            </Box>
          </Box>
        )}
        <Button component={Link} to="/game" color="warning" variant="contained">
          Play
        </Button>
      </Box>
    </Container>
  );
};

export default HeroPage;
