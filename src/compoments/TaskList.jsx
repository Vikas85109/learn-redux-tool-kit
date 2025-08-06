import { useState } from "react"

const TaskList = ({ textInputArr, handleDelete }) => {
  const [checkDone,setCheckDone]=useState(false)

  const handleDone = () => {
    setCheckDone(!checkDone)
  }

  
  
  return (
    <div className='text-center'>
      <ul>
        {textInputArr.length > 0 &&  textInputArr?.map((curVal, i) => {
          return <li key={i}>
            <p className={`textArea`} style={{ textDecoration: checkDone ? "line-through" : "" }}>{curVal}</p>
            <p><button className='done' onClick={handleDone}>{!checkDone ?"Done" :"Undo"}</button></p>
            <p><button className='delete' onClick={() => handleDelete(curVal,i)}>Delete</button></p>
          </li>
        })}
       
       
      </ul>
    </div>
  )
}

export default TaskList