const mysql=require('mysql2');
const express  = require('express')
const config = require('config')
const app = express.Router();
const jwt = require('jsonwebtoken')
const config2 = require('../config/configjwt')

var ConnectionDetails ={
    host:config.get("server"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password"),
 }


//Get All Subjects Types
app.get("/getAllSubjectsTypes",(request,response)=>{
    var connection = mysql.createConnection(ConnectionDetails);
    var statement =`select Subjectid,Subjects,Title from SubjectsTypes`;
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

//Interviewer login
app.post("/login",(request,response)=>{
    const {Email,Password}= request.body;
    var statement  = `Select Interviewerid,FirstName,Email from Interviewers where Email='${Email}' and Password='${Password}'`;
     var connection = mysql.createConnection(ConnectionDetails);
     connection.query(statement,(error,users)=>{
        if (error) {
            var reply = {
                "status":"error",
                "result":error
            }
            response.send(JSON.stringify(reply))
          } else {
            // if there is any user found with email and password
            if (users.length == 0) {
              // no user found
              var reply = {
                "status":"error",
                "result":"user not found"
            }
              response.send(JSON.stringify(reply))
            } else {
                console.log(users[0])
              const user = users[0]
             // console.log(user)
              // create a payload for jwt token
              const payload = {
                Userid:user['Interviewerid'],
                name: user['FirstName'],
                type: 'interviewer',
              }
      
              // create a token
              const token = jwt.sign(payload, config2.secrete)
              var reply ={
                "status":"success",
                "token":token,
                  "InterviewerName":user['FirstName'],
                "Interviewerid":user['Interviewerid']
              }
              response.send(JSON.stringify(reply))
              
            }
          }
     }) 
 });


//  if(error==null)
//  {
//     var count = result[0].count;
//     if(count>0)
//     {
//      response.write("query succesful");
//      connection.end();
//      response.end();
//     }
//  else
//    {
//     response.write("Login Failed !! UserName or Password");
//     connection.end();
//     response.end();
//    }
// }
//  else{
//      response.setHeader("Content-type","application/json");
//      var reply = {
//          "status":"error",
//          "message":error
//      }
//      response.write(JSON.stringify(reply));
//      connection.end();
//      response.end();
//  }















 //Interviewer register query
 app.post("/register",(request,response)=>{
    if(request.body!=null){
    const {FirstName,LastName,Email,Password,Mobile,Address,Dob,CompanyPosition,QualifiedDegree,Gender}=request.body;
    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `insert into Interviewers(FirstName,LastName,Email,Password,Mobile,Address,Dob,CompanyPosition,QualifiedDegree,Gender,Role,ProfileUpdated)
    values('${FirstName}','${LastName}','${Email}','${Password}','${Mobile}','${Address}','${Dob}','${CompanyPosition}','${QualifiedDegree}','${Gender}','Interviewer',now())`;
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            response.setHeader("Content-type","application/json");
            var reply = {
                            "status":"success",
                            "message":result
                        }
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
            response.setHeader("Content-type","application/json");
            var reply = {
                "status":"error",
                "message":error
            }
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
    })
    }
else{
    var reply ={
        "message" :"Failed to getting data",
        "data":"errror"
    }
}
    });

//Edit profile api

app.put("/edit/:id",(request,response)=>{
    var id = request.params.id;
    const {FirstName,LastName,Mobile,Address,Dob,CompanyPosition,QualifiedDegree,Gender}=request.body;

    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `update Interviewers set FirstName='${FirstName}',LastName='${LastName}',Mobile='${Mobile}',Address='${Address}',Dob='${Dob}',CompanyPosition='${CompanyPosition}',QualifiedDegree='${QualifiedDegree}',Gender='${Gender}',Role='Interviewer' where Interviewerid=${id}`;
    connection.query(statement,(error,result)=>{
        if(error==null)
        {
            response.setHeader("Content-type","application/json");
            var reply = {
                            "status":"success",
                            "message":result
                        }
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
        }
        else{
            response.setHeader("Content-type","application/json");
            var reply = {
                "status":"error",
                "message":error
            }
            response.write(JSON.stringify(reply));
            connection.end();
            response.end();
    }
})
});

// delete Interviewers

app.delete("/delete/:id",(request,response)=>{
    const id = request.params.id;
    var connection = mysql.createConnection(ConnectionDetails)
    var statement = `DELETE From Interviewers WHERE Interviewerid=${id}`;
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

// InterviewScheduled

app.get("/InterviewSceduled/:id",(request,response)=>{
    const id = request.params.id;
    var connection = mysql.createConnection(ConnectionDetails);
    var statement =`select Interviewid,Date,Title,Userid from InterviewSceduled where Interviewerid=${id} `;
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

// select by which Student
app.get("/UsersDetails/:id",(request,response)=>{
    const id = request.params.id;
    var connection = mysql.createConnection(ConnectionDetails);
    var statement =`Select Users.FirstName,Users.LastName,Users.Email,Users.Qualification from Users,InterviewSceduled,Interviewers where InterviewSceduled.Userid= Users.Userid and InterviewSceduled.Interviewerid=Interviewers.Interviewerid and Interviewers.Interviewerid=${id}; `;
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

//set feedback
app.post("/setFeedback",(request,response)=>{
    if(request.body!=null){
        const {Interviewerid,Userid,Feedback}=request.body;
        var connection = mysql.createConnection(ConnectionDetails);
        var statement = `insert into FeedbackRecords(Interviewerid,Userid,Feedback) values(${Interviewerid},${Userid},'${Feedback}')`;
        connection.query(statement,(error,result)=>{
            if(error==null)
            {
                response.setHeader("Content-type","application/json");
                var reply = {
                                "status":"success",
                                "message":result
                            }
                response.write(JSON.stringify(reply));
                connection.end();
                response.end();
            }
            else{
                response.setHeader("Content-type","application/json");
                var reply = {
                    "status":"error",
                    "message":error
                }
                response.write(JSON.stringify(reply));
                connection.end();
                response.end();
            }
        })
        }
    else{
        var reply ={
            "message" :"Failed to getting data",
            "data":"errror"
        }
    }
        });

module.exports= app;