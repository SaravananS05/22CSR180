const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();


//server listen to the port 9876
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening in port ${process.env.PORT}`);
})

//test the server is working or not
app.get('/',(req,res)=>{
    res.send("Hello");
})