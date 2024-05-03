"use client"
import Image from "next/image";
import { Aboutcontent } from "@/app/Database/Aboutcontent/Aboutcontent";
import { useState } from "react";
import Imageblur from "@/app/Imageblur/Imageblur";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Content = () => {
    const[aboutdata]=useState([Aboutcontent])

    useGSAP(()=>{
        gsap.from(".about h2", {
             duration: 1, 
             y: 100, 
             opacity: 0, 
             ease: "power4.out" ,
             scrollTrigger: {
                trigger: ".about h2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
           });
 
           const lp1CostElementso = document.querySelectorAll('.lp2');
     
           lp1CostElementso.forEach((element, index) => {
             gsap.from(element, {
               y: '50%',
               opacity: 0,
               duration: 0.5,
               delay: 0.3,
               ease: 'power2.out',
               scrollTrigger: {
                trigger: ".lp2",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
             });
           });
 })
    return (
        <>
        {
        aboutdata.map(data =>{
        return(
            <div className='flex flex-wrap -mx-4' key={data.id}>
            <div className='items-center w-[100%] md:h-[100vh] md:w-2/4 flex-auto ver-cen' >
                <Imageblur
                src={data.aboutImage}
                alt={data.aboutalt}
                width={450}
                height={206}
                className='max-w-96 DCimg'
                />
            </div>
            <div className='w-[100%] md:h-[100vh] md:w-2/4 flex-auto ver-cen'>
            <div className="mb-4 about">
                <h2 className="split Subtitle bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 inline-block text-transparent bg-clip-text">
                    {data.abouttitle}
                 </h2>
            </div>
            <div className='relative about'>
                <h2 className="font-h2-lg">{data.aboutcontent}<br />{data.aboutcontent1}</h2>
            </div>
            <div className="mt-2 lg:mt-5 lp2">
                <p>{data.aboutdetail}</p>
            </div>
            <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 lg:mt-5 lp2'>
                <p>{data.aboutdetail1}</p>
            </div>
            <div className="mt-5 lg:mt-5 lp2">
            <div className="">
            <a href={data.resumelink} download className=" px-2 py-2 bg-blue-600 hover:bg-blue-800 rounded">
              <Image 
                 src={data.resumedownImage} 
                 alt={data.resumealt} 
                 width={50} 
                 height={50} 
                 className="w-[30px] h-[18px]  inline-block"
                />
                <span className="pr-2 lp2">{data.resumetitle}</span></a>
                </div> 
            </div>
        </div>
    </div>)})}
</>);}
export default Content;
