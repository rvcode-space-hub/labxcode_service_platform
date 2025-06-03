const express = require('express');
require('./config/dbConnect');
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());






server.listen(5000,()=>{
    console.log("Server Start");
    
})