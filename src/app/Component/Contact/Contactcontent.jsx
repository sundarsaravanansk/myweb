"use client"
import Image from 'next/image';
import "./contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contactcontent = () => {

    useGSAP(()=>{
        
        gsap.from('.contact', {
            duration: 0.3,
            y: 50,
            ease: "power1.out",
            delay: 1,

            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".contact",
                start: "top 100%",
                end: "+=500px",
                scrub: 1,
            },
        });

        gsap.from('.con p', {
            duration: 0.3,
            y: 100,
            ease: "power1.out",
            delay: 1,
            /*skewY: 7,*/
            stagger: {
                amount: 0.3
            },
            scrollTrigger: {
                trigger: ".con p",
                start: "top 130%",
                end: "+=500px",
                scrub: 1,
            },
        });
    })
    return (
        <>
        <div className='flex flex-wrap -mx-4'>
        <div className='items-center md:w-2/4 w-[100%] md:h-[100vh] flex-auto px-4 ver-cen' >
          <Image
              src={"/Intro/Logo/Location.png"}
              alt='intro'
              width={450}
              height={206}
              className='max-w-sm DCimg relative rotating'
          />
        </div>
        <div className='w-[100%] md:h-[100vh] md:w-2/4 flex-auto ver-cen' >
        <div className="text-white mb-14 md:mb-0">
        <div className="mb-4 contact">
            <h2 className='font-h2-lg bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400 inline-block text-transparent bg-clip-text'>
                CONTACT
            </h2>
        </div>
        <div className='mt-4'>
        <div className='flex items-center gap-2'>
        <div>
          <Image
              src={"/social/address.png"}
              alt='email'
              width={50}
              height={50}
              className='w-[25px] h-[25px] inline-block'
          />
        </div>
        <div className='contact'>
            <h2 className='Subtitle'>Address</h2>
        </div>
        </div>
        <div className='mt-2 lg:mt-3 con'>
          <p>3/28 Silattur POST, Aranthangi TALUK, <br />
              Pudukkottai DISTRICT , Tamil Nadu - 614622
          </p>
        </div>
       </div>
    <div className='relative  mt-4'>
       <div className='flex items-center gap-2'>
        <div>
            <Image
                src={"/social/phone.png"}
                alt='email'
                width={50}
                height={50}
                className='w-[25px] h-[25px] inline-block'
            />
    </div>
    <div className='contact'> 
        <h2 className='Subtitle'>Phone</h2>
    </div>
    </div>
    <div className='mt-2 lg:mt-3 con'>
        <p><a className='underline text-[#fff] ' href="tel:+91 9655608252">+91 9655608252</a></p>
    </div>
    </div>
  <div className='mt-4 ' >
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
  <div className='contact'>
    <h2 className='Subtitle'>Email</h2>
</div>
</div>
        <div className='mt-2 lg:mt-3 con'>
            <p><a className='underline text-[#fff]' href="mailto:sundarsk823@gmail.com">sundarsk823@gmail.com</a></p>
        </div>
        </div>
    <div className='mt-5 lg:mt-7 flex gap-3'>
        <a href="#" target='_blank'>
            <Image
                src={"/social/linkedin/372102050_LINKEDIN_ICON/gif/372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif"}
                width={40}
                height={60}
                alt='linkedin'
            />
        </a>
        <a href="https://api.whatsapp.com/send?phone=919655608252&amp;text=Hi!  sundar for job Enquiry" target='_blank'>
            <Image
                src={"/social/372108180_WHATSAPP_ICON/372108180_WHATSAPP_ICON/gif/372108180_WHATSAPP_ICON_1080.gif"}
                width={40}
                height={60}
                alt='whatsapp'
            />
        </a>
      </div>
    </div>
  </div>
</div>
</>);}
export default Contactcontent;
