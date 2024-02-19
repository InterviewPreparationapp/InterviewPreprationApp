import DashboardNavbar from "./DashboardNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { myheaders } from "../routes/auth";
import { toast } from "react-toastify";


function AddQuestions() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [subjectId, setSubjectId] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        
        const fetchSubjects = async () => {
            try {
                const headers = myheaders();
                const response = await axios.get("http://localhost:9997/admin/getsubjectstypes", { headers });
                setSubjects(response.data.result);
            } catch (error) {
                console.error("Error fetching subjects:", error);
                setError("Failed to fetch subjects");
            }
        };
        fetchSubjects();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const headers = myheaders();
            const response = await axios.post(
                "http://localhost:9997/admin/addDemoQuestion",
                { Question: question, Answer: answer, Subjectid: subjectId },
                { headers }
            );
            if (response.data.status === "success") {
                toast.success("Question added successfully");
                setQuestion("");
                setAnswer("");
                setSubjectId("");
            } else {
                setError("Failed to add question");
            }
        } catch (error) {
            console.error("Error adding question:", error);
            setError("Something went wrong");
        }
    };

    return ( <>
    <DashboardNavbar/>
    <div>
            <h2>Add Demo Question</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question:</label>
                    <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />
                </div>
                <div>
                    <label>Answer:</label>
                    <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
                </div>
                <div>
                    <label>Subject:</label>
                    <select value={subjectId} onChange={(e) => setSubjectId(e.target.value)} required>
                        <option value="">Select a subject</option>
                        {subjects.map((subject) => (
                            <option key={subject.Subjectid} value={subject.Subjectid}>
                                {subject.Subjects}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <div>{message}</div>}
            {error && <div>{error}</div>}
        </div>
    </>  );
}

export default AddQuestions;