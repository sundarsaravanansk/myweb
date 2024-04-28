"use client"
import Image from 'next/image'
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(useGSAP, ScrollTrigger);

const IntroContent = () => {

    // useGSAP(()=>{
    //     let panels = gsap.utils.toArray(".panel");
   
    //     let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start:"top top" }));

    //     panels.forEach((panel, i) => {
    //         ScrollTrigger.create({
    //             trigger: panel,
    //             start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", 
    //             pin: true,
    //             pinSpacing: false
    //         });
    //     });
    //     ScrollTrigger.create({
    //         snap: {
    //             snapTo: (progress, self) => {
    //                 let panelStarts = tops.map(st => st.start),
    //                     snapScroll = gsap.utils.snap(panelStarts, self.scroll()); 
    //                 return gsap.utils.normalize(ScrollTrigger.maxScroll(window), snapScroll); 
    //             },
    //             duration: 1
    //         }
    //     });

    //     const cards = document.querySelectorAll('.sq');

    //     cards.forEach((card, index) => {
    //         gsap.set(card, { autoAlpha: 0, y: 50 });

    //         ScrollTrigger.create({
    //             trigger: card,
    //             start: "top bottom-=100", // Adjust as needed
    //             end: "bottom top",
    //             onEnter: () => {
    //                 gsap.to(card, { duration: 0.5, autoAlpha: 1, y: 0, ease: "power2.out" });
    //             },
                
    //         });
    //     });
    // })
    return (
        <>
            <div className='flex flex-wrap -mx-4 flex-col-reverse md:flex-row panel'>
                <div className='md:w-2/4 w-[100%] md:h-[100vh] flex-auto ver-cen'>
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
                        <div className='mt-5 lg:mt-7 flex gap-3'>
                            <Image
                                src={"/Intro/Logo/chtml.svg"}
                                width={160}
                                height={60}
                                alt='html'
                                className='lg:w-[45px] w-[30px] h-auto'
                            />
                             <Image
                                src={"/Intro/Logo/ccss.svg"}
                                width={160}
                                height={60}
                                alt='css'
                                className='lg:w-[45px] w-[30px] h-auto'
                            />
                               <Image
                                src={"/Intro/Logo/JavaScript.svg"}
                                width={160}
                                height={60}
                                alt='css'
                                className='lg:w-[45px] w-[30px] h-auto'
                            />
                            <Image
                                src={"/Intro/Logo/creact.svg"}
                                width={160}
                                height={60}
                                alt='react'
                                className='lg:w-[45px] w-[30px] h-auto'
                            />
                            <Image
                                src={"/Intro/Logo/cnext.svg"}
                                width={160}
                                height={60}
                                alt='next'
                                className='lg:w-[45px] w-[30px] h-auto'
                            />
                             <Image
                                src={"/Intro/Logo/ctailwind.svg"}
                                width={160}
                                height={60}
                                alt='tailwind'
                                className='lg:w-[45px] w-[30px] h-auto'
                            />
                            <Image
                                src={"/Intro/Logo/csass.svg"}
                                width={160}
                                height={60}
                                alt='sass'
                                className='lg:w-[45px] wordpress-icon w-[30px] h-auto'
                            />
                             {/* <Image
                                src={"/Intro/Logo/tailwind.svg"}
                                alt='react'
                                width={160}
                                height={60}
                                className='w-[70px] lg:w-[100px] h-auto'
                            /> */}
                        </div>


                    </div>
                </div>
                <div className='md:w-2/4 w-[100%] md:h-[100vh] flex-auto mb-10 md:mb-0 items-center px-4 ver-cen'>
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