// const express = require('express')
import express from "express";

const app = express();

//Using static files from frontend to backend
app.use(express.static('dist'));//using Middlewares
// app.get("/", (req, res) => {
//   res.send("My Server is Running...");
// });


//Get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1st one",
      content: "This is the first joke.",
    },
    {
      id: 2,
      title: "2nd one",
      content: "This is the second joke.",
    },
    {
      id: 3,
      title: "3rd one",
      content: "This is the third joke.",
    },
    {
      id: 4,
      title: "4th one",
      content: "This is the fourth joke.",
    },
    {
      id: 5,
      title: "5th one",
      content: "This is the fifth joke.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
