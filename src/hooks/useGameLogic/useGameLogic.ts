import { useState, useEffect } from 'react';

interface GameLogicProps {
  matchesLeft: number;
  playerScore: number;
  AIScore: number;
  currentPlayer: number;
  selectionEnabled: boolean;
  isGameOver: boolean;
  handleTakeMatches: (count: number) => void;
  handlePlayAgain: () => void;
  setCurrentPlayer: (player: number) => void;
  isPlayerFirst: boolean;
  handleChangeMode: (value: boolean) => void;
  winner: number | null;
}

const useGameLogic = (n = 12, m = 3): GameLogicProps => {
  const [matchesLeft, setMatchesLeft] = useState(2 * n + 1);
  const [playerScore, setPlayerScore] = useState(0);
  const [AIScore, setAIScore] = useState(0);
  const [isPlayerFirst, setIsPlayerFirst] = useState(() => {
    const storedValue = localStorage.getItem('isPlayerFirst');
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const [currentPlayer, setCurrentPlayer] = useState(isPlayerFirst ? 1 : 2);
  const [selectionEnabled, setSelectionEnabled] = useState(isPlayerFirst);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('isPlayerFirst', JSON.stringify(isPlayerFirst));
  }, [isPlayerFirst]);

  useEffect(() => {
    setIsGameOver(matchesLeft === 0);

    if (matchesLeft === 0) {
      if (playerScore % 2 === 0) {
        setWinner(1); // Гравець 1 переміг
      } else {
        setWinner(2); // Гравець 2 (AI) переміг
      }
    } else {
      setWinner(null);
    }
  }, [matchesLeft]);

  useEffect(() => {
    if (currentPlayer === 2 && !isGameOver) {
      // Хід AI
      setTimeout(() => {
        const matchesToTake = getAIMatchesToTake();
        handleTakeMatches(matchesToTake);
      }, 1000);
    }
  }, [currentPlayer, matchesLeft, isGameOver]);

  const handleTakeMatches = (count: number) => {
    setMatchesLeft(matchesLeft - count);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    setSelectionEnabled(!selectionEnabled);

    if (currentPlayer === 1) {
      setPlayerScore(playerScore + count);
    } else {
      setAIScore(AIScore + count);
    }
  };

  const getAIMatchesToTake = (): number => {
    const availableMatches = Math.min(matchesLeft, m);
    const remainder = matchesLeft % (m + 1);

    let matchesToTake = 0;
    if (remainder === 0 && matchesLeft >= 3) {
      // Залишок сірників після ділення на 4 дорівнює 1
      matchesToTake = Math.floor(Math.random() * (availableMatches - 1)) + 1;
    } else if (remainder === 2 && matchesLeft >= 2) {
      // Залишок сірників після ділення на 4 дорівнює 2
      matchesToTake = 2;
    } else if (remainder === 3 && matchesLeft >= 1) {
      // Залишок сірників після ділення на 4 дорівнює 3
      matchesToTake = 1;
    } else {
      // Залишок сірників після ділення на 4 дорівнює 0
      matchesToTake = Math.floor(Math.random() * availableMatches) + 1;
    }

    return Math.min(matchesToTake, availableMatches);
  };

  const handleChangeMode = (value: boolean) => {
    setIsPlayerFirst(value);
  };

  const handlePlayAgain = () => {
    setMatchesLeft(2 * n + 1);
    setCurrentPlayer(1);
    setSelectionEnabled(true);
    setPlayerScore(0);
    setAIScore(0);
    setIsGameOver(false);
  };

  return {
    matchesLeft,
    playerScore,
    AIScore,
    currentPlayer,
    selectionEnabled,
    isGameOver,
    handleTakeMatches,
    handlePlayAgain,
    setCurrentPlayer,
    isPlayerFirst,
    handleChangeMode,
    winner,
  };
};

export default useGameLogic;
