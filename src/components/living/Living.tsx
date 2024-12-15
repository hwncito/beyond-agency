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

    // Get with of cross text
    const getCrossTextWidth = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 1024) {
        return '220px';
      } else {
        return '360px';
      }
    };

    let crossTextAnimation;
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
        tl.to(
          '#living-button',
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
          },
          '<+=1.5'
        );
        crossTextAnimation = tl.to(
          '#cross-text',
          {
            width: getCrossTextWidth(),
            opacity: 1,
            duration: 2,
            ease: 'power1.out',
          },
          '<+=0.5'
        );
      }
    };

    ScrollTrigger.create({
      trigger: '#living-text',
      start: 'top 80%',
      onEnter: animateText,
      toggleActions: 'play none none none',
      once: true,
    });

    // Recreate cross-text animation when changing screen size
    const handleResize = () => {
      gsap.to('#cross-text', {
        width: getCrossTextWidth(),
        duration: 0.5,
        ease: 'power1.out',
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="living-section"
      className="py-10 md:py-20 md:h-screen flex flex-col md:flex-row md:justify-between items-center gap-8 md:gap-2 lg:gap-0 xl:gap-8 mx-auto max-w-screen-2xl"
    >
      <div className="relative w-full max-w-[600px] mx-8">
        <div
          id="image-cover"
          className="absolute top-0 bg-white w-full h-full"
        ></div>
        <Image
          className="md:rounded-3xl max-h-80 object-cover md:max-h-full"
          src={'/boat.webp'}
          alt="Boat in the middle of the sea"
          width={600}
          height={0}
        />
      </div>

      <div id="living-text" className="w-full pl-8 md:pl-4 lg:pl-2 xl:pl-8 flex flex-col">
        <ul className="relative text-4xl lg:text-6xl space-y-6 w-full">
          <li className="animated-text" style={{ visibility: 'hidden' }}>
            Use your time
          </li>
          <li
            className="animated-text text-[#1D545E] text-balance break-keep"
            style={{ visibility: 'hidden', }}
          >
            living your vacation,
          </li>
          <li className="animated-text" style={{ visibility: 'hidden' }}>
            not booking it.
          </li>
          <div
            id="cross-text"
            className="absolute bottom-[14px] lg:bottom-5 w-[0px] border-2 border-gray-500 opacity-0"
          ></div>
        </ul>
        <a
          href="https://www.linkedin.com/in/juan-marcos-speroni/"
          target="_blank"
          className='self-start mt-10'
        >
          <Button
            id="living-button"
            label="Start living"
            className="self-start border-[#1D545E] text-[#1D545E] hover:bg-[#1D545E] hover:text-white translate-y-full opacity-0"
          />
        </a>
      </div>
    </section>
  );
}
