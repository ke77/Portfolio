import React from 'react';
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
// import { VscGithub } from 'react-icons/vsc';
import { TbBrandGithubFilled } from 'react-icons/tb';

const Work = () => {
     return (
          <div id='my-work' className='border max-w-6xl w-full px-[12%] py-10 scroll-mt-20 mx-auto'>
               <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
               <h2 className='text-center mb-2 text-5xl font-ovo'>My latest work</h2>

               <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                    Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
               </p>
               
               {/* work data */}
               <div className='lg:w-5xl lg:max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5 md:gap-6'>
                    { workData.map((project, index) => (
                         <div key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'>
                              <div className='bg-white w-11/12 rounded-md absolute bottom-3.5 left-1/2 -translate-x-1/2 py-2.5 px-4 flex items-center justify-between duration-500 group-hover:bottom-5'>
                                   <div>
                                        <h2 className='font-semibold'>{project.title}</h2>
                                        <p className='text-sm text-gray-700'>{project.description}</p>
                                   </div>

                                   <div className='w-9 flex items-center justify-center tranition'>
                                        <Image src={project.logo} alt='' width={25} height={5} />
                                   </div>
                              </div>
                         </div>
                    )) }
               </div>

               <Link href='https://github.com/ke77' target='_blank' className='w-max flex items-center justify-center gap-3 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-2.5 px-8 mx-auto my-20 text-md hover:bg-lightHover duration-500'>
                    Visit my Github 
                    {/* <Image src={assets.right_arrow_bold} alt='' /> */}
                    <TbBrandGithubFilled size={20} />
               </Link>
          </div>
     )
}

export default Work