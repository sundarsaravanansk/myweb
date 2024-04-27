import React from 'react'
import Image from 'next/image'
const IntroContent = () => {
    return (
        <>
            <div className='flex flex-wrap -mx-4 flex-col-reverse md:flex-row pt-28 lg:pt-52'>
                <div className='md:w-2/4 w-full flex-auto ver-cen'>
                    <div className='text-[#fff]'>
                        <div className="relative">
                            <h1 className='font-h1-lg'>Front-End React <br /> Developer
                                <span>
                                    <Image
                                        src={"/Intro/Logo/hand.png"}
                                        alt='Hand'
                                        width={60}
                                        height={60}
                                        className='lg:w-[50px] w-[30px] h-[auto]'
                                    />
                                </span></h1>

                        </div>

                        <div className='mt-2 lg:mt-5 '>
                            <p>Hi, I am Sundar. A passionate Front-end React
                                <br /> Developer based in Tamilnadu, India</p>
                        </div>
                        <div className='mt-5 lg:mt-7 flex gap-5'>
                            <Image
                                src={"/Intro/Logo/html.svg"}
                                width={160}
                                height={60}
                                alt='html'
                                className='lg:w-[100px] w-[70px] h-auto'
                            />
                            <Image
                                src={"/Intro/Logo/react.svg"}
                                alt='react'
                                width={160}
                                height={60}
                                className='w-[70px] lg:w-[100px] h-auto '
                            />
                            <Image
                                src={"/Intro/Logo/tailwind.svg"}
                                alt='react'
                                width={160}
                                height={60}
                                className='w-[70px] lg:w-[100px] h-auto'
                            />
                        </div>


                    </div>
                </div>
                <div className='md:w-2/4 w-full flex-auto mb-10 md:mb-0 items-center px-4 ver-cen'>
                    <Image
                        src={"/Intro/Logo/introimg4.png"}
                        alt='intro'
                        width={450}
                        height={206}
                        className='max-w-80 DCimg'
                    />


                </div>


            </div>


        </>
    )
}

export default IntroContent