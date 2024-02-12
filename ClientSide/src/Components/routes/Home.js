import Navbar from "../Navbar";
import img1 from "../images/home.jpg"
//import '../css/Home.css';
function Home() {
    return (  
        <>
      
      
        <h3 style={{"font-family": "Protest Riot, sans-serif",color: "#325b5d",textAlign:"center", padding:"20px"}}>Home</h3>
        <div className="container" id="Home" >
      <div className="left-image">
        <img src={img1} alt="Left Image" />
      </div>

        <div className="right-paragraph">

      <p style={{"fontFamily": "system-ui",fontSize: 20}}>Welcome to Interview Preparation WebApp, your hub for insightful interviews with industry leaders, 
        experts, and visionaries. Delve into exclusive conversations spanning technology,
         business,science, and more. Our diverse collection offers engaging content formats, 
         including articles, videos, and interactive Q&A sessions, ensuring there's something for every curious mind. 
         Subscribe to our newsletter for regular updates and join our vibrant community to connect with like-minded individuals. 
         Start exploring today and embark on a journey of discovery with Interview Preparation WebApp .
        </p> 
      </div>
       </div>
        </>
    );
}

export default Home;