import React from 'react'
import { Create_acc_Button, Signup_Button } from '../components/Buttons'


function Login0() {
  return (
    <div className='flex flex-col justify-center h-screen w-screen '>
        <h1 className="w-full py-[12px] px-[16px] text-center text-3xl absolute top-0">100X</h1>
        <main className='flex flex-col justify-center gap-1 items-start px-[28px] box-content'>
            <h3 className="text-3xl ">Hapenning now</h3>
            <p className='mb-[40px]'>Join today.</p>
            <Create_acc_Button >Create account</Create_acc_Button>
            <div className="my-[40px] w-full flex justify-center items-center gap-1">
                <p className='h-[1px] bg-white ' style={{ width: 'calc(min(155px, 40vw))' }}></p>
                <p>or</p>
                <p className='h-[1px] bg-white ' style={{ width: 'calc(min(155px, 40vw))' }}></p>
            </div>
            <p className='mb-[20px]'>Already have an account?</p>
        <Signup_Button >Sign in</Signup_Button></main>
    </div>
  )
}

export default Login0