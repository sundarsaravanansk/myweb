"use client"
import React from 'react';
import Lenis from '@studio-freight/lenis'
// import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


const Scroll = () => {
    // useGSAP(() => {
    //     const lenis = new Lenis()
    
    //     lenis.on('scroll', ScrollTrigger.update)
    
    //     gsap.ticker.add((time) => {
    //       lenis.raf(time * 1000)
    //     })
    
    //     gsap.ticker.lagSmoothing(0);
    
    //     window.scrollTo(0, 0);
    //   })

    useEffect(() => {
      const lenis = new Lenis({
        duration: 2.5
      });
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
  
      lenis.on('scroll', ScrollTrigger.update);
  
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
  
      return () => {
        // Cleanup function
        // Stop any ongoing animation or remove event listeners if necessary
      };
    }, []);

    return (
        <>
            
        </>
    );
}

export default Scroll;
