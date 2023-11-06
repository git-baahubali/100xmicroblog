import React, { useState, useReducer } from 'react'
import Todo_component from '../components/Todo_component'

const ACTION = {
    DELETE: 'delete',
    EDIT: 'edit'
}
function reducer(state, action) {
    switch (action.type) {
        case ACTION.EDIT:

            break;
        case ACTION.DELETE:

            break;

        default:
            return {state}
            break;
    }
}
function Reducer() {
    const [state, dispatch] = useReducer(reducer, { todos: [] })
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState('')

    return (
        <div>
            <input type="text" className='p-2 m-auto  text-black text-xl' value={'value'} onChange={e => e.target.value} />

            {todos.map(todo => {

                return <Todo_component id={todo.id} reducer={'reducer'} />

            })}
        </div>
    )
}

export default Reducer