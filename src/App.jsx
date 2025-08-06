import { useState } from "react";
import TaskInput from "./compoments/TaskInput";
import TaskList from "./compoments/TaskList";
import ButtonAdd from "./compoments/ButtonAdd";
import InputField from "./compoments/InputField";
import ListItem from "./compoments/ListItem";

function App() {

  const [textInputArr, setTextInputArr] = useState([])
  const [textData, setTextData] = useState('')
  const [isCheckEditable, setIsCheckEditable] = useState(false)

  const handleDelete = (data, index) => {
    const filterData = textInputArr.filter((curVal, i) => {
      return i !== index;
    })
    setTextInputArr(filterData)
  }

  

  return (
    <>
      
      
      <InputField textData={textData} setTextData={setTextData} isCheckEditable={isCheckEditable} />
      <ListItem textData={textData} setTextData={setTextData} setIsCheckEditable={setIsCheckEditable} />
      
      {/* <TaskInput setTextInputArr={setTextInputArr} textInputArr={textInputArr} />
      <ButtonAdd/>
      <TaskList textInputArr={textInputArr} handleDelete={handleDelete} /> */}
      

    </>
  )
}

export default App;
