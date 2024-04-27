import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import IntroContent from './IntroContent';

const Intro = () => {
    return (
        <>
        <div id="Home" className='w-[100%] md:h-[100vh]'>
            <IntroContent/>
        </div>
          {/* test */}
         
          
            {/* <div className='hidden md:block p-6 relative top-20 '>
                <Marquee
                pauseOnHover
                className='cursor-pointer ' 
                >
                <h2 className='text-white font-[700] text-lg'>
                    <span className='text-2xl ml-3'>CAREER OBJECTIVE :</span> An organized smart working individual who can work 
                    underpressure seeking an entry level position to begin my career and
                    to expand my learning and knowledge and to grow my skills.
                </h2>
                </Marquee>
            </div> */}
            
       

        </>
        
    );
}

export default Intro;
