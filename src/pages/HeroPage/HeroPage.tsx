import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useGameLogic } from '../../hooks';
import { Rules } from '../../components';
import '../../index.css';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',

      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ed6c02' : '#e65100',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const HeroPage = () => {
  const { isGameOver, isPlayerFirst, handleChangeMode } = useGameLogic();

  return (
    <Container className="container" maxWidth="xl">
      <Rules />
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
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{ padding: '0' }}
                variant="body1"
                mx="12px"
                component="span"
              >
                AI
              </Typography>
              <FormControlLabel
                control={
                  <MaterialUISwitch
                    sx={{ m: 1 }}
                    checked={isPlayerFirst}
                    onChange={() => handleChangeMode(!isPlayerFirst)}
                  />
                }
                label="Human"
              />
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
