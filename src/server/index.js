const express = require("express")
const cors = require("cors")
const path = require("path")
// const compression = require("compression")
const app = express()
const port = process.env.PORT || 3000;

//db connection...
const db = require("./config/database")
db.authenticate()
	.then(()=>console.log("mysql db connected...."))
	.catch((err)=>console.log(err))

// app.use(compression())

app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz';
  console.log(req.url)
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type','text/javascript');
  next();
});



app.use(express.static(path.join(__dirname+"/../../build")))
// console.log()
app.use(cors())
app.get("/api",(req,res)=>{
	res.json("Hello ji")
})


app.listen(port,()=>{
	console.log(`Server is running at ${port}`)
})