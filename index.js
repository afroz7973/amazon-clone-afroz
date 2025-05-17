
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// import from other files
const authRouter = require('./routes/auth');
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");


const PORT = 3000;
const app = express();
const DB = "mongodb+srv://afroz:afroz%401890@cluster0.phwpgjz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(cors());

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// connections 
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((e) =>{
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", ()=> {
    console.log(`Connected at port ${PORT}`);
});
