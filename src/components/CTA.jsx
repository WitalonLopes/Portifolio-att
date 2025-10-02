import React, { useRef }  from 'react'
import GradientButton from './GradientButton'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CTA = () => {

  const ctaRef = useRef(null);

  useGSAP(()=> {
    gsap.from(ctaRef.current, {
      backgroundColor: "#fff",
      color: "#000",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "center bottom",
        end: "60% bottom",
        scrub: 1
      }
    })
  });

  return (
    <>
        <div ref={ctaRef}>
            <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center">
                <h4 className='max-w-6xl text-2xl lg:text-5xl text-center leading-[1.25]'>Projetos freelance, colaborações e oportunidades de tempo integral. Vamos nos conhecer</h4>
                <GradientButton text="Vamos conversar" link="https://wa.me/5534984133145?text=Olá%2C%20vim%20do%20seu%20site%20e%20quero%20saber%20mais!" />
            </div>
        </div>
    </>
  )
}


export default CTA