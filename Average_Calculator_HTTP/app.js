const express = require('express');
const dotenv = require('dotenv');
const evenRouter = require('./router/evenRoute')
dotenv.config();
const app = express();

//Routes
app.use('/numbers',evenRouter);


//server listen to the port 9876
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening in port ${process.env.PORT}`);
})

//test the server is working or not
app.get('/',(req,res)=>{
    res.send("Hello");
})