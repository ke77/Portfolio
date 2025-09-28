import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { certificationsData } from '@/assets/assets';


const Certifications = () => {

     return (
          <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 1 }}
               id='certifications' 
               className='lg:min-w-3xl flex flex-col items-center mx-auto w-full px-[12%] py-10 scroll-mt-20 mb-14'
          >
               <motion.h4 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-center mb-2 text-lg font-ovo'
               >
                    My achievements
               </motion.h4>
               <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }} 
                    className='text-center mb-2 text-5xl font-ovo'
               >
                    Certifications
               </motion.h2>

               <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
               >
                    Certifications that validate my skills and expertise in various technologies and frameworks.
               </motion.p>

               <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }} 
                    className='w-[115%] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 my-16'
               >
                    {certificationsData.map((certification, index) => (
                         <motion.div
                              key={certification.id}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: index * 0.2 }}
                              whileHover={{ scale: 1.02 }}
                              className='flex flex-col sm:flex-row items-center gap-4 pt-6 pb-3 px-3 sm:px-5 border-[0.5px] border-gray-400 rounded-xl cursor-pointer hover:bg-lightHover hover:-translate-y-1 hover:border-gray-100 transition duration-500 hover:shadow-md dark:border-white/60 dark:hover:shadow-white dark:hover:bg-darkHover/50'
                         >
                              {/* Certificate Image */}
                              <motion.div 
                                   initial={{ opacity: 0, scale: 0.9 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                                   className='w-full sm:w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden flex flex-row items-center bg-no-repeat bg-cover'
                                   style={{ backgroundImage: `url(${certification.image})` }}
                              >
                              </motion.div> 

                              {/* Certificate Details */}
                              <motion.div
                                   initial={{ opacity: 0, x: 20 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                                   className='flex-1 text-center sm:text-left'
                              >
                                   <h3 className='text-lg font-semibold text-gray-700 dark:text-white mb-1'>
                                        {certification.title}
                                   </h3>
                                   <p className='text-gray-600 dark:text-white/80 mb-1'>
                                        {certification.company}, {certification.year}
                                   </p>
                              </motion.div>
                         </motion.div>
                    ))}
               </motion.div>
          </motion.div>
     );
}

export default Certifications