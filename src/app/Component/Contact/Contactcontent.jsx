import React from 'react';
import Image from 'next/image';
import "./contact.css"

const Contactcontent = () => {
    return (
        <>
        
        <div className='flex flex-wrap -mx-4'>
                    <div className='w-full items-center md:w-2/4 md:h-[100vh] flex-auto px-4 ver-cen'>
                    <Image
                            src={"/Intro/Logo/Location.png"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='max-w-sm DCimg relative rotating'
                        />
                   
                       
                    </div>
                    <div className='w-full md:w-2/4 md:h-[100vh] flex-auto ver-cen'>
                        <div className="text-white">
                    <div className="mb-4">
                            <h2 className='font-h2-lg'>CONTACT</h2>
                        </div>

                      
                        <div className='mt-4'>
                            <h2 className='Subtitle'>Address</h2>
                            <div className='mt-2 lg:mt-3 '>
                            <p>3/28 Silattur POST, Aranthangi TALUK, <br />
                            Pudukkottai DISTRICT , Tamil Nadu - 614622
                            </p>
                        </div>
                        </div>
                   
                        <div className='relative  mt-4'>
                            <h2 className='Subtitle'>Phone</h2>
                            <div className='mt-2 lg:mt-3 '>
                            <p><a className='underline text-[#fff]' href="tel:+91 9655608252">+91 9655608252</a></p>
                        </div>
                        </div>
                    
                        <div className='mt-4 '>
                            <div className='flex items-center gap-2'>
                            <div>
                            <Image 
                           src={"/Intro/Logo/email.png"} 
                           alt='email' 
                           width={50}
                           height={50}
                           className='w-[25px] h-[25px] inline-block'
                           />
                            </div>
                            <div><h2 className='Subtitle'>Email</h2></div>
                            </div>
                            <div className='mt-2 lg:mt-3'>
                            <p><a className='underline text-[#fff]' href="mailto:sundarsk823@gmail.com">sundarsk823@gmail.com</a></p>
                        </div>
                        </div>
                        </div>
                    </div>


                </div>
     
        </>
    );
}

export default Contactcontent;
