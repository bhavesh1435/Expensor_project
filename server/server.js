import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
mongoose.set('strictQuery', true);
const PORT = 4000

const app = express();

app.use(cors);

app.get("/", (req, res)=> {
    res.send("Hello World");
});

app.listen(PORT,() => {
    console.log("Server is Running on port http://localhost:4000");
});

mongoose.connect('mongodb+srv://expence14:pass123@expence-mern.myrg52w.mongodb.net/?retryWrites=true&w=majority')
.then(() => 
   console.log("Yeeee It's Working")
)
.catch((error) => 
    console.log(err)
);
