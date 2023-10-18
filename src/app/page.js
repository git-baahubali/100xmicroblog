'use client';

import Image from 'next/image'
// import './globals.css';
import { Create_acc_Button, Follow_Button, Signup_Button, Following_Button, Post_Button, Home_icon, Group_icon } from '../../components/Buttons';
import { Navbar } from '../../components/Navbar';
import { InputBox, SearchBox, TweetBox} from '../../components/Input';
import SwipeButton from '../../components/Swipe';
import { InputTweet, SignUp } from '../../components/InputTweet';
import Login0 from '../../pages/Create0';
import Login1 from '../../pages/Create1';
import NavigationBar from '../../components/Navigationbar';

// import SwipeToActivateComponent from '../../components/Swipe';

function handleSwipe() {
  console.log("Hi");
}

export default function Home() {

  return (
    <main>
      
      <Login0 />
      <section className='bg-sky-900 px-4 py-2 rounded m-auto my-2'>
        Backend in progress
        {/* <NavigationBar /> */}
      </section>
    </main>

  )
}
