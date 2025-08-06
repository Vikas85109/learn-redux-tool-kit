import { useState } from "react";
import { useDispatch } from "react-redux";
import { getArryData } from "../redux/reducers/TaskSlice";

const TaskInput = ({ textInputArr, setTextInputArr }) => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState('');
  // const [textInputArr, setTextInputArr] = useState([]);

  const handleChange = (e) => {
    setTextInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput == "") {
      alert("Enter Input");
      return
    }
    dispatch(getArryData(...textInputArr, textInput))
    setTextInputArr([...textInputArr,textInput]);
    setTextInput('')
  }


  return (
    <div className="main-div">
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" className="input" value={textInput} onChange={handleChange}/>
        <button type="submit" className="btn">Add</button>
       
      </form>
    </div>
  )
}

export default TaskInput