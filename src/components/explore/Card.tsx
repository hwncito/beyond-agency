'use client';
import '@fontsource/bebas-neue';
import Button from '../ui/Button';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CardProps {
  title: string;
  description: string;
  classes: {
    heading: string;
    button: {
      id: string;
      label: string;
      className: string;
    };
  };
}

export default function Card({ title, description, classes }: CardProps) {
  const { heading, button } = classes;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bgGradients = [
      'linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%)',
      'linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)',
      'linear-gradient(20deg, #c1dfc4 0%, #deecdd 100%)',
      'linear-gradient(40deg, #fdfbfb 0%, #c3cfe2 100%)',
    ];

    const sections = gsap.utils.toArray('.card-text') as HTMLElement[];

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: index === 0 ? 'top 100px' : 'top 400px',
        end: 'bottom 100px',
        animation: gsap.to('#explore-section', {
          background: bgGradients[index],
          immediateRender: false,
        }),
        toggleActions: 'restart none none reverse',
        preventOverlaps: true,
      });
    });
  }, []);
  return (
    <div className="card-text min-h-screen flex flex-col justify-center gap-8">
      <h3
        className={`text-6xl tracking-wide ${heading}`}
        style={{ fontFamily: 'Bebas Neue' }}
      >
        {title}
      </h3>
      <p className="text-4xl tracking-wide text-balance text-gray-700">
        {description}
      </p>
      <Button
        id={button.id}
        label={button.label}
        className={`text-gray-700 self-start ${button.className}`}
      />
    </div>
  );
}
