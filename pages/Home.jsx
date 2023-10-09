import React from 'react'
import { Navbar } from '../components/Navbar'
import Tweet from '../components/Tweet'

function Home() {
  return (
    <div>
        <header className='flex justify-between px-[16px] py-[12px]'>
            <img src="Images/user-avatar.png" alt="user avatar" className='justify-self-start' />
            {/* <img src="Images/100.svg" alt="" srcset="" /> */}
            <h1 className="text-2xl">100x</h1>
            <img src="Images/user-avatar.svg" alt="user avatar" className='opacity-0 pointer-events-none' />
        </header>
        <Navbar />
        <main>
            <Tweet />
        </main>
    </div>
  )
}

export default Home