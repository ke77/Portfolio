import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({ isDarkMode }) => {
     return (
          <div className='mt-14'>
               <div className='text-center -space-y-10'>
                    <Image src={ isDarkMode ? assets.logo_dark : assets.logo } alt='' className='w-36 mx-auto' />

                    <div className='w-max flex items-center gap-2 mx-auto'>
                         <Image src={ isDarkMode ? assets.mail_icon_dark : assets.mail_icon } alt='' className='w-6' />
                         <Link href='mailto:agbakpeykelvin@gmail.com'>agbakpeykelvin@gmail.com</Link>
                    </div>
               </div>

               <div className='text-center sm:flex items-center justify-between border-t border-gray-300 mx-[10%] mt-12 py-6'>
                    <p>Copyright &copy; 2025 Kelvin Kobby</p>

                    <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                         <li><Link href='https://github.com/ke77' target='_blank'>Github</Link></li>
                         <li><Link href='https://www.linkedin.com/in/kelvin-agbakpey-2a6b74303' target='_blank'>LinkedIn</Link></li>
                         <li><Link href='/sample-resume.pdf' target='_blank'>Resume</Link></li>
                    </ul>
               </div>

          </div>
     )
}

export default Footer