import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Lunar New Year Trivia */}
        <Route path="/lny-trivia" element={<HomePage />} />

        {/* Redirect any unmatched routes to /lny-trivia */}
        <Route path="*" element={<Navigate to="/lny-trivia" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
