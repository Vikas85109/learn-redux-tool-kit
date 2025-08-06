import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './redux/reducers/TaskSlice'

export const store = configureStore({
  reducer: {
    task: taskReducer, 
  },
})