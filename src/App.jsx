import { useState } from "react";
import TaskInput from "./compoments/TaskInput";
import TaskList from "./compoments/TaskList";
import ButtonAdd from "./compoments/ButtonAdd";

function App() {

  const [textInputArr, setTextInputArr] = useState([])

  const handleDelete = (data, index) => {
    const filterData = textInputArr.filter((curVal, i) => {
      return i !== index;
    })
    setTextInputArr(filterData)
  }

  

  return (
    <>
      <TaskInput setTextInputArr={setTextInputArr} textInputArr={textInputArr} />
      <ButtonAdd/>
      <TaskList textInputArr={textInputArr} handleDelete={handleDelete } />
    </>
  )
}

export default App;
