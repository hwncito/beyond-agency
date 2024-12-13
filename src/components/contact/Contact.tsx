'use client';

import { useEffect } from 'react';
import Heading from '../ui/Heading';
import Button from '../ui/Button';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';
import gsap from 'gsap';

export default function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imageCover = document.getElementById('contact-image-cover');

    // Animate the image cover
    const animateCover = () => {
      gsap.to(imageCover, {
        height: 0,
        duration: 2,
        ease: 'power3.out',
      });
    };

    ScrollTrigger.create({
      trigger: imageCover,
      start: 'top 90%',
      onEnter: animateCover,
      toggleActions: 'play none none none',
      once: true,
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    const question = document.getElementById('question-text');
    const answer = document.getElementsByClassName('answer-text');
    const button = document.getElementById('contact-button');

    const textReveal = () => {
      const tl = gsap.timeline();
      tl.to(question, {
        duration: 1,
        text: 'Any questions?',
      })
        .to(answer, {
          opacity: 1,
          duration: 1,
        })
        .to(
          button,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          '<+=0.3'
        );

      return tl;
    };

    ScrollTrigger.create({
      trigger: '#question-answer-container',
      start: 'top 80%',
      animation: textReveal(),
    });
  }, []);

  return (
    <section id='contact-section' className="h-screen flex items-center mx-auto max-w-screen-2xl mt-40 mb-20">
      <div className="flex flex-col items-center basis-1/2">
        <div className="flex flex-col items-start">
          <Heading
            id="contact-heading"
            containerId="contact-container"
            title="Contact"
            className="text-6xl tracking-wide"
          />
          <div id="question-answer-container" className="w-[370px] h-[194px]">
            <p id="question-text" className="text-5xl tracking-wide mt-6"></p>
            <p className="answer-text text-5xl tracking-wide mt-3 opacity-0">
              Get in touch with
            </p>
            <p className="answer-text text-5xl tracking-wide text-[#116080] mt-3 opacity-0">
              our team
              <span className="answer-text text-black">.</span>
            </p>
          </div>
          <Button
            id="contact-button"
            label="Contact us"
            className="translate-y-full opacity-0 mt-7 tracking-wide text-3xl border-[#116080] text-[#116080] hover:bg-[#116080] hover:text-white"
          />
        </div>
      </div>
      <div className="relative basis-1/2 flex justify-center">
        <div
          id="contact-image-cover"
          className="absolute top-0 bg-white w-full h-full"
        ></div>
        <Image
          src={'/contact-signs.webp'}
          alt="Contact signs"
          width={600}
          height={0}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
