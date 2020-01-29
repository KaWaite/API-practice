const express = require("express");

const app = express();

// GET ROUTES
app.get("/api/test", (req, res) => {
  const games = [
    {
      id: 1,
      name: "bloodyhell"
    },
    {
      id: 2,
      name: "number2"
    },
    {
      id: 4,
      name: "number2sadfsdf"
    },
    {
      id: 5,
      name: "asdfsdfnumber2"
    }
  ];
  res.json(games);
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// Assign port
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
