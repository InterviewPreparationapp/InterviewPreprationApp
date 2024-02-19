import DashboardNavbar from "./DashboardNavbar";
import { useState,useEffect } from "react";
import { myheaders } from "../routes/auth";
import axios from "axios";
import { toast } from "react-toastify";

function AllSubjects() {
    const [subjectTypes, setSubjectTypes] = useState([]);
    useEffect(() => {
        const headers = myheaders();

        axios.get("http://127.0.0.1:9997/admin/getsubjectstypes", { headers })
            .then(res => setSubjectTypes(res.data.result))
            .catch(err => console.log(err));
    }, []);

    const deleteUser = async (id) => {
        try {
            const headers = myheaders();
            await axios.delete(`http://127.0.0.1:9997/admin/deleteSubjects/${id}`,{headers})
            .then((result)=>{
                if(result.data.status=="success")
                {
                  toast.success('Profile Deleted')
                  fetchSubjectTypes();
                }
              }) 
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error; 
        }
    };
    const fetchSubjectTypes = async () => {
        try {
            const headers = myheaders();
            const response = await axios.get("http://127.0.0.1:9997/admin/getsubjectstypes", { headers });
            setSubjectTypes(response.data.result);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    const renderSubjectTypes = () => {
        return subjectTypes.map((subject) => (
            <div className="card" style={{ "width": "18rem", "margin": "10px", "marginTop":"30px" }} key={subject.Subjectid}>
            <div className="card-body">
                <h5 className="card-title">Title:{subject.Title} </h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Subjects:{subject.Subjects}</li>
            </ul>
            <div className="card-body">
                <button onClick={() => deleteUser(subject.Subjectid)}>Delete</button>
            </div>
        </div>
    ));
};
    return ( <>
    <DashboardNavbar/>
            <div className="container" style={{paddingTop:"65%"}}>
                <div className="row">
                    {renderSubjectTypes()}
                </div>
            </div>
        
    </> );
}

export default AllSubjects;