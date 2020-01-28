const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  const games = [
    {
      id: 1,
      name: "bloodyhell"
    },
    {
      id: 2,
      name: "number2"
    }
  ];
  res.json(games);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
