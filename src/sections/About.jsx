import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {

  const aboutRef = useRef(null);

  useGSAP( ()=> {
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, {
          opacity: 0.25
        });

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.5,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          }
        })
      }
    })
  })


  return (
    <>
        <div ref={aboutRef} className=' relative z-19 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]'>
            <div className='about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-5xl leading-[1.25]'>
                Minha atuação é voltada para o desenvolvimento front-end, com foco em escrever código limpo, estruturado e performático. Busco criar aplicações funcionais, escaláveis e de fácil manutenção, sempre priorizando a experiência do usuário. Embora meu foco principal seja o desenvolvimento, também aplico conceitos de UI/UX e boas práticas de design para garantir que cada projeto seja não apenas eficiente no funcionamento, mas também agradável e intuitivo na interação.
            </div>
        </div>
    </>
  )
}

export default About