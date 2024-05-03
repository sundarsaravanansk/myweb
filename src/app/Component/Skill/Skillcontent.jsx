"use client"
import React, { useState } from 'react';
import { Skillscontent } from '@/app/Database/Skillscontent/Skillscontent';
import Imageblur from '@/app/Imageblur/Imageblur';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skillcontent = () => {
    const [Skilldata]=useState([Skillscontent])

    
    useGSAP(()=>{
        gsap.from(".skill h1", {
             duration: 1, 
             y: 100, 
             opacity: 0, 
             ease: "power4.out" ,
             scrollTrigger: {
                trigger: ".skill h1",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
           });
 
           const lp1CostElementso = document.querySelectorAll('.lp3');
     
           lp1CostElementso.forEach((element, index) => {
             gsap.from(element, {
               y: '50%',
               opacity: 0,
               duration: 0.5,
               delay: 0.3,
               ease: 'power2.out',
               scrollTrigger: {
                trigger: ".lp3",
                scrub: 1,
                start: "top 100%",
                end: "+=500px",
            }
             });
           });
 })
    return (
<>{
Skilldata.map(data =>{
    return(
        <div className='flex flex-wrap -mx-4 flex-col-reverse md:flex-row' key={data.id}>
        <div className='w-[100%] md:h-[100vh] md:w-2/4 flex-auto ver-cen'>
            <div className="mb-4 skill">
                <h1 className='font-h2-lg bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 inline-block text-transparent bg-clip-text'>
                   {data.Skillstitle}
                </h1>
            </div>
        <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 '>
            <ul className="Skillsli lp3">
                <li>{data.Skillspoints1}</li>
                <li>{data.Skillspoints2}</li>
                <li>{data.Skillspoints3}</li>
            </ul>
        </div>
        </div>
        <div className='items-center w-[100%] md:h-[100vh] md:w-2/4 flex-auto pb-12 md:pb-12 ver-cen'>
            <Imageblur
            src={data.SkillsImage}
            alt={data.Skillsalt}
            width={450}
            height={206}
            className='max-w-96 DCimg'
            />
        </div>
    </div>)})}
</>);}
export default Skillcontent;
