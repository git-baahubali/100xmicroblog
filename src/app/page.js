'use client';

import Image from 'next/image'
import { Create_acc_Button, Follow_Button, Signup_Button, Following_Button, Post_Button, Home_icon, Group_icon } from '../../components/Buttons';
import { Navbar } from '../../components/Navbar';
import { InputBox, SearchBox, TweetBox} from '../../components/Input';
import SwipeButton from '../../components/Swipe';
import { InputTweet, SignUp } from '../../components/InputTweet';
import Login0 from '../../pages/Login0';
import Login1 from '../../pages/Login1';

// import SwipeToActivateComponent from '../../components/Swipe';

function handleSwipe() {
  console.log("Hi");
}

export default function Home() {

  return (
    <main>
      {/* <Create_acc_Button disabled={false}>Create Account</Create_acc_Button>
      <Signup_Button >Sign up</Signup_Button>
      <Follow_Button disabled={false}>Follow</Follow_Button>
      <Following_Button />
      <Post_Button disabled={'1'} />
      <Navbar />
      <Home_icon selected={true}/>
      <Group_icon selected={true}/>
 
      <main>
        <h1>Assignment 1.2</h1>
        <InputBox />
        <TweetBox/>
        <SearchBox />
        <InputTweet />
        <SignUp />
        
      </main> */}

      {/* <Login0 /> */}
      <Login1 />
    </main>

  )
}
