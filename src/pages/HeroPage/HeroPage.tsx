import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useGameLogic } from '../../hooks';
import '../../index.css';

const HeroPage = () => {
  const { isGameOver, setCurrentPlayer, currentPlayer } = useGameLogic();

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
              <Switch
                checked={currentPlayer === 2}
                onChange={() => setCurrentPlayer(currentPlayer === 1 ? 2 : 1)}
                color="primary"
                name="player-switch"
                inputProps={{ 'aria-label': 'Player Switch' }}
              />
              <Typography
                sx={{ padding: '0' }}
                variant="body1"
                component="span"
              >
                {currentPlayer === 1 ? 'Human' : 'AI'}
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
