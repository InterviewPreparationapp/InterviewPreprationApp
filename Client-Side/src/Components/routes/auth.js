//import { useNavigate } from "react-router-dom"



//authenticate
export const isLoggedIn=()=>{
    let data = sessionStorage.getItem("data")   
    if(data!=null) 
    {
        if(data.length>100)
        return true
    }
    else  return false

}

//do login
export const doLogin=(data)=>{
    //console.log(data.token)
    sessionStorage.setItem("data",data.token)
    const UserDetaitls={ Userid: data.Userid, UserRole: data.Role};
    const encodedUserDetails =window.btoa(JSON.stringify(UserDetaitls))
    //console.log(encodedUserDetails)
    sessionStorage.setItem("Userdata",encodedUserDetails)
}


export const getCurrentUser=()=>{
    if(isLoggedIn)
    {
        const UserData = sessionStorage['Userdata']
        //const token = sessionStorage['data']
        const Userdetails=  JSON.parse(window.atob(UserData))
        console.log(Userdetails)
        return  Userdetails
    }
    else{
        return false;
    }
}
export const getCurrentUserid=()=>{
    if(isLoggedIn)
    {
        const UserData = sessionStorage['Userdata']
        const Userdetails=  JSON.parse(window.atob(UserData))
        //console.log(Userdetails)
        return  Userdetails.Userid
    }
    else{
        return false;
    }
}
export const myheaders=()=>{
    if(isLoggedIn)
    {
        const headers = {
            token: sessionStorage['data'],
        }; 
        return headers;
    }
}
