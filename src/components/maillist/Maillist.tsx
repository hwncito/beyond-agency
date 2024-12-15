'use client';

import { useEffect } from 'react';
import Button from '../ui/Button';
import SplitType from 'split-type';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Maillist() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const text = new SplitType('.deals-text', { types: 'chars' }); // Split into characters
    const chars = text.chars;

    gsap.set(chars, { opacity: 0.2 });
    // Animate the text
    const animateText = () => {
      if (chars) {
        const tl = gsap.timeline();
        tl.fromTo(
          chars,
          { opacity: 0.2 },
          {
            opacity: 1,
            duration: 1,
            stagger: 0.04,
          }
        );
        tl.to(
          '#maillist-button',
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: 'power3.out',
          },
          '<+=1'
        );
      }
    };

    ScrollTrigger.create({
      trigger: '#deals-text',
      start: 'top 80%',
      onEnter: animateText,
      toggleActions: 'play none none none',
      once: true,
    });
  }, []);

  return (
    <section className="flex items-center justify-center my-20">
      <div
        className="w-full max-w-screen-2xl md:mx-10 h-60 md:h-72 flex flex-col items-center justify-center rounded-xl"
        style={{
          backgroundImage: 'url(/ferry.webp)',
          backgroundSize: 'cover',
          backgroundPosition: '0% 80%',
        }}
      >
        <h2
          id="deals-text"
          className="deals-text text-4xl sm:text-5xl md:text-6xl tracking-wide text-white text-center text-balance break-keep"
        >
          Be the first to know about exclusive deals
        </h2>
        <a
          href="https://www.linkedin.com/in/juan-marcos-speroni/"
          target="_blank"
          className='mt-10'
        >
          <Button
            id="maillist-button"
            label="Subscribe"
            className="text-2xl sm:text-3xl px-6 py-3 text-white border-white hover:bg-white hover:text-black opacity-0 translate-y-full"
          />
        </a>
      </div>
    </section>
  );
}
