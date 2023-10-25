'use-client';
import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <div className='w-full flex justify-around items-center'>
      <Link href={'/Edit_profile'}>
      <button className="bg-sky-400 px-4 py-1 rounded-full ">prev</button>
      </Link>
      <Link href={'/Home'}>
      <button className="bg-sky-400 px-4 py-1 rounded-full ">next</button>
      </Link>

    </div>
  )
}

export default Navigation