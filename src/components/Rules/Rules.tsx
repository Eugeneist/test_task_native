import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: '#8796A5',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const Rules = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        sx={{ position: 'absolute', top: '10px', right: '30px' }}
        onClick={handleOpen}
        aria-label="rules"
      >
        <HelpOutlinedIcon color="warning" fontSize="large" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Game Rules
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mb: 5 }}>
            Two people are playing a game. From the pile of 25 matches, each
            player takes either 1, 2 or 3 matches on each turn. The game is over
            once all matches are taken. Whoever has the even amount of matches
            wins. Good luck!
          </Typography>
          <Button onClick={handleClose} color="warning" variant="contained">
            OK
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Rules;
