import React, { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { database } from "../utils/firebaseConfig";
import { Container, Typography, TextField, Button } from "@mui/material";

const QuestionPage = ({ groupId, questionCode }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const fetchQuestion = async () => {
      const questionRef = ref(database, `questions/${groupId}/${questionCode}`);
      const snapshot = await get(questionRef);
      if (snapshot.exists()) {
        setQuestion(snapshot.val().question);
      } else {
        setQuestion("Question not found.");
      }
    };

    fetchQuestion();
  }, [groupId, questionCode]);

  const checkAnswer = () => {
    const normalizedAnswer = answer.trim().toLowerCase();
    // Assuming Firebase has the correct answer
    if (normalizedAnswer === "correctAnswer") {
      setResult("Correct!");
    } else {
      setResult("Wrong answer. Try again.");
    }
  };

  return (
    <Container>
      <Typography variant="h5">{question}</Typography>
      <TextField
        label="Your Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="secondary" onClick={checkAnswer}>
        Submit Answer
      </Button>
      <Typography variant="body1">{result}</Typography>
    </Container>
  );
};

export default QuestionPage;
