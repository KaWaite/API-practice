const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  const treats = [
    {
      id: 1,
      name: "Jellybeans"
    },
    {
      id: 2,
      name: "Cookies"
    },
    {
      id: 4,
      name: "Potato Chips"
    },
    {
      id: 5,
      name: "Ice Cream"
    }
  ];
  res.json(treats);
});

// Assign port
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
