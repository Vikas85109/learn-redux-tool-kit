import { useDispatch, useSelector } from "react-redux"
import { itemArrDataRemove, itemArrDataEdit } from "../redux/reducers/TaskSlice";
import { useState } from "react";

const ListItem = ({ setTextData, setIsCheckEditable }) => {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
 
  const dispatch =useDispatch();
  const data = useSelector((state) => state?.task?.itemArr);

  const handleEdit = (id, name) => {
    // setIsCheckEditable(true)
    // setTextData(name)
    setEditId(id);
    setEditName(name);

  }
  const handleSave = () => {
    dispatch(itemArrDataEdit({ id: editId, name: editName }));
    setEditId(null);
    setEditName("");
  };

 
  return (
    <div>
      <ul>
        {data?.map((curVal, i) => {
          return <li key={curVal?.id} style={{ marginTop: "10px" }}>
            {editId === curVal.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                {curVal?.name}
                <button onClick={() => handleEdit(curVal.id, curVal.name)}>Edit</button>
                <button onClick={() => dispatch(itemArrDataRemove(curVal?.id))}> Remove</button>

              </>
            )}
          </li>
        })
          }
      </ul>
    </div>
  )
}

export default ListItem
  