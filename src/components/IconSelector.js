import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import {
  FaDragon,
  FaHorse,
  FaDog,
  FaFish,
} from "react-icons/fa";
import {
  GiRat,
  GiGoat,
  GiRooster,
  GiMonkey,
  GiBuffaloHead,
  GiPig,
  GiTigerHead,
  GiRabbit,
  GiSnake,
} from "react-icons/gi";

const zodiacIcons = [
  { id: 1, name: "Rat", Icon: GiRat },
  { id: 2, name: "Ox", Icon: GiBuffaloHead },
  { id: 3, name: "Tiger", Icon: GiTigerHead },
  { id: 4, name: "Rabbit", Icon: GiRabbit },
  { id: 5, name: "Dragon", Icon: FaDragon },
  { id: 6, name: "Snake", Icon: GiSnake },
  { id: 7, name: "Horse", Icon: FaHorse },
  { id: 8, name: "Goat", Icon: GiGoat },
  { id: 9, name: "Monkey", Icon: GiMonkey },
  { id: 10, name: "Rooster", Icon: GiRooster },
  { id: 11, name: "Dog", Icon: FaDog },
  { id: 12, name: "Pig", Icon: GiPig },
];

const IconSelector = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (id, name) => {
    setSelectedId(id);
    onSelect({ id, name });
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      {zodiacIcons.map(({ id, name, Icon }) => (
        <Grid item key={id}>
          <Button
            onClick={() => handleSelect(id, name)}
            variant={selectedId === id ? "contained" : "outlined"}
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: selectedId === id ? "#FFC107" : "transparent",
              borderColor: "#FFC107",
              color: selectedId === id ? "black" : "#FFC107",
              ":hover": {
                backgroundColor: "#FFC107",
                color: "black",
              },
            }}
          >
            <Icon size={32} />
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default IconSelector;
