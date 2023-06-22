import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useGameLogic } from '../../hooks';

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
    <div>
      <h1>Match Game</h1>
      <div>
        Player: {playerScore} AI: {AIScore}
      </div>
      {!isGameOver && <p>Current player: Player {currentPlayer}</p>}
      {isGameOver && (
        <div>
          <p>Game over! {winner ? `Player ${winner} wins!` : "It's a tie!"}</p>
          <button onClick={handlePlayAgain}>Play Again</button>
        </div>
      )}
      {!isGameOver && (
        <div>
          <p>Matches left: {matchesLeft}</p>

          {selectionEnabled && (
            <Stack direction="row" spacing={2}>
              {matchesLeft >= 1 ? (
                <Button
                  onClick={() => handleTakeMatches(1)}
                  variant="contained"
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
                >
                  Take 3 matches
                </Button>
              ) : (
                <Button variant="contained" disabled>
                  Take 3 matches
                </Button>
              )}
            </Stack>
          )}
        </div>
      )}
      {/* {!isGameOver && (
        <div>
          <p>Choose the first player:</p>
          <button onClick={() => setCurrentPlayer(1)}>Human</button>
          <button onClick={() => setCurrentPlayer(2)}>AI</button>
        </div>
      )} */}
    </div>
  );
};

export default Game;
