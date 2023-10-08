import React from 'react'
import { SignUp } from '../components/InputTweet'
import { InputBox } from '../components/Input'
import { Create_acc_Button } from '../components/Buttons'

function Login1() {
  return (
    // I should have used gap :32px but i have adjusted paddings & margin to get same 32px gap
    <main className='px-[15px] pb-[20px]  justify-start'>
        <SignUp>Step 1 of 4</SignUp>
        <h1 className='text-2xl font-bold '>Create your account</h1>
        <article className='flex flex-col gap-[32px] my-[20px]'>
            <InputBox label={'Name'} />
            <InputBox   label={'Email'} />
            <section>
            <h1 className="">Date of birth</h1>
            <p className="text-sm my-[8px] text-gray-500">This is not shown publicly.Confirm your age , even this accoutn is for bussiness , a pet or something else</p>
            </section>
            <section className="grid grid-cols-4 ">
                <InputBox label={'Month'} classname={"col-span-2"} />
                <InputBox label={'Date'}   />
                <InputBox label={'Year'}   />
            </section>
        </article>
        <footer className='absolute bottom-0 flex justify-center w-full '>
        <Create_acc_Button disabled={true} className=''>Create account</Create_acc_Button>

        </footer>
    </main>
  )
}

export default Login1