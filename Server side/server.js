const express = require('express');
const config = require('config');

const PORT = config.get("port");

const UserRouterHandler = require('./routes/user');
const IntviewRouteHandler = require('./routes/interview')
const AdminRouteHandler = require('./routes/admin');
const InterviewerRouteHandler= require('./routes/interviewer')
const app = express();
app.use(express.json());

app.use((request, response,next)=>{
   
    response.setHeader("Access-Control-Allow-Origin", "*");
    
   
    response.setHeader("Access-Control-Allow-Methods", "*");

    
    response.setHeader("Access-Control-Allow-Headers", "*");
    next();
})


app.use("/user",UserRouterHandler);
app.use("/interview",IntviewRouteHandler)
app.use("/interviewer",InterviewerRouteHandler)
app.use("/admin",AdminRouteHandler)

app.get("/",(req,res)=>{
    res.send("hello app is ready")
})



app.listen(PORT, ()=>{console.log(`server started listening at port ${PORT}`);});