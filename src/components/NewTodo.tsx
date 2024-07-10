import { add as addTodo } from '../slices/todo'
import formCs from './NewTodo.module.css'
import inputCs from './Input.module.css'

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const NewTodo: React.FC = () => {
    console.log('new todo')
    const dispatch = useDispatch()
    const [ text, setText ] = useState<string>('')

    const edit: React.ChangeEventHandler<HTMLInputElement> = (ev): void => {
        setText(ev.target.value) 
    }

    const add: React.FormEventHandler<HTMLFormElement> = (ev): void => {
        ev.preventDefault()
        dispatch(addTodo({ text }))
    }

    return (
        <form onSubmit={add} className={`${formCs['form']} ${'todo__form'}`}>
            <input
                onChange={edit}
                className={inputCs['input']}
                autoFocus
                placeholder='What needs to be done?'
                value={text}
            />
            <button type='submit' style={{ display: 'none' }} >
            </button>
        </form>
    );
}


export { NewTodo }
