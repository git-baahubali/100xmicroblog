'use client';

import Image from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/services/supabase_client';
// import './globals.css';

//components
import { Create_acc_Button, Follow_Button, Signup_Button, Following_Button, Post_Button, Home_icon, Group_icon } from '../../components/Buttons';
import { Navbar } from '../../components/Navbar';
import { InputBox, SearchBox, TweetBox } from '../../components/Input';
import SwipeButton from '../../components/Swipe';
import { InputTweet, SignUp } from '../../components/InputTweet';
import Create0 from '../../pages/Create0';
import NavigationBar from '../../components/Navigationbar';
import Navigation from '../../components/Navigation';
import Reducer from '../../pages/Reducer';
import Memo from '../../pages/Memo';



export default function Main() {
  const router = useRouter();

  useEffect(() => {
    // supabase.auth.onAuthStateChange((event, session) => {
    //   if (event == 'SIGNED_IN') {
    //     console.log('SIGNED_IN', session);
    //     Router.push('/Home')
    //   };
    // })

    // return () => {

    // }

    (async () => {

      // const { data, error } = await supabase.auth.refreshSession()
      // console.log("session :", data);

    })()

  }, [])



  return (
    <main className=''>

      <Create0 />

      {/* <Reducer /> */}
      {/* <Memo /> */}
    </main>

  )
}
