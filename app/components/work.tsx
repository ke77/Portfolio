import React from 'react';
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { motion } from 'motion/react';

const Work = ({ isDarkMode }: any) => {
     return (
          <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1 }} 
               id='my-work' className='max-w-6xl w-full px-[12%] py-10 scroll-mt-20 mx-auto flex flex-col lg:items-center'
          >
               <motion.h4 
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }} 
                    className='text-center mb-2 text-lg font-ovo'
               >
                    My portfolio
               </motion.h4>
               <motion.h2 
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-center mb-2 text-5xl font-ovo'
               >
                    My latest work
               </motion.h2>

               <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
               >
                    Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
               </motion.p>
               
               {/* work data */}
               <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className='lg:w-5xl lg:max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-8 sm:gap-5 md:gap-y-6 sm:gap-x-9 dark:text-black'
               >
                    { workData.map((project, index) => (
                         <motion.a 
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              href={project.link}
                              key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-top rounded-lg relative cursor-pointer group overflow-hidden'
                         >
                              <div className="absolute inset-0 bg-black/40"></div>
                              
                              <div className='bg-white w-11/12 rounded-md absolute bottom-3.5 left-1/2 -translate-x-1/2 py-2.5 px-4 flex items-center justify-between duration-500 group-hover:bottom-5 z-10'>
                                   <div>
                                        <h2 className='font-semibold'>{project.title}</h2>
                                        <p className='text-sm text-gray-700'>{project.description}</p>
                                   </div>

                                   <div className='w-9 flex items-center justify-center tranition'>
                                        <Image src={project.logo} alt='' width={30} height={5} />
                                   </div>
                              </div>
                         </motion.a>
                    )) }
               </motion.div>

               <motion.a 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    href='https://github.com/ke77' target='_blank' className='w-max flex items-center justify-center gap-3 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-2.5 px-8 mx-auto my-20 text-md hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
               >
                    Visit my Github 
                    {/* <Image src={assets.right_arrow_bold} alt='' /> */}

                    <TbBrandGithubFilled size={20} />
               </motion.a>
          </motion.div>
     )
}

export default Work