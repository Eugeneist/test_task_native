import { useState, useEffect } from 'react';

const useGameLogic = () => {
  const [matchesLeft, setMatchesLeft] = useState(25);
  const [playerScore, setPlayerScore] = useState(0);
  const [AIScore, setAIScore] = useState(0);
  const [isPlayerFirst, setPlayerFirst] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(isPlayerFirst ? 1 : 2);
  const [selectionEnabled, setSelectionEnabled] = useState(isPlayerFirst);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState<number | null>(null);

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
    const availableMatches = Math.min(matchesLeft, 3);
    const remainder = (matchesLeft - 1) % 4;

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

  const handlePlayAgain = () => {
    setMatchesLeft(25);
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
    setPlayerFirst,
    winner,
  };
};

export default useGameLogic;
