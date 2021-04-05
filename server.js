require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const knex = require("./db/knex");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/pics", (req, res) =>
{
    res.send("test");
})

// app.use(express.static("./build"));
// app.get("*", (req, res) => {
//     res.sendFile("./build/index.html");
// });
  
app.listen(PORT, () =>
{
    console.log(`🎉 Server running at https://localhost:${PORT}!`);
})