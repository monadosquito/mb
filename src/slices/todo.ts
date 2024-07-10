import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Todo = {
    id: number
    text: string
    done: boolean
}


const initialState: Todo[] = []


const todo = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (
            todos,
            { payload: { text } }: PayloadAction<Omit<Todo, 'id' | 'done'>>,
        ) => {
            const newTodo: Todo = { id: todos.length + 1, text, done: false }
            todos.push(newTodo)
        },
        complete: (state, { payload: toCompleteId }: PayloadAction<number>) => {
            state.map((todo) => 
                todo.id === toCompleteId ? todo.done = !todo.done : todo
            )
        },
        clearCompleted: (todos) => {
            return todos.filter(({ done }) => !done)
        }
    },
})


export type { Todo }
export const { add, complete, clearCompleted } = todo.actions
export default todo
