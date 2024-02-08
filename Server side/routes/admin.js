const mysql=require('mysql2');
const express  = require('express')
const config = require('config')
const app = express.Router();

var ConnectionDetails ={
    host:config.get("server"),
    database:config.get("database"),
    user:config.get("user"),
    password:config.get("password"),
 }
// Login Admin 
 app.post("/login",(request,response)=>{
    const {Email,Password}= request.body;
    var statement  = `Select count(*) as count from Admin WHERE Email='${Email}' AND Password='${Password}'`;
     var connection = mysql.createConnection(ConnectionDetails);
     connection.query(statement,(error,result)=>{
             if(error==null)
             {
                var count = result[0].count;
                if(count>0)
                {
                 response.write("query succesful");
                 response.end();
                }
             else
               {
                response.write("Login Failed !! UserName or Password");
                connection.end();
                response.end();
               }
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
// Register Admin 
 app.post("/register",(request,response)=>{
    if(request.body!=null){
    const {Name,Email,Password}=request.body;
    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `insert into Admin(Name,Email,Password,Role) values('${Name}','${Email}','${Password}','Admin')`;
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

//Edit  Admin
app.put("/edit/:id",(request,response)=>{
    var id = request.params.id;
    const {Name,Email,Password}=request.body;

    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `update Admin set Name='${Name}',Email='${Email}',Password='${Password}' where Adminid=${id}`;
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

// Delete Admin
app.delete("/delete/:id",(request,response)=>{
    const id = request.params.id;
    var connection = mysql.createConnection(ConnectionDetails)
    var statement = `DELETE From Admin WHERE Adminid=${id}`;
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

// Add SubjectsTypes
app.post("/addSubjects",(request,response)=>{
    if(request.body!=null){
    const {Subjects,Title}=request.body;
    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `insert into SubjectsTypes(Subjects,Title) values('${Subjects}','${Title}')`;
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

// Delete SubjectsTypes
app.delete("/deleteSubjects/:id",(request,response)=>{
    const id = request.params.id;
    var connection = mysql.createConnection(ConnectionDetails)
    var statement = `DELETE From SubjectsTypes WHERE Subjectid=${id}`;
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

app.get("/getsubjectstypes",(request,response)=>{
    var connection  = mysql.createConnection(ConnectionDetails);
    var statement = `SELECT Subjectid,Subjects,Title FROM SubjectsTypes;`
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

//get demo questions
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


//add demo questions;
app.post("/addDemoQuestion",(request,response)=>{
    const {Question,Answer,Subjectid}=request.body;
    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `INSERT INTO DemoQuestions (Question, Answer,Subjectid) values ("${Question}","${Answer}",${Subjectid});`;
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
})

//edit demo questions 
app.put("/editdemoquestion/:id",(request,response)=>{
    var id = request.params.id;
    const {Question,Answer}=request.body;

    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `Update DemoQuestions set Question="${Question}",Answer="${Answer}" where Questionid=${id}`;
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
//delete demo questions
app.delete("/deletedemoquestion/:id",(request,response)=>{
    const id = request.params.id
    var connection = mysql.createConnection(ConnectionDetails)
    var statement = `DELETE From DemoQuestions WHERE Questionid=${id}`;
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
//Get all students
app.get("/getallusers",(request,response)=>{
    var connection  = mysql.createConnection(ConnectionDetails);
    var statement = `Select Userid,FirstName,LastName,Email,Password,Mobile,Address,Dob,Qualification,Gender,Role from Users`
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
//Delete any student
app.delete("/deleteUser/:id",(request,response)=>{
    const id = request.params.id
    var connection = mysql.createConnection(ConnectionDetails)
    var statement = `DELETE From Users WHERE Userid=${id}`;
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
//Get all interviewer
app.get("/getallinterviewer",(request,response)=>{
    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `select Interviewerid,FirstName,LastName,Email,Password,Mobile,Address,Dob,CompanyPosition,QualifiedDegree,ProfileUpdated,Gender,Role from Interviewers`;
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

//delete any interviewer
app.delete("/deleteinterviewer/:id",(request,response)=>{
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

 module.exports = app;