function Profile() {

    const ShowDetails =()=>{

    }

    const EditProfile =()=>{

    }
    const DeleteAccount = ()=>{

    }
    return ( 
        <>
        <h3 style={{textAlign:"center", padding:"20px"}}>Profile</h3>
        <div className="container" id="whyus">
            <div className="left-table">
                <button onClick={ShowDetails}>Profile Details</button>
                {" "}{" "}{" "}
                <br/><br/><br/>
                <button onClick={EditProfile}>Edit Profile</button>
                {" "}{" "}{" "}
                <br/><br/><br/>
                <button onClick={DeleteAccount}>Delete Account</button>
            </div>
            <div className="right-data">

            </div>
        </div>

        </>
     );
}

export default Profile;