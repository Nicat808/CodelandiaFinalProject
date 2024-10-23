const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const router = require('./routes/index');

const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',router)

const PORT = 8000
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
    
})