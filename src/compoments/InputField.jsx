import { useState } from "react";
import { useDispatch } from "react-redux";
import { itemArrData, reset } from "../redux/reducers/TaskSlice";

const InputField = ({ textData, setTextData, isCheckEditable } ) => {
  const dispatch = useDispatch();
  // const [textData,setTextData]=useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textData) {
      dispatch(itemArrData(textData))
      setTextData('')
    }
  }

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <input value={textData} type="text" name="" id="" onChange={(e) => setTextData(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
      <button onClick={() => dispatch(reset())}>Remove All</button>
    </div>
  )
}

export default InputField