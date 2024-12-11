'use client';
import '@fontsource/bebas-neue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

interface HeadingProps {
  id: string;
  containerId: string;
  title: string;
  className: string | undefined;
}

export default function Heading({
  id,
  containerId,
  title,
  className,
}: HeadingProps) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.getElementById(containerId);
    const heading = document.getElementById(id);

    gsap.to(heading, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);
  return (
    <div
      id={containerId}
      className="flex items-center justify-center overflow-hidden leading-none"
    >
      <h2
        id={id}
        className={`heading-title text-5xl translate-y-full ${className}`}
        style={{ fontFamily: 'Bebas Neue' }}
      >
        {title}
      </h2>
    </div>
  );
}
