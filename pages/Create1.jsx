import React, { useState } from 'react'
import { SignUp } from '../components/InputTweet'
import { InputBox } from '../components/Input'
import { Create_acc_Button } from '../components/Buttons'
import Link from 'next/link';
import { useAppContext } from '@/app/AppContext';
import { createAccountWithEmail } from '@/utilities';


function Create1() {

  const { Email, setEmail, Name, setName } = useAppContext();
  const [Password, setPassword] = useState('')
  const handleCreateAccount = async () => {
    const { user, error } = await createAccountWithEmail(Email, Password, handleSuccess, handleError);

    if (user)
      handleSuccess();
    else if (error)
      handleError();
  };

  const handleSuccess = (user) => {
    // Navigate to the home page or other actions
    console.log('User data:', user);

  };

  const handleError = (errorMessage) => {
    // Display an error message to the user
    alert('Error: ' + errorMessage);
  };
  function test() {
    console.log("email: ", Email, "name: ", Name);
  }

  return (
    // I should have used gap :32px but i have adjusted paddings & margin to get same 32px gap
    <main className='px-[15px] pb-[20px]  justify-start'>
      <Link href={'/Create0'}><SignUp >Step 1 of 4</SignUp></Link>

      <h1 className='text-2xl font-bold '>Create your account</h1>
      <article className='flex flex-col gap-[32px] my-[20px]'>
        <InputBox label={'Name'} setter={setName} />
        <InputBox label={'Email'} setter={setEmail} />
        <InputBox label={'Password'} isPassword={true} setter={setPassword} />
        <section>
          <h1 className="">Date of birth</h1>
          <p className="text-sm my-[8px] text-gray-500">This is not shown publicly.Confirm your age , even this accoutn is for bussiness , a pet or something else</p>
        </section>
        {/* <section className="grid grid-cols-4 ">
                <InputBox label={'Month'} classname={"col-span-2"} />
                <InputBox label={'Date'}   />
                <InputBox label={'Year'}   />
            </section> */}
      </article>
      <footer className='absolute bottom-0 flex justify-center w-full '>
        <Create_acc_Button disabled={true} className='' onClick={handleCreateAccount}>Create account</Create_acc_Button>

      </footer>
      <section className='bg-sky-900 px-4 py-2 rounded m-auto my-2'>
      Backend under development. Preview the application using the previous and next buttons.
        {/* <NavigationBar /> */}

        <section className='fixed bottom-4 left-2 bg-sky-700 px-4 py-2 rounded m-auto my-2 flex w-full justify-between items-center'>
          <a className='bg-sky-500  px-4 rounded-full' href='http://microblogging100x-dadb27e921ca.herokuapp.com/Create0'>← prev</a>
          <a className='bg-sky-500  px-4 rounded-full' href='http://microblogging100x-dadb27e921ca.herokuapp.com/Home'>next  →</a>
        </section>
      </section>
    </main>
  )
}

export default Create1
