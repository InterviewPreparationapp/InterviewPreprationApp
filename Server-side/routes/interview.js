const mysql=require('mysql2');
const express  = require('express')
const config = require('config')
const app = express.Router();

//getting connection details from config file
var ConnectionDetails ={
    host:config.get("server"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password"),
 }


   //get all Interviewer api                   
app.get("/allInterviewer",(request,response)=>{
    var connection  = mysql.createConnection(ConnectionDetails);
    var statement = `Select Interviewerid,FirstName,LastName,Email,Password,Mobile,Address,QualifiedDegree,CompanyPosition from Interviewers`
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            var reply = {
                            "status":"success",
                            "result":result
                        }
            response.setHeader("Content-type","application/json");
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
                response.setHeader("Content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
        }
    })
});

//seduling interview by user
app.post("/setInteview",(request,response)=>{
    const {Date,Title,Interviewerid,Userid} = request.body;
   var connection = mysql.createConnection(ConnectionDetails);
    var statement =`Insert Into InterviewSceduled (Date,Title,Interviewerid,Userid) values('${Date}','${Title}',${Interviewerid},${Userid});`;
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            var reply = {
                            "status":"success",
                            "result":result
                        }
            response.setHeader("Content-type","application/json");
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
                response.setHeader("Content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
        }
    })

})

//demo questions for students
app.get("/demoquestions",(request,response)=>{
    var connection  = mysql.createConnection(ConnectionDetails);
    var statement = `Select Questionid,SubjectsTypes.Title,SubjectsTypes.Subjects,Question,Answer  
                    from SubjectsTypes,DemoQuestions 
                    where DemoQuestions.Subjectid = SubjectsTypes.Subjectid;`
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            var reply = {
                            "status":"success",
                            "result":result
                        }
            response.setHeader("Content-type","application/json");
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
                response.setHeader("Content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
        }
    })
}) 

//getting feedback from interviewer
app.get("/getfeedback",(request,response)=>{
    var connection  = mysql.createConnection(ConnectionDetails);
    var statement = `SELECT Feedbackid, Interviewers.FirstName as Interviewer,Users.FirstName as User,Feedback FROM FeedbackRecords,Interviewers,Users where FeedbackRecords.Interviewerid=Interviewers.Interviewerid and FeedbackRecords.Userid=Users.Userid`;
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            var reply = {
                            "status":"success",
                            "result":result
                        }
            response.setHeader("Content-type","application/json");
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
                response.setHeader("Content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
        }
    })
})


//fetch all interiviews

app.get("/fetchAllInterviews",(request,response)=>{ 
    var connection  = mysql.createConnection(ConnectionDetails);
    var statement = `SELECT Interviewid,Date,Title,Interviewers.FirstName as Interviewer,Users.FirstName as User  FROM InterviewSceduled,Interviewers,Users where InterviewSceduled.Interviewerid=Interviewers.Interviewerid and InterviewSceduled.Userid=Users.Userid`;
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            var reply = {
                            "status":"success",
                            "result":result
                        }
            response.setHeader("Content-type","application/json");
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
                response.setHeader("Content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
        }
    }) 
})


//add interview in records
app.post("/addinterviewinrecords",(request,response)=>{
    const{Interviewid,Interviewerid,Userid}=request.body
    var connection  = mysql.createConnection(ConnectionDetails);
    var statement = `INSERT INTO InterviewsRecords (Interviewid,Interviewerid,Userid) values(${Interviewid},${Interviewerid},${Userid})`;
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            var reply = {
                            "status":"success",
                            "result":result
                        }
            response.setHeader("Content-type","application/json");
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
                response.setHeader("Content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
        }
    })
})

app.get("/getallinterviewrecords",(request,response)=>{
    var connection  = mysql.createConnection(ConnectionDetails);
    var statement = `SELECT * From InterviewsRecords`;
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            var reply = {
                            "status":"success",
                            "result":result
                        }
            response.setHeader("Content-type","application/json");
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
                response.setHeader("Content-type","application/json");
                response.write(JSON.stringify(error));
                connection.end();
                response.end();
        }
    }) 
})
module.exports= app;