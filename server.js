const express = require("express");

const app = express();

app.use("/test", () => {
  console.log("hit middleware!")
})

app.get("/API/pages", (req, res) => {
  const pages = [
    {
      id: 1,
      title: "Jellybeans",
      content: "dumby content"
    },
    {
      id: 2,
      title: "Cookies",
      content: "dumby content"
    },
    {
      id: 4,
      title: "Potato Chips",
      content: "dumby content"
    },
    {
      id: 5,
      title: "Ice Cream",
      content: "dumby content"
    }
  ];
  res.json(pages);
});

// Assign port
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
