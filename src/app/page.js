'use client';

import Image from 'next/image'
// import './globals.css';
import { Create_acc_Button, Follow_Button, Signup_Button, Following_Button, Post_Button, Home_icon, Group_icon } from '../../components/Buttons';
import { Navbar } from '../../components/Navbar';
import { InputBox, SearchBox, TweetBox} from '../../components/Input';
import SwipeButton from '../../components/Swipe';
import { InputTweet, SignUp } from '../../components/InputTweet';
import Create0 from '../../pages/Create0';

import NavigationBar from '../../components/Navigationbar';

// import SwipeToActivateComponent from '../../components/Swipe';

function handleSwipe() {
  console.log("Hi");
}

export default function Home() {

  return (
    <main>
      
      <Create0 />
      
      
    </main>

  )
}
