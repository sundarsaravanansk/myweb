import React from 'react';
import Image from 'next/image';

const Skillcontent = () => {
    return (
        <>
         <div className='flex flex-wrap -mx-4 flex-col-reverse md:flex-row'>
                    <div className='w-full md:w-2/4 flex-auto ver-cen'>
                    <div className="mb-4">
                            <h1 className='font-h2-lg'>Skills</h1>
                        </div>

                      
                        <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 '>
                           <ul className="Skillsli">
                            <li>Explore techniques for optimizing React performance, including memoization and lazy loading.</li>
                           <li>State Management ,Styling and Design,Performance Optimization</li>
                           <li>Develop soft skills such as effective communication, problem-solving, and collaboration, which are essential for working in a team environment and interacting with clients and stakeholders.</li>
                           </ul>
                        </div>
                       
                    </div>
                    <div className='items-center w-full md:w-2/4 flex-auto pb-12 md:pb-12 ver-cen'>
                      
                    <Image
                            src={"/Intro/Logo/about.png"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='max-w-96 DCimg'
                        />
                    
                    </div>


                </div>
          


    </>
    );
}

export default Skillcontent;
