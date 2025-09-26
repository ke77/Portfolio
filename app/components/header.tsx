import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets.js';
import Link from 'next/link';

const Header = () => {
     return (
          <div className='w-11/12 max-w-3xl text-center mx-auto flex h-screen flex-col items-center justify-center gap-4'>
               <div>
                    <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
               </div>

               <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                    Hi! I'm Kelvin Kobby  <Image src={assets.hand_icon} alt='' className='w-7' /> 
               </h3>

               <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>frontend developer based in Accra.</h1>
               <p className='max-w-2xl mx-auto font-ovo text-md'>
                    I am a frontend developer from Accra, Ghana with 4 years of experience in...
               </p>

               <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <Link href='#contact' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                         Connect with me 
                         <Image src={assets.right_arrow_white} alt='' className='w-4' />
                    </Link>

                    <Link href='/sample_resume.pdf' className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2' download>
                         My resume 
                         <Image src={assets.download_icon} alt='' className='w-4' />
                    </Link>
               </div>
          </div>
     )
}

export default Header