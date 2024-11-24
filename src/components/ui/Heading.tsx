'use client';
import '@fontsource/bebas-neue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

interface HeadingProps {
  title: string;
  className: string | undefined;
}

export default function Heading({ title, className }: HeadingProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.heading-title', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.heading-container',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);
  return (
    <div
      className="heading-container flex items-center justify-center overflow-hidden leading-none"
    >
      <h2
        className={`heading-title text-5xl translate-y-full ${className}`}
        style={{ fontFamily: 'Bebas Neue' }}
      >
        {title}
      </h2>
    </div>
  );
}
