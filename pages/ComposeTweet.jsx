import React from 'react'
import { Post_Button } from '../components/Buttons'

function ComposeTweet() {
  return (
    <div>
        <header className="flex justify-between px-[16px] py-[12px]">
            <img src="Images/close.svg" alt="" srcset="" />
            <Post_Button size={'s'}/>
        </header>
        <main className='flex p-[16px] gap-[12px]'>

                <img src="Images/user-avatar.png" alt="" srcset="" className='w-[36px] h-[36px]' />
                <textarea type="text" className='placeholder:text-gray-600 mt-[4px] mb-[8px]  max-w-xs bg-black outline-none 
                w-full h-[50vw]'  
                placeholder='Whats hapening?!'
                style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                }}/>
        </main>
    </div>
  )
}

export default ComposeTweet

