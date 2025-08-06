import { useState } from "react";
import TaskInput from "./compoments/TaskInput";
import TaskList from "./compoments/TaskList";

function App() {

  const [textInputArr, setTextInputArr] = useState([])

  const handleDelete = (data, index) => {
    const filterData = textInputArr.filter((curVal, i) => {
      return i !== index;
    })
    setTextInputArr(filterData)
  }

  console.log(908080,textInputArr)

    

  return (
    <>
      <TaskInput setTextInputArr={setTextInputArr} textInputArr={textInputArr} />
      <TaskList textInputArr={textInputArr} handleDelete={handleDelete } />
    </>
  )
}

export default App;
