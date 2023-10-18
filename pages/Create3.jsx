import React from 'react'
import { SignUp } from '../components/InputTweet'
import { InputBox } from '../components/Input'
import { Create_acc_Button, Signup_Button } from '../components/Buttons'

function Create3({email_id}) {
    return (
        // I should have used gap :32px but i have adjusted paddings & margin to get same 32px gap
        <main className='px-[15px] pb-[20px]  justify-start'>
            <SignUp>Step 3 of 4</SignUp>
            <h1 className='text-2xl font-bold '>We sent you a code</h1>
            <p className="text-sm my-[8px] text-gray-500">Enter it below to verify {email_id}</p>
            <article className='flex flex-col gap-[12px] my-[20px]'>
                <InputBox label={'Verification code'} tick={true} />
                <h1 className="text-twitter-blue-default text-xs text-end">Didn't receive a code?</h1>
            </article>
            <footer className='absolute bottom-0 flex justify-center w-full '>
                <Create_acc_Button disabled={true}>Next</Create_acc_Button>

            </footer>
            <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Create2'>← prev</a>
      <a className='bg-sky-500  px-4 rounded-full' href='http://localhost:3000/Create4'>next  →</a>

        </main>
    )
}

export default Create3;
