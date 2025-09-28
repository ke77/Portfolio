import React from 'react';
import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';

const About = ({ isDarkMode }: any) => {
     return (
          <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1 }}
               id='about' className='w-full px-[12%] py-10 scroll-mt-20'
          >
               <motion.h4 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-center mb-2 text-lg font-ovo'
               >
                    Introduction
               </motion.h4>
               <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }} 
                    className='text-center mb-2 text-5xl font-ovo'
               >
                    About me
               </motion.h2>

               <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }} 
                    className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
               >
                    <motion.div 
                         initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.6 }} 
                         className='w-64 sm:w-80 rounded-3xl max-w-none'
                    >
                         <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ duration: 0.6, delay: 0.8 }} 
                         className='flex-1'
                    >
                         <p className='text-[17px] mb-10 max-w-2xl font-ovo'>
                              I am a Frontend Developer with more than two years of experience in the field and passion for building real world solutions with tech. I am mainly a web developer with some experience and growing interest in mobile app development and AI integration into software. 
                         </p>

                         <motion.ul 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 1 }} 
                              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl'
                         >
                              {infoList.map(({icon, iconDark, title, description}, i) => (
                                   <motion.li 
                                        // whileHover={{ scale: 1.05 }}
                                        key={i} className='border-[0.5px] border-gray-400 rounded-xl px-5 py-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:border-gray-100 transition duration-500 hover:shadow-md dark:border-white/60 dark:hover:shadow-white dark:hover:bg-darkHover/50 '
                                   >
                                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-9 mt-3' />
                                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                        <p className='text-gray-600 text-[14.3px] leading-4 dark:text-white/80'>{description}</p>
                                   </motion.li>
                              ))}
                         </motion.ul>

                         <motion.h4 
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 1.3 }} 
                              className='mt-8 mb-4 text-gray-700 font-ovo text-lg dark:text-white/80'
                         >
                              Tools I use
                         </motion.h4>

                         <motion.ul 
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: 1.5 }} 
                              className='flex items-center gap-3 sm:gap-5'
                         >
                              {toolsData.map((tool, index) => (
                                   <motion.li 
                                        whileHover={{ scale: 1.1 }}
                                        key={index} className='flex items-center justify-center w-11 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-md hover:-translate-y-1 duration-500'
                                   >
                                        <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                                   </motion.li>
                              ))}
                         </motion.ul>

                    </motion.div>
               </motion.div>

          </motion.div>
     )
}

export default About