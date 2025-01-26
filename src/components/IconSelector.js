import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import {
    FaDragon, // Dragon
    FaHorse, // Horse
    FaDog, // Dog
    FaFish, // Pisces (optional alternative)
} from "react-icons/fa";
import { GiRat, GiGoat, GiRooster, GiMonkey, GiCow, GiBuffaloHead } from "react-icons/gi";


import { GiPig, GiTigerHead, GiRabbit, GiSnake } from "react-icons/gi";

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


// const zodiacIcons = [
//   { id: 1, name: "Rat", emoji: "🐀" },
//   { id: 2, name: "Ox", emoji: "🐂" },
//   { id: 3, name: "Tiger", emoji: "🐅" },
//   { id: 4, name: "Rabbit", emoji: "🐇" },
//   { id: 5, name: "Dragon", emoji: "🐉" },
//   { id: 6, name: "Snake", emoji: "🐍" },
//   { id: 7, name: "Horse", emoji: "🐎" },
//   { id: 8, name: "Goat", emoji: "🐐" },
//   { id: 9, name: "Monkey", emoji: "🐒" },
//   { id: 10, name: "Rooster", emoji: "🐓" },
//   { id: 11, name: "Dog", emoji: "🐕" },
//   { id: 12, name: "Pig", emoji: "🐖" },
// ];

// const IconSelector = ({ onSelect }) => (
//     <Grid container spacing={2}>
//         {zodiacIcons.map((icon) => (
//             <Grid item xs={3} key={icon.id}>
//                 <Button
//                     variant="outlined"
//                     fullWidth
//                     onClick={() => onSelect(icon)}
//                 >
//                     {icon.emoji}
//                     {/* <Typography variant="caption">{icon.name}</Typography> */}
//                 </Button>
//             </Grid>
//         ))}
//     </Grid>
// );


const IconSelector = ({ onSelect }) => (
    <Grid container spacing={2}>
        {zodiacIcons.map(({ id, name, Icon }) => (
            <Grid item xs={4} key={id}>
                <Button
                    sx={{ color: "#FFC107", borderColor: "#FFC107", ":hover": { borderColor: "white", color: "white" } }}
                    variant="outlined"
                    fullWidth
                    onClick={() => onSelect({ id, name })}
                >
                    <Icon size={24} style={{ marginRight: 8 }} />
                    {name}
                </Button>
            </Grid>
        ))}
    </Grid>
);

export default IconSelector;
