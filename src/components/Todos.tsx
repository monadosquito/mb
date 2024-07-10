import { Todo } from '../slices/todo'
import cs from './Todos.module.css'

import { Status } from './StatusBar'
import { TodoItem } from './TodoItem'

import React from 'react'


type TodosProps = {
    status: Status
    substring: string
    todos: Todo[]
}


const Todos: React.FC<TodosProps> = ({ status, substring = '', todos }) => {
    console.log('todos')

    return (
        <div className={cs['todos']}>
            <ul className={cs['todos__main']}>
                {todos.filter(({ text, done }) => {
                    const p = () => {
                        switch(status) {
                            case('inProgress'): return !done
                            case('done'): return done
                            case('any'): return true
                        }
                    }
                    return p() && text.includes(substring)
                }).map(todo =>
                    <li key={todo.id}>
                        <TodoItem id={todo.id} />
                    </li>
                )}
            </ul>
            <div className={cs['todos__sub']}>
            </div>
            <div className={cs['todos__sub']}>
            </div>
        </div>
    );
}


export { Todos }
