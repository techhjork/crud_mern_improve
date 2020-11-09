const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const url = 'mongodb://localhost:27017/CRUD'
const bodyParser = require("body-parser");
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
app.use((req,res,next)=>{
	res.setHeader("Access-Control-Allow-Origin","*")
	res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
	res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
	next()
})
*/


mongoose.connect(url, {useUnifiedTopology: true,
  useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/alien')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})

/*
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser"); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb://localhost:27017/CRUD", {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(()=> console.log('MongoDB Connected'))
.catch(err=> console.log(err))



const alienRoutes = require("./routes/alien")
app.use("/aliens",alienRoutes)

const port = 3000

app.listen(port,()=>{
	console.log(`http://localhost:${port} is connected`)
}) 
*/
