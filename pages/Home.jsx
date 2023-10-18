import React from 'react'
import { Navbar } from '../components/Navbar'
import Tweet from '../components/Tweet'
import Hamburger_fa from '../components/Hamburger_fa'

function Home() {
  return (
    <div>
        <header className='flex items-start justify-between px-[16px] py-[12px] border '>
            <Hamburger_fa classname={"h-[32px]"} />
            {/* <img src="Images/100.svg" alt="" srcset="" /> */}
            <h1 className="text-2xl">100x</h1>
            <img src="Images/user-avatar.png" alt="user avatar" className='block' />
        </header>
        <Navbar />``
        <main>
            <Tweet />
        </main>
        <button className='absolute right-[17px] w-[64px] h-[64px] bottom-4 text-3xl  rounded-full
        bg-twitter-blue-default p-[16px]'>
            <p className="text-center">+</p>
        </button>
        <section className='bg-sky-700 px-4 py-2 rounded m-auto my-2 flex justify-between items-center'>
       
      <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Create1'>← prev</a>
      <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Edit_profile'>next  →</a>
      </section>
    </div>
  )
}

export default Home