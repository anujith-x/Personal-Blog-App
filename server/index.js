import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();
const PORT = 4000;
app.use(cors())

app.get('/', (req, res) => {
  res.send("Welcome to the Blog App")
})


mongoose.connect("mongodb://127.0.0.1:27017/BlogApp2024")
.then(() => {
  console.log("App connected to database");
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
})
.catch((err) => {
  console.log(err);
})
  