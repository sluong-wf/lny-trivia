import React, { useState } from "react";
import IconSelector from "../components/IconSelector";
import { Container, TextField, Button, Typography } from "@mui/material";
import "../index.css";

const HomePage = ({ onSubmit }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [questionCode, setQuestionCode] = useState("");

  const handleSubmit = () => {
    if (selectedIcon && questionCode) {
      onSubmit(selectedIcon.id, questionCode);
    } else {
      alert("Please select a group and enter a question code.");
    }
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography className="title-dancing-script">
      </Typography>
      <div style={{ margin: "20px" }}></div>
      <IconSelector onSelect={setSelectedIcon} />
      {selectedIcon && (
        <Typography variant="h6">
          Selected Group: {selectedIcon.name} {selectedIcon.emoji}
        </Typography>
      )}
      <TextField
        label="Enter Question Code"
        value={questionCode}
        onChange={(e) => setQuestionCode(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default HomePage;
