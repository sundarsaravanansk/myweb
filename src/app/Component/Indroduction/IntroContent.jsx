"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Introcontent } from '@/app/Database/Introcontent/Introcontent'
import { useState } from 'react'


const IntroContent = () => {

    const [Introdata] = useState([Introcontent])

    return (
        <>
        {
        Introdata.map(data => {
            return (
            <div className='flex flex-wrap -mx-4 flex-col-reverse md:flex-row panel' key={data.id}>
                <div className='md:w-2/4 w-[100%] md:h-[100vh] flex-auto ver-cen'>
                    <div className='text-[#fff]'>
                        <div className="relative">
                            <h1 className='font-h1-lg'>{data.title}<br />{data.title1}
                                <span>
                                <Image
                                src={data.handImage}
                                alt={data.handalt}
                                width={60}
                                height={60}
                                className='lg:w-[50px] w-[30px] h-[auto]'
                                />
                                </span>
                                </h1> 
                                </div>
                                <div className='mt-2 lg:mt-5 '>
                                    <p>{data.introcontent}<br />{data.introcontent2}</p>
                                </div>
                                <div className='mt-5 lg:mt-7 flex gap-3'>
                                    <Image
                                    src={data.htmlImage}
                                    width={160}
                                    height={60}
                                    alt={data.htmlalt}
                                    className='lg:w-[45px] w-[30px] h-auto'
                                    />
                                    <Image
                                    src={data.cssImage}
                                    width={160}
                                    height={60}
                                    alt={data.cssalt}
                                    className='lg:w-[45px] w-[30px] h-auto'
                                    />
                                    <Image
                                    src={data.jsImage}
                                    width={160}
                                    height={60}
                                    alt={data.jsalt}
                                    className='lg:w-[45px] w-[30px] h-auto'
                                    />
                                    <Image
                                    src={data.reactImage}
                                    width={160}
                                    height={60}
                                    alt={data.reactalt}
                                    className='lg:w-[45px] w-[30px] h-auto'
                                    />
                                    <Image
                                    src={data.nextImage}
                                    width={160}
                                    height={60}
                                    alt={data.nextalt}
                                    className='lg:w-[45px] w-[30px] h-auto'
                                    />
                                    <Image
                                    src={data.tailwindImage}
                                    width={160}
                                    height={60}
                                    alt={data.tailwindalt}
                                    className='lg:w-[45px] w-[30px] h-auto'
                                    />
                                    <Image
                                    src={data.sassImage}
                                    width={160}
                                    height={60}
                                    alt={data.sassalt}
                                    className='lg:w-[45px] wordpress-icon w-[30px] h-auto'
                                    />
                                    </div>
                                    <div className='mt-5 lg:mt-7 flex gap-3'>
                                    <Link href={data.githuplink} target='_blank'>
                                    <Image
                                    src={data.githupImage}
                                    width={40}
                                    height={60}
                                    alt={data.githupalt}
                                    />
                                    </Link>
                                    <Link href={data.Linkedinlink}>
                                    <Image
                                    src={data.LinkedinImage}
                                    width={40}
                                    height={60}
                                    alt={data.Linkedinalt}
                                    />
                                    </Link>
                                    </div>
                                    </div>
                                </div>
                            <div className='md:w-2/4 w-[100%] md:h-[100vh] flex-auto mb-10 md:mb-0 items-center px-4 ver-cen'>
                                <Image
                                src={data.introImage}
                                alt={data.introalt}
                                width={450}
                                height={206}
                                className='max-w-80 DCimg'
                                />
                            </div>
                        </div>
                    )})}
                </>
                )
            }
export default IntroContent
