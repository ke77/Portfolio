import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '../../assets/assets.js';
import Link from 'next/link';


const Navbar = ({ isDarkMode, setIsDarkMode }) => {
     const [isScroll, setIsScroll] = useState(false)
     const sideMenuRef = useRef()

     const openMenu = () => {
          sideMenuRef.current.style.transform = 'translateX(-16rem)'
     }

     const closeMenu = () => {
          sideMenuRef.current.style.transform = 'translateX(16rem)'
     }


     useEffect(() => {
          window.addEventListener('scroll', () => {
               if (scrollY > 50) {
                    setIsScroll(true)
               } else {
                    setIsScroll(false)
               }
          })
     }, [])

     return (
          <>
               <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:bg-black dark:hidden'>
                    <Image src={assets.header_bg_color} alt='' className='w-full' />
               </div>

               <nav className={`w-full fixed px-3 xl:px-[5%] py-0 flex items-center justify-between z-50 dark:backdrop-blur-md ${isScroll ? ' bg-transparent bg-opacity-100 backdrop-blur-lg shadow-sm dark:bg-darkTheme/50 dark:shadow-white/20' : ''}`}>
                    <Link href='#'>
                         <Image src={isDarkMode ? assets.logo_dark : assets.logo} className={isDarkMode ? `w-24 cursor-pointer mr-8` : 'w-36 cursor-pointer mr-8'} alt='logo' />
                    </Link>

                    <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-16 py-3 font-ovo bg-opacity-50 transition duration-300 dark:ml-6 ${ isScroll ? 'bg-transparent shadow-none' : 'bg-white shadow-sm dark:bg-transparent' }`}>
                         <li><Link href='#top'>Home</Link></li>
                         <li><Link href='#about'>About me</Link></li>
                         <li><Link href='#services'>Services</Link></li>
                         <li><Link href='#my-work'>My work</Link></li>
                         <li><Link href='#contact'>Contact me</Link></li>
                    </ul>

                    <div className='flex items-center gap-2.5'>
                         <button onClick={() => setIsDarkMode(prev => !prev)}>
                              <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
                         </button>

                         <Link href='#contact' className='hidden lg:flex items-center gap-3 px-14 py-2 border border-gray-500 rounded-full ml-4 font-ovo'>
                              Contact 
                              <Image src={assets.arrow_icon} className='w-3' alt='arrow' /> 
                         </Link>

                         <button className='block md:hidden ml-3' onClick={openMenu}>
                              <Image src={assets.menu_black} alt='' className='w-6' />
                         </button>
                    </div>


                    {/* mobile menu */}

                    <ul ref={sideMenuRef} className='font-ovo flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                         <div className='absolute right-6 top-6' onClick={closeMenu}>
                              <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                         </div>

                         <li><Link href='#top'>Home</Link></li>
                         <li><Link href='#about'>About me</Link></li>
                         <li><Link href='#services'>Services</Link></li>
                         <li><Link href='#services'>My work</Link></li>
                         <li><Link href='#contact'>Contact me</Link></li>
                    </ul>
               </nav>
          </>
     )
}

export default Navbar