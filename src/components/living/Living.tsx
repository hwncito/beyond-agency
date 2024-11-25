'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

export default function Living() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the image cover
    const animateCover = () => {
      gsap.to('#image-cover', {
        height: 0,
        duration: 2,
        ease: 'power3.out',
      });
    };

    ScrollTrigger.create({
      trigger: '#image-cover',
      start: 'top 90%',
      onEnter: animateCover,
      toggleActions: 'play none none none',
      once: true,
    });

    // Animate the text
    const animateText = () => {
      const text = new SplitType('.animated-text', { types: 'chars' });
      const chars = text.chars;

      if (chars) {
        const tl = gsap.timeline();
        tl.fromTo(
          chars,
          {
            scaleY: 0,
            y: -20,
          },
          {
            opacity: 1,
            scaleY: 1,
            y: 0,
            transformOrigin: 'top',
            duration: 1,
            stagger: 0.03,
          }
        );
        tl.set('.animated-text', { visibility: 'visible' }, '<');
        tl.to('#living-button', {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
        }, '<+=1.5');
        tl.to('#cross-text', {
          width: '360px',
          opacity: 1,
          duration: 2,
          ease: 'power1.out',
        }, '<+=0.5');
      }
    };

    ScrollTrigger.create({
      trigger: '#living-text',
      start: 'top 80%',
      onEnter: animateText,
      toggleActions: 'play none none none',
      once: true,
    });
  }, []);

  return (
    <section className="py-20 h-screen flex justify-between items-center gap-8 mx-8">
      <div className="relative w-full max-w-[600px]">
        <div
          id="image-cover"
          className="absolute top-0 bg-white w-full h-full"
        ></div>
        <Image
          className="rounded-3xl"
          src={'/boat.webp'}
          alt="Boat in the middle of the sea"
          width={600}
          height={0}
        />
      </div>

      <div id="living-text" className="w-full pl-8 flex flex-col">
        <ul className="relative text-6xl space-y-6">
          <li className="animated-text" style={{ visibility: 'hidden' }}>
            Use your time
          </li>
          <li
            className="animated-text text-[#1D545E]"
            style={{ visibility: 'hidden' }}
          >
            living your vacation,
          </li>
          <li className="animated-text" style={{ visibility: 'hidden' }}>
            not booking it.
          </li>
          <div
            id="cross-text"
            className="absolute bottom-5 w-[0px] border-2 border-gray-500 opacity-0"
          ></div>
        </ul>
        <Button
          id="living-button"
          label="Start living"
          className="self-start mt-10 border-[#1D545E] text-[#1D545E] hover:bg-[#1D545E] hover:text-white translate-y-full opacity-0"
        />
      </div>
    </section>
  );
}
