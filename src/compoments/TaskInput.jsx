import { useState } from "react";

const TaskInput = ({ textInputArr,setTextInputArr }) => {

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