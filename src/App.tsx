import { Routes, Route } from 'react-router-dom';
import { HeroPage, GamePage, NotFound } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
