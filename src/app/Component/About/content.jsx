"use client"

import Image from "next/image";

const Content = () => {





    return (
        <>
           
                <div className='flex flex-wrap -mx-4'>
                    <div className='items-center w-[100%] md:h-[100vh] md:w-2/4 flex-auto ver-cen' >
                        <Image
                            src={"/Intro/Logo/skills.png"}
                            alt='intro'
                            width={450}
                            height={206}
                            className='max-w-96 DCimg'
                        />
                    </div>
                    <div className='w-[100%] md:h-[100vh] md:w-2/4 flex-auto ver-cen'>
                        <div className="mb-4">
                            <h2 class="Subtitle bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 inline-block text-transparent bg-clip-text">ABOUT ME</h2>
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
                        <div className="mt-2 lg:mt-5">
                        <div className="">
                      
                            <a href="/public/cv/SUNDAR RESUME.pdf" download className=" px-2 py-2 bg-blue-600 hover:bg-blue-800 rounded">
                            <Image 
                               src={"/Intro/Logo/download.svg"} 
                               alt="download" 
                               width={50} 
                               height={50} 
                               className="w-[30px] h-[18px]  inline-block"
                               />
                              <span className="pr-2">RESUME</span></a>
                        </div> 
                        </div>
                    </div>


                </div>
          


        </>
    );
}

export default Content;

