import React,{useState} from 'react';
import Link from 'next/link';
import { InputBox } from '../components/Input'

function Edit_profile() {
const [Name, setName] = useState('');// saved here
const [Username, setUsername] = useState('');
const [Bio, setBio] = useState('');
const [Location, setLocation] = useState('');
const [Website, setWebsite] = useState('');

function handleSave() {
  
}

  return (
    <div className='px-[16px] '>
      {/* change profile wall */}
      <header className="flex justify-between items-center my-[12px]">
        <Link href={'/Profile'}>
        <img src="Images/profile-edit-1-arrow-left.svg" alt="" srcset="" />
        </Link>
        <p className="font-bold">Edit Profile</p>
        <button className="bg-white text-black font-bold text-lg py-[8px] px-[20px] rounded-full" onClick={handleSave}>Save</button>
      </header>

      {/* change avatar image */}
      <main className=' relative h-[200px] '>
        <img src="images/profile_wall.jpg" alt="" srcset="" className='object-cover w-full h-full' />
        <div className=' absolute w-full h-[200px]  top-0 left-0 flex justify-center items-center gap-2'>
          <img src="Images/profile-edit-1-material-symbols-add-a-photo-outline.svg" alt="" srcset="" className='p-2 rounded-full bg-gray-700' />
          <img src="Images/profile-edit-1-x.svg" alt="" srcset="" className='p-2 rounded-full bg-gray-700' />
          <div className="absolute w-[80px] h-[80px] left-[10px] bottom-[-12px] ">
            <img src="images/user-avatar.png" alt="" srcset="" className='w-full h-full'/>
            <img src="images/add-photo-icon.svg" alt="" srcset="" className='absolute top-[calc(50%-10px)] left-[calc(50%-12px)] w-[24px] h-[24px]'/>
          </div>
        </div>
      </main>

      {/* Edit fields input boxs */}
      <ul className='my-8 flex flex-col gap-[20px]'>
        <li><InputBox label={'Name'} value={Name}  setter={setName}/></li>
        <li><InputBox label={'Username'} value={''} setter={setUsername}/></li>

        <li>
          {/* Bio edit  */}
          <div className={`border-0 border-green-400 group relative flex  justify-start items-center bg-black  ${''}`}>
            <textarea
                type="text"
                id="label"
                className={`box-content ml-2 w-full h-[56px] block  border border-gray-300 bg-black rounded-lg
                 focus:border-blue-500 px-6 py-[16px] focus:outline-none`}
            />
            <label
                htmlFor="label"
                className="absolute top-[1rem] bg-black m-0 text-gray-500 text-sm  px-2 transition-all duration-300 
                group-hover:top-[-0.5rem] left-4 group-active:text-xs group-active:text-blue-500 group-hover:text-blue-500">
                {'Bio'}

            </label>
           

        </div>

        </li>
        <li><InputBox label={'Location'}  setter={setLocation}/></li>
        <li><InputBox label={'Website'} setter={setWebsite}/></li>
      </ul>
      

    </div>
  )
}

export default Edit_profile 


