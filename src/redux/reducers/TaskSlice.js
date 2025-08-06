import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getDataArr: [],
  itemArr: [
    { id: 1, name: "vikas" },
    { id: 2, name: "Sharma" },
    
  ]
}

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getArryData: (state, action) => {
      state.getDataArr.push([action.payload])
      },
    itemArrData: (state, action) => {
      const listitem = {
        id: state.itemArr.length + 1,
        name: action.payload
      }
      state.itemArr.push(listitem)
    },
    itemArrDataRemove: (state, action) => {
      state.itemArr = state.itemArr.filter(item => item.id !== action.payload);
    },
    
    itemArrDataEdit: (state, action) => {
      const { id, name } = action.payload;
      const index = state.itemArr.findIndex(item => item.id === id);
      if (index !== -1) {
        state.itemArr[index].name = name;
      }
    },
    
    getArryDataDelete: (state, action) => {
      state.getDataArr = state.getDataArr.filter(item => item.id !== action.payload);
    },
    
    reset: (state, action) => {
      state.itemArr=[]
    }
   
  },
})

export const { getArryData, getArryDataDelete, itemArrData, itemArrDataRemove, reset, itemArrDataEdit } = TaskSlice.actions

export default TaskSlice.reducer