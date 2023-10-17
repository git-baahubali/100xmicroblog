import React from 'react';
import { useRouter } from 'next/router';
import { Create_acc_Button, Signup_Button } from '../components/Buttons'
import Link from 'next/link';


function Create0() {
  //! do not use router stick to <Link> .else navigation will break
  // const router = useRouter();
  // if (!router.isReady) return null;
  // function gotoLogin1(){
  //   router.push('/Login1');
  // }

  return (
    <div className='flex flex-col justify-center h-screen w-screen '>
      <h1 className="w-full py-[12px] px-[16px] text-center text-3xl absolute top-0">100X</h1>
      <main className='flex flex-col justify-center gap-1 items-start px-[28px] box-content'>
        <h3 className="text-3xl ">Hapenning now</h3>
        <p className='mb-[40px]'>Join today.</p>
        <Link href={'/Create1'}>
          <Create_acc_Button >Create account</Create_acc_Button>
        </Link>
        <div className="my-[40px] w-full flex justify-center items-center gap-1">
          <p className='h-[1px] bg-white ' style={{ width: 'calc(min(155px, 40vw))' }}></p>
          <p>or</p>
          <p className='h-[1px] bg-white ' style={{ width: 'calc(min(155px, 40vw))' }}></p>
        </div>
        <p className='mb-[20px]'>Already have an account?</p>
        <Link href={''}>
          <Signup_Button  >Sign in</Signup_Button>
        </Link>
        {/* <Signup_Button onClick={gotoLogin1} >Sign in</Signup_Button> */}
      </main>
    </div>
  )
}

export default Create0