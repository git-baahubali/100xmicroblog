import React from 'react'

function Todo_component() {
    return (
        <div className='absolute top-[50%] left-auto'>
            <input type="text" className='p-2 m-auto  text-black text-xl' value={value} />
            <br />
            <button className='bg-sky-500 px-8 py-2 m-4 rounded-full'>edit</button>
            <button className='bg-sky-500 px-8 py-2 m-4 rounded-full'>delete</button>

        </div>
    )
}

export default Todo_component