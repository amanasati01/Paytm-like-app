const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
const mainRouter = require('./routes/index')
app.use(cors())
app.use(express.json())
app.use('/api/v1', mainRouter)

app.listen(3000,()=>{
    console.log(`app is running on http//:localhost:${3000}`);
})


