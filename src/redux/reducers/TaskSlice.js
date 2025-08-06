import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getDataArr:[],
}

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getArryData: (state, action) => {
      state.getDataArr.push([action.payload])
      },
    getArryDataDelete: (state, action) => {
      state.getDataArr = state.getDataArr.filter(item => item.id !== action.payload);
      },
   
  },
})

export const { getArryData, getArryDataDelete } = TaskSlice.actions

export default TaskSlice.reducer