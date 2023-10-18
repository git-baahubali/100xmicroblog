import React from 'react'
import { SignUp } from '../components/InputTweet'

function Profile() {
    return (
        <div>
            <header className="w-full h-[150px] relative">
                <img src="Images/profile_wall.jpg" alt="" className='object-cover w-full h-full' />
                <img src="Images/user-avatar.png" alt="" srcset="" className='w-[68px] h-[68px] absolute top-[115px] left-[20px] ' />
            </header>

            <div className='w-screen flex flex-col items-start my-2 mx-[0px] border-0 px-[20px]'>
                <button className="border border-twitter-blue-default place-self-end px-[20px] py-[8px] rounded-full">Edit Profile</button>

                <h1 className="text-2xl font-bold">aarushee reddy</h1>
                <h1 className="text-gray-600">@aarushee_reddy</h1>

                <article>Digital Goodies Team - Web & Mobile UI.UX development; Graphics; Illustrations</article>

                <section className='grid grid-cols-2 gap-y-[16px]'>

                    <p className="text-twitter-blue-default inline">
                        <img src="Images/link-icon.svg" alt="link icon" className='inline' /> pizerlsellz.io</p>

                    <p className="text-gray-600">
                        <img src="Images/calendar-icon.svg" alt="Calender icon" className='inline' /> Joined September 2018</p>

                    <h1 >217 <span className="text-gray-600">Follwing</span ></h1>

                    <h1 >118 <span className="text-gray-600">Follwers</span ></h1>
                </section>





            </div>

            <section className='bg-sky-700 px-4 py-2 rounded m-auto my-2 flex justify-between items-center'>
       
      <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Edit_profile'>← prev</a>
      {/* <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/'>next  →</a> */}
      </section>

        </div>
    )
}

export default Profile