const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const dbConnect = require("./db/dbConnection");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require('./routes/userRoute');
const postRoute = require('./routes/postRoute');
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
dbConnect();
app.use(morgan("common"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));

app.use("/uploads",express.static(path.join(__dirname,"uploads"))) 

app.use("/api/category",categoryRoute);
app.use("/api/user",userRoute);
app.use("/api/posts",postRoute);



app.listen(port,()=>{
    console.log(`server connected on http://localhost:${port}`)
})


