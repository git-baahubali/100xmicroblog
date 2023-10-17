import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { InputBox } from '../components/Input'
import { SignUp } from '../components/InputTweet'
import { Create_acc_Button, Post_Button } from '../components/Buttons'
import Link from 'next/link';
import { signInWithEmail } from '@/utilities';


function Login() {
    // State variables to hold the email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignInSuccess = (data) => {
        // Navigate to the home page  on successful sign-in
        router.push('/Home');
      };
      
      const handleSignInError = (error) => {
        // Show an error message to the user 
        alert('Sign-in failed. Please check your email and password and try again.');
      };

    // Function to handle signing in with email and password
    const handleSignIn = () => {
        // Here you can call your authentication function with email and password
        console.log('Signing in with:', email, password);
        // Your authentication code here...
        signInWithEmail(email,password,handleSignInError,handleSignInSuccess);

    };
    return (
        <div>
            <main className='px-[15px] pb-[20px]  justify-start'>
                <SignUp >Login to your account</SignUp>

                <article className='flex flex-col items-center gap-[32px] my-[20px]'>
                    <InputBox label={'Email'} onChange={e => {setEmail(e.target.value);}}/>
                    <InputBox label={'Password'} onChange={e => setPassword(e.target.value)} eye={true} isPassword={true} />
                    <Link href={''} onClick={handleSignIn}>
                        <Create_acc_Button onClick={()=>{
                            
                        }}>Sign in</Create_acc_Button>
                    </Link>
                </article>
            </main>
        </div>
    )
}

export default Login