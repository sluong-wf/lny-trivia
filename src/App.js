import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";

const App = () => {
  const [groupId, setGroupId] = useState(null);
  const [questionCode, setQuestionCode] = useState(null);

  const handleSubmit = (id, code) => {
    setGroupId(id);
    setQuestionCode(code);
  };

  return (
    <div style={{ backgroundColor: "#D32F2F", height: "100vh" }}>
      {!groupId ? (
        <HomePage onSubmit={handleSubmit} />
      ) : (
        <QuestionPage groupId={groupId} questionCode={questionCode} />
      )}
    </div>
  );
};

export default App;
