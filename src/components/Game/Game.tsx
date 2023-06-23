import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import { Link } from 'react-router-dom';
import { useGameLogic } from '../../hooks';
import '../../index.css';

const Game = () => {
  const {
    matchesLeft,
    playerScore,
    AIScore,
    currentPlayer,
    selectionEnabled,
    isGameOver,
    handleTakeMatches,
    handlePlayAgain,
    setCurrentPlayer,
    winner,
  } = useGameLogic();

  return (
    <Container className="container__game" sx={{ maxWidth: '2000px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">Player:</Typography>
          <Typography variant="h2">{playerScore}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {!isGameOver && (
            <>
              <Typography variant="h5">Current player:</Typography>
              <Typography>
                {currentPlayer === 1 ? (
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    <EmojiPeopleOutlinedIcon fontSize="large" /> (You)
                  </Box>
                ) : (
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
                  >
                    <SmartToyOutlinedIcon fontSize="large" /> (AI)
                  </Box>
                )}
              </Typography>
            </>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5">AI:</Typography>
          <Typography variant="h2">{AIScore}</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {!isGameOver && (
            <>
              <Typography variant="h5">Matches left:</Typography>
              <Typography variant="h1">{matchesLeft}</Typography>
            </>
          )}
          {isGameOver && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '25px',
              }}
            >
              <Typography variant="h2">Game over!</Typography>
              <Typography variant="h4">
                {winner === 1 ? (
                  <>
                    Player wins! <CelebrationOutlinedIcon fontSize="large" />
                  </>
                ) : (
                  <>
                    AI wins! <SmartToyOutlinedIcon fontSize="large" />
                  </>
                )}
              </Typography>
              <Box sx={{ display: 'flex', gap: '20px' }}>
                <Button
                  color="warning"
                  onClick={handlePlayAgain}
                  variant="contained"
                >
                  Play Again
                </Button>
                <Button
                  color="warning"
                  component={Link}
                  to="/"
                  variant="contained"
                >
                  Main Menu
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        {!isGameOver && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Stack
              sx={{ visibility: selectionEnabled ? 'visible' : 'hidden' }}
              direction="row"
              justifyContent="center"
              spacing={2}
            >
              {matchesLeft >= 1 ? (
                <Button
                  onClick={() => handleTakeMatches(1)}
                  variant="contained"
                  color="warning"
                >
                  Take 1 match
                </Button>
              ) : (
                <Button variant="contained" disabled>
                  Take 1 match
                </Button>
              )}
              {matchesLeft >= 2 ? (
                <Button
                  onClick={() => handleTakeMatches(2)}
                  variant="contained"
                  color="warning"
                >
                  Take 2 matches
                </Button>
              ) : (
                <Button variant="contained" disabled>
                  Take 2 matches
                </Button>
              )}
              {matchesLeft >= 3 ? (
                <Button
                  onClick={() => handleTakeMatches(3)}
                  variant="contained"
                  color="warning"
                >
                  Take 3 matches
                </Button>
              ) : (
                <Button variant="contained" disabled>
                  Take 3 matches
                </Button>
              )}
            </Stack>
            <Box sx={{ display: 'flex', alignItems: 'start' }}>
              <IconButton aria-label="delete" component={Link} to="/">
                <CottageRoundedIcon color="warning" fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Game;
