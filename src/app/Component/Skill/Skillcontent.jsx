"use client"
import React, { useState } from 'react';
import { Skillscontent } from '@/app/Database/Skillscontent/Skillscontent';
import Imageblur from '@/app/Imageblur/Imageblur';

const Skillcontent = () => {
    const [Skilldata]=useState([Skillscontent])
    return (
<>{
Skilldata.map(data =>{
    return(
        <div className='flex flex-wrap -mx-4 flex-col-reverse md:flex-row' key={data.id}>
        <div className='w-[100%] md:h-[100vh] md:w-2/4 flex-auto ver-cen'>
            <div className="mb-4">
                <h1 className='font-h2-lg bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 inline-block text-transparent bg-clip-text'>
                   {data.Skillstitle}
                </h1>
            </div>
        <div className='text-white text-sm text-left lg:leading-9 lg:text-base mt-2 '>
            <ul className="Skillsli">
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
