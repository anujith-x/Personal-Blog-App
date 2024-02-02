import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User } from "./models/signUpModel.js";

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Blog App");
});

app.post("/signUp", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(500).send({ message: "Send all required fields" });
  }
  let email = req.body.email;
  let password = req.body.password;
  const newUser = User({
    email: email,
    password: password,
  });
  newUser
    .save()
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
  res.send({message:"success"})
});



mongoose
  .connect("mongodb://127.0.0.1:27017/BlogApp2024")
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
