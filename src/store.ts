import todo from './slices/todo'

import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
        [todo.reducerPath]: todo.reducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export default store
