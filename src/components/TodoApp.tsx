import { RootState }  from '../store';
import { usePagination } from '../hooks/usePagination'

import cs from './TodoApp.module.css'
import inputCs from './Input.module.css'

import { NewTodo } from './NewTodo';
import { Todos } from './Todos';
import { PagerProps, Pager } from './Pager';
import { Status, StatusBar } from './StatusBar';

import React, { useState, useDeferredValue, memo } from 'react';
import { useSelector } from 'react-redux';


const NewTodoM = memo(({ ...props }) => {
    return (
        <NewTodo {...props} />
    )
})

const PagerM = memo(({ ...props }: PagerProps) => {
    return (
        <Pager {...props} />
    )
})


type TodoAppProps = {
    pageCap: number
}

const TodoApp: React.FC<TodoAppProps> = ({ pageCap }) => {
    const todos = useSelector((state: RootState) => state.todo)
    const [ status, setStatus ] = useState<Status>('any')
    const [ substring, setSubstring ] = useState<string>('')
    const defferedSubstring = useDeferredValue(substring)
    const [ paginatedTodos, pageIx, setPageIx ] = usePagination(pageCap, todos)

    const getCurStatus = (s: Status): void => {
        setStatus(s)
    }

    const search: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
        setSubstring(ev.target.value)
    }

    const pagesCount = Math.ceil(todos.length / pageCap)


    return (
        <div className={cs.root}>
            <main className={`${cs.todo} ${cs.root__todo}`}>
                <h1 className={cs['todo__title']}>
                    Todos
                </h1>
                <input
                    onChange={search}
                    placeholder='Pattern to search by'
                    className={inputCs['input']}
                    value={substring}
                />
                <NewTodoM key={todos.length} />
                <Todos
                    status={status}
                    substring={defferedSubstring}
                    todos={paginatedTodos}
                />
                <PagerM
                    setPageIx={setPageIx}
                    pageIx={pageIx}
                    pagesCount={pagesCount}
                />
                <StatusBar
                    getCurStatus={getCurStatus}
                    todosCount={todos.length}
                />
            </main>
        </div>
    )
}


export { TodoApp }
