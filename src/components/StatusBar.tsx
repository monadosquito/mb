import { clearCompleted as clearCompletedTodos } from '../slices/todo'
import cs from './StatusBar.module.css'
import btnCs from './Btn.module.css'

import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';


type Status = 'inProgress' | 'done' | 'any'


type StatusBarProps = {
    getCurStatus: (s: Status) => void
    todosCount: number
}

const StatusBar: FC<StatusBarProps> = ({ getCurStatus, todosCount }) => {
    console.log('status bar')
    const dispatch = useDispatch()
    const [ curStatus, setCurStatus ] = useState<Status>('any')
        
    const changeStatus = (s: Status) => () => {
        setCurStatus(s)
        getCurStatus(s)
    }

    const clearCompleted = () => {
        dispatch(clearCompletedTodos())
    }

    const Btn = ({ status, label }: { status: Status, label: string }) => (
        <button
            onClick={changeStatus(status)}
            className={
                btnCs['btn']
                + ' '
                + (curStatus === status ? btnCs['btn_cur'] : '')
            }
            type='button'
        >
            {label}
        </button>
    )


    return (
        <aside className={cs['status-bar']}>
            <span>
                {`${todosCount} items left`}
            </span>
            <div>
                <Btn status='any' label='All' />
                <Btn status='inProgress' label='Active' />
                <Btn status='done' label='Completed' />
            </div>
            <button onClick={clearCompleted} className={btnCs['btn']} >
                Clear completed
            </button>
        </aside>
    )
}


export type { Status }
export { StatusBar }
