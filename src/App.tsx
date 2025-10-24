// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <Routes>
      {/* Route for the Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Route for the Quiz Page */}
      {/* Hum yahan :subjectId use karenge taaki hum alag-alag subjects ke quiz khol sakein */}
      <Route path="/quiz/:subjectId" element={<QuizPage />} />

      {/* Route for the Result Page */}
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}

export default App;