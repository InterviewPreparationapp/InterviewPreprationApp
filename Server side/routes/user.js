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

  //get all user api                   


//user registration api

app.post("/register",(request,response)=>{
    if(request.body!=null)
    {
       // console.log(request.body);
        const {FirstName,LastName,Email,Password,Mobile,Address,Dob,Qualification,Gender} = request.body;
       var connection = mysql.createConnection(ConnectionDetails);
         var statement = `INSERT INTO Users(FirstName,LastName,Email,Password,Mobile,Address,Dob,Qualification,Gender,Role,LastModified)VALUES
                                            ('${FirstName}','${LastName}','${Email}','${Password}','${Mobile}','${Address}','${Dob}','${Qualification}','${Gender}','User',now()) `;
        //console.log(statement);
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
})

//login api
app.post("/login",(request,response)=>{
   const {Email,Password}= request.body;
   var statement  = `Select count(*) as count from Users WHERE Email='${Email}' AND Password='${Password}'`;
    var connection = mysql.createConnection(ConnectionDetails);
    connection.query(statement,(error,result)=>{
            if(error==null)
            {
               var count = result[0].count;
               if(count>0)
               {
                    response.write("Login Successful");
                    connection.end();
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


})


//get user by id api
app.get("/getuserbyid/:No",(request,response)=>{
    var No = request.params.No;
    var connection = mysql.createConnection(ConnectionDetails);
    var statement = `SELECT Userid,FirstName,LastName,Email,Password,Mobile,Address,Dob,Qualification,Gender,Role FROM Users WHERE Userid= ${No}`;
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


//edit user profile api

app.put("/edituserprofile/:No",(req,response)=>{
 const No= req.params.No;
  const {FirstName,LastName,Password,Mobile,Address,Dob,Qualification}= req.body;

  var connection = mysql.createConnection(ConnectionDetails);
  var statement = `UPDATE Users set FirstName='${FirstName}',LastName='${LastName}',Password='${Password}',Mobile='${Mobile}',
  Address='${Address}',Dob='${Dob}',Qualification ='${Qualification}' WHERE Userid=${No}`
 // console.log(statement)
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


//delte user by id 

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
module.exports= app;
