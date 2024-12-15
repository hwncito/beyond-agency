'use client';
import '@fontsource/bebas-neue';
import './Hero.css';
import Preload from '../preload/Preload';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Button from '../ui/Button';

export default function Hero() {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'power2.out',
      },
    });

    tl.to('#preload-title', {
      y: 0,
      delay: 0.3,
    })
      .to('#preload-title', {
        yPercent: -100,
        delay: 1,
      })
      .to(
        '#preload-background',
        {
          yPercent: -100,
          duration: 1.5,
          ease: 'power4.inOut',
        },
        '<'
      )
      .add(() => {
        const preloadBackground = document.getElementById('preload-background');
        const preloadContainer = document.getElementById('preload-container');
        if (preloadBackground) preloadBackground.classList.add('hidden');
        if (preloadContainer) preloadContainer.classList.add('hidden');
      })
      .to(
        '#hero-title',
        {
          y: 0,
          duration: 1.7,
          ease: 'power3.out',
        },
        '-=0.8'
      )
      .to(
        '#hero-subtitle',
        {
          y: 0,
          delay: 0.2,
          duration: 1.7,
          ease: 'power3.out',
        },
        '<'
      )
      .to(
        '#hero-button',
        {
          y: 0,
          delay: 0.3,
          duration: 1.3,
          ease: 'power3.out',
          opacity: 1,
        },
        '<'
      );
  });

  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      id="top-page"
      style={{
        backgroundImage: 'url(/ny-bright.webp)',
      }}
    >
      <Preload />
      <div className="flex flex-col items-center justify-center mt-28">
        <div className="overflow-hidden leading-none">
          <h1
            id="hero-title"
            className="text-5xl sm:text-6xl md:text-8xl tracking-widest font-bold translate-y-full text-center"
            style={{ fontFamily: 'Bebas Neue' }}
          >
            Explore & Beyond
          </h1>
        </div>
        <div className="overflow-hidden leading-none mt-6 mb-8">
          <h2
            id="hero-subtitle"
            className="text-3xl md:text-4xl tracking-wide translate-y-full leading-normal text-center text-balance"
          >
            Your Gateway to Unforgettable Journeys.
          </h2>
        </div>
        <a href="https://www.linkedin.com/in/juan-marcos-speroni/" target='_blank'>
          <Button
            id="hero-button"
            label="Plan your trip"
            className="hover:bg-white hover:text-black translate-y-full opacity-0"
          />
        </a>
      </div>
    </main>
  );
}
