const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");


//The express module is a function. When it is executed it returns an app object
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());


const apis= require('./routes/api')

app.use('/api',apis)




//Start the app listening on port 8080
module.exports=app.listen(5000, () => {
    console.log("server started at 5000 press control button + c to stop");
})
