'use client';
import '@fontsource/bebas-neue';
import './Hero.css';
import Preload from '../preload/Preload';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

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
        // Add the 'hidden' class to preload elements
        const preloadBackground = document.getElementById('preload-background');
        const preloadContainer = document.getElementById('preload-container');
        if (preloadBackground) preloadBackground.classList.add('hidden');
        if (preloadContainer) preloadContainer.classList.add('hidden');
      });
  });

  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: 'url(/ny-bright.webp)',
      }}
    >
      <Preload />
      <div
        className="flex flex-col items-center justify-center mt-28"
        style={{ fontFamily: 'Bebas Neue' }}
      >
        <h1 id="hero-title" className="text-8xl tracking-widest font-bold">
          Explore & Beyond
        </h1>
        <h2 className="text-4xl tracking-wide my-6">
          Your Gateway to Unforgettable Journeys.
        </h2>
        <button className="text-3xl border rounded-lg px-4 py-2 cursor-pointer hover:bg-white hover:text-black transition-all">
          Plan your trip
        </button>
      </div>
    </main>
  );
}
