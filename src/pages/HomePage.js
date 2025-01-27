import React, { useState } from "react";
import IconSelector from "../components/IconSelector";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

// Hardcoded questions
const questionsData = [
  {
    groupId: 1,
    questionCode: "Q1",
    question: "What is the color associated with Lunar New Year?",
    answer: "red",
    letters: "LU",
  },
  {
    groupId: 2,
    questionCode: "Q2",
    question: "What is a common Lunar New Year dish?",
    answer: "dumplings",
    letters: "NA",
  },
  {
    groupId: 3,
    questionCode: "Q3",
    question: "What animal represents the year 2024 in the Chinese Zodiac?",
    answer: "dragon",
    letters: "NY",
  },
  {
    groupId: 4,
    questionCode: "Q4",
    question: "What is the main ingredient in Mooncakes?",
    answer: "lotus",
    letters: "ER",
  },
];

const HomePage = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [questionCode, setQuestionCode] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  const [finalGroupWord, setFinalGroupWord] = useState("");
  const [finalWordResult, setFinalWordResult] = useState("");

  const handleSubmit = () => {
    if (selectedIcon && questionCode) {
      const question = questionsData.find(
        (q) => q.groupId === selectedIcon.id && q.questionCode === questionCode
      );
      if (question) {
        setCurrentQuestion(question);
        setResult(""); // Clear previous results
        setUserAnswer(""); // Reset answer input
      } else {
        alert("Invalid question code for this group.");
      }
    } else {
      alert("Please select a group and enter a question code.");
    }
  };

  const handleAnswerSubmit = () => {
    if (currentQuestion && userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
      setResult(`Correct! Your letters: ${currentQuestion.letters}`);
    } else {
      setResult("Incorrect. Try again.");
    }
  };

  const handleFinalWordSubmit = () => {
    const correctGroupWord = "LUNARNYER"; // Example final word
    if (finalGroupWord.trim().toUpperCase() === correctGroupWord) {
      setFinalWordResult("Congratulations! Your group word is correct!");
    } else {
      setFinalWordResult("Incorrect group word. Please try again.");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#D32F2F",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Typography className="title-dancing-script" variant="h4" gutterBottom>
        Lunar New Year Trivia
      </Typography>
      <IconSelector onSelect={setSelectedIcon} />
      {selectedIcon && (
        <Typography variant="h6" gutterBottom>
          Selected Group: {selectedIcon.name} {selectedIcon.emoji}
        </Typography>
      )}

      {/* Input and Button in a Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: 1, // Space between input and button
          marginTop: 2,
        }}
      >
        <TextField
          label="Enter Question Code"
          value={questionCode}
          onChange={(e) => setQuestionCode(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      {currentQuestion && (
        <>
          <Typography variant="h6" sx={{ mt: 4 }}>
            {currentQuestion.question}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: 1,
              marginTop: 2,
            }}
          >
            <TextField
              label="Enter Your Answer"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              fullWidth
              variant="outlined"
              sx={{ backgroundColor: "white", borderRadius: "4px" }}
            />
            <Button variant="contained" color="secondary" onClick={handleAnswerSubmit}>
              Submit Answer
            </Button>
          </Box>
          {result && (
            <Typography
              variant="h6"
              sx={{
                mt: 2,
                color: result.startsWith("Correct") ? "green" : "red",
              }}
            >
              {result}
            </Typography>
          )}
        </>
      )}

      {/* Final Group Word Submission */}
      <Button
        variant="contained"
        color="success"
        sx={{ mt: 4 }}
        onClick={() => setFinalWordResult("")}
      >
        Have Your Final Group Word?
      </Button>
      <Box
        sx={{
          display: finalWordResult === "" ? "flex" : "none",
          alignItems: "center",
          width: "100%",
          gap: 1,
          marginTop: 2,
        }}
      >
        <TextField
          label="Enter Final Group Word"
          value={finalGroupWord}
          onChange={(e) => setFinalGroupWord(e.target.value)}
          fullWidth
          variant="outlined"
          sx={{ backgroundColor: "white", borderRadius: "4px" }}
        />
        <Button variant="contained" color="success" onClick={handleFinalWordSubmit}>
          Submit Word
        </Button>
      </Box>
      {finalWordResult && (
        <Typography variant="h6" sx={{ mt: 2, color: "yellow" }}>
          {finalWordResult}
        </Typography>
      )}
    </Container>
  );
};

export default HomePage;
