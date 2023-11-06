import React, { useEffect } from 'react'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'
import Tweet from '../components/Tweet'
import Hamburger_fa from '../components/Hamburger_fa'
import { useRouter } from 'next/navigation'
import { signOut, storeTokens } from '@/utilities'


function Home() {
  const router = useRouter();

  function handleLogout() {
    console.log('inside handleLogout');
    signOut();
  }

  useEffect(() => {

    if (window.location.hash) {
      // Parse the hash for access token and remove tokens from the URL
      const { access_token, refresh_token } = parseHash(window.location.hash);
      // Securely store the tokens
      storeTokens(access_token, refresh_token);
      // Replace the URL with the base URL to remove the hash
      window.history.replaceState({}, document.title, "/");
    }

    function parseHash(hash) {
      const pairs = hash.slice(1).split('&');
      const result = {};
      pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        result[key] = value;
      });
      return result;

    }
  }
    , [])
  return (
    <div className=''>
      <aside id="sidebar" className='absolute '>

      </aside>
      <header className='flex items-start justify-between px-[16px] py-[12px] border '>
        <Hamburger_fa classname={"h-[32px]"} />
        {/* <img src="Images/100.svg" alt="" srcset="" /> */}
        <h1 className="text-2xl">100x</h1>
        <Link href={'/Profile'}>
          <img src="Images/user-avatar.png" alt="user avatar" className='block' />
        </Link>
      </header>
      <Navbar />``
      <main>
        <Tweet />
      </main>
      <button className='absolute right-[17px] w-[64px] h-[64px] bottom-4 text-3xl  rounded-full
        bg-twitter-blue-default p-[16px]'>
        <p className="text-center">+</p>
      </button>
      <button className='absolute left-[17px] bottom-0 h-[48px] bottom-4 text-3xl  rounded-full
        bg-twitter-blue-default px-4 py-2'>
        <p className="text-center " onClick={handleLogout}>Logout</p>
      </button>

    </div>
  )
}

export default Home