"use client"

import Image from "next/image";

const Content = () => {





    return (
        <>
           
                <div className='flex flex-wrap -mx-4'>
                    <div className='items-center w-full md:w-2/4 flex-auto ver-cen'>
                        <Image
                            src={"/Intro/Logo/skills.png"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='max-w-96 DCimg'
                        />
                    </div>
                    <div className='w-full md:w-2/4 flex-auto ver-cen'>
                        <div className="mb-4">
                            <h2 class="Subtitle">ABOUT ME</h2>
                        </div>

                        <div className='relative'>
                            <h2 className="font-h2-lg">Front-end Developer <br />based in Tamilnadu, India
                               </h2>
                      
                        </div>
                        <div className="mt-2 lg:mt-5">
                            <p>Hii, my name is Sundar, and Im a Frontend Developer. My 
                                passion is to create and develop a clean UI/UX.</p>
                        </div>
                        <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-5 '>
                            <p>My main stack currently is React/Next.js in combination with Tailwind CSS </p>
                        </div>
                    
                    </div>


                </div>
          


        </>
    );
}

export default Content;
