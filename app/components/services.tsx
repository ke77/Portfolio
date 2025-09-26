import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData, assets } from '@/assets/assets';

const Services = () => {
     return (
          <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
               <h4 className='text-center mb-2 text-lg font-ovo'>What I offer</h4>
               <h2 className='text-center mb-2 text-5xl font-ovo'>My Services</h2>

               <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                    I am a frontend developer based in Accra with four years of experience in web development, and a bit of that time in app development as well as other skills in the development process.
               </p>

               <div className='max-w-3xl mx-auto grid grid-cols-2 gap-10 my-10'>
                    {
                         servicesData.map(({icon, title, description, link}, index) => (
                              <div key={index} className='flex flex-col justify-around border border-gray-400 rounded-lg px-8 py-16 hover:shadow-lg hover:border-gray-100 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-500'>
                                   <Image src={icon} alt='' className='w-10' />
                                   <h3 className='text-lg my-4 text-gray-700'>{title}</h3>

                                   <p className='text-md text-gray-600 leading-5'>{description}</p>

                                   <Link href={link} className='flex items-center gap-2 text-md mt-5'>
                                        Read more <Image src={assets.right_arrow} className='w-4' alt='' />
                                   </Link>
                              </div>
                         ))
                    }
               </div>
          </div>
     )
}

export default Services