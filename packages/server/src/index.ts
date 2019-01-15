import express from "express";
import cors from "cors";
import data from "./data";

require("dotenv").config();

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.send(data);
});

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
