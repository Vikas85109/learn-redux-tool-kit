import { configureStore } from '@reduxjs/toolkit'
import { TaskSlice } from './redux/reducers/TaskSlice'

export const store = configureStore({
  reducer: {
    task: TaskSlice
  },
})