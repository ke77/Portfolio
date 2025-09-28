import React from 'react'
import Image from 'next/image'
import { assets } from '../../assets/assets.js';
import { motion } from 'motion/react';

const Header = () => {
     return (
          <div className='w-11/12 max-w-3xl text-center mx-auto flex h-screen flex-col items-center justify-center gap-4'>
               <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
               >
                    <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
               </motion.div>

               <motion.h3

                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
               >
                    Hi! I'm Kelvin Kobby  <Image src={assets.hand_icon} alt='' className='w-7' /> 
               </motion.h3>

               <motion.h1
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'
               >
                    frontend developer based in Accra.
               </motion.h1>
               <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className='max-w-2xl mx-auto font-ovo text-md'
               >
                    I am a frontend developer from Accra, Ghana with more than two years of experience
               </motion.p>

               <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <motion.a
                         initial={{ y: 30, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ duration: 0.6, delay: 1 }}
                         href='https://www.linkedin.com/in/kelvin-agbakpey-2a6b74303' className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:shadow-xl dark:bg-transparent'
                    >
                         Connect with me 
                         <Image src={assets.right_arrow_white} alt='' className='w-4' />
                    </motion.a>

                    <motion.a
                         initial={{ y: 30, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ duration: 0.6, delay: 1.2 }}
                         href='/sample_resume.pdf' className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white hover:shadow-lg dark:text-black' download
                    >
                         My resume 
                         <Image src={assets.download_icon} alt='' className='w-4' />
                    </motion.a>
               </div>
          </div>
     )
}

export default Header