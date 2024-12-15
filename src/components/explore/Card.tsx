'use client';
import '@fontsource/bebas-neue';
import Button from '../ui/Button';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

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
  image: string;
  altImage: string;
}

export default function Card({
  title,
  description,
  classes,
  image,
  altImage,
}: CardProps) {
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
        className={`text-5xl md:text-6xl tracking-wide ${heading}`}
        style={{ fontFamily: 'Bebas Neue' }}
      >
        {title}
      </h3>
      <Image src={image} alt={altImage} width={1920} height={0} className='rounded-2xl md:hidden' />
      <p className="text-3xl md:text-4xl tracking-wide text-pretty md:text-balance text-gray-700">
        {description}
      </p>
      <a
        href="https://www.linkedin.com/in/juan-marcos-speroni/"
        target="_blank"
      >
        <Button
          id={button.id}
          label={button.label}
          className={`text-gray-700 self-start ${button.className}`}
        />
      </a>
    </div>
  );
}
