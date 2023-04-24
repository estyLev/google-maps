const express = require("express");
require('dotenv').config()


const searchController=require('./Controllers/ruoter')
const cors = require('cors');
const app =express();
app.use(cors());
app.use(express.json());
//require('./database')

app.use('/api',searchController)

app.listen(8000,console.log(`listen to port 8000`));