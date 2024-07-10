import { RootState }  from '../store';
import { complete as completeTodo } from '../slices/todo'

import cs from './TodoItem.module.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


type TodoItemProps = {
    id: number
}

const TodoItem: React.FC<TodoItemProps> = ({ id }) => {
    const dispatch = useDispatch()
    const todo = useSelector((state: RootState) =>
        state.todo.find(todo => todo.id === id)
    )

    if (!todo) return null

    const complete = (id: number) => () => {
        dispatch(completeTodo(id))
    }

    return (
        <div className={cs['todo-item']}>
            <input
                onClick={complete(id)}
                className={`${cs['radio']} ${cs['todo-item__radio']}`}
                onChange={() => {}}
                checked={todo.done}
                type='radio'
            />
            <span
                className={
                    cs['todo-item__text']
                    + ' '
                    + (todo.done ? cs['todo-item__text_done'] : '')
                }
            >
                {todo.text}
            </span>
        </div>
    )
}


export { TodoItem }
