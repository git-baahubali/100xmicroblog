import React from 'react'
import { SignUp } from '../components/InputTweet'
import { InputBox } from '../components/Input'
import { Create_acc_Button, Signup_Button } from '../components/Buttons'

function Create2() {
  return (
    // I should have used gap :32px but i have adjusted paddings & margin to get same 32px gap
    <main className='px-[15px] pb-[20px]  justify-start'>
        <SignUp>Step 2 of 4</SignUp>
        <h1 className='text-2xl font-bold '>Create your account</h1>
        <article className='flex flex-col gap-[32px] my-[20px]'>
            <InputBox label={'Name'} tick={true}/>
            <InputBox   label={'Email'} tick={true}/>
            {/* <InputBox   label={'Date of Birth'} tick={true}/> */}
            
        </article>
        <footer className='absolute bottom-0 flex justify-center w-full '>
<Signup_Button>Sign up</Signup_Button>

        </footer>
        <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Create1'>← prev</a>
      <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Create3'>next  →</a>

    </main>
  )
}

export default Create2