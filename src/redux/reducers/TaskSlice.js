import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  getDataArr:[],
}

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    getArryData: (state, action) => {
      state.getDataArr.push(action.payload)
      },
   
  },
})

export const { getArryData } = TaskSlice.actions

export default TaskSlice.reducer