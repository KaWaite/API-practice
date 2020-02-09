const express = require("express");

// igdb API
// const igdb = require("igdb-api-node").default;
// const APIkey = "./key";
// const client = igdb(APIkey.igdbkey);

const app = express();

// GET ROUTES
// app.get("/getGames", async (req, res) => {
//   const response = await igdb()
//     .fields(["name", "movies", "age"]) // fetches only the name, movies, and age fields
//     .fields("name,movies,age") // same as above

//     .limit(50) // limit to 50 results
//     .offset(10) // offset results by 10

//     .sort("name") // default sort direction is 'asc' (ascending)
//     .sort("name", "desc") // sorts by name, descending
//     .search("mario") // search for a specific name (search implementations can vary)

//     .where(`first_release_date > ${new Date().getTime() / 1000}`) // filter the results

//     .request("/games"); // execute the query and return a response object

//   console.log(response.data);
// });

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

// app.get("/express_backend", (req, res) => {
//   res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
// });

// Assign port
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
