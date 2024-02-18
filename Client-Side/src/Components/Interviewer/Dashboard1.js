import { useEffect,useState } from "react";
import Navbar from "./Navbar";;

function Dashboard1() {
    const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
    return (
    <>
    <Navbar/>
    <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {isChecked ? 'Checked Label' : 'Unchecked Label'}
      </label>
    </>
    );
    
}

export default Dashboard1;