import React from 'react';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';

const About = () => {
     return (
          <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
               <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
               <h2 className='text-center mb-2 text-5xl font-ovo'>About me</h2>

               <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                    <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                         <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                    </div>

                    <div className='flex-1'>
                         <p className='text-[17px] mb-10 max-w-2xl font-ovo'>
                              I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                         </p>

                         <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl'>
                              {infoList.map(({icon, iconDark, title, description}, i) => (
                                   <li key={i} className='border-[0.5px] border-gray-400 rounded-xl px-5 py-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:border-gray-100 transition duration-500 hover:shadow-md'>
                                        <Image src={icon} alt={title} className='w-9 mt-3' />
                                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                        <p className='text-gray-600 text-[14.3px] leading-4'>{description}</p>
                                   </li>
                              ))}
                         </ul>

                         <h4 className='mt-8 mb-4 text-gray-700 font-ovo text-lg'>Tools I use</h4>

                         <ul className='flex items-center gap-3 sm:gap-5'>
                              {toolsData.map((tool, index) => (
                                   <li key={index} className='flex items-center justify-center w-11 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-md hover:-translate-y-1 duration-500'>
                                        <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                                   </li>
                              ))}
                         </ul>

                    </div>
               </div>

          </div>
     )
}

export default About