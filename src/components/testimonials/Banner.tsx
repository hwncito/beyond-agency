'use client';
import { useEffect } from 'react';
import Message from './Message';
import gsap from 'gsap';

interface BannerProps {
  id: string;
  data: { quote: string; author: string; role: string }[];
}

export default function Banner({ id, data }: BannerProps) {
  useEffect(() => {
    const bannerContainer = document.getElementById(id);
    if (!bannerContainer) return;

    const totalWidth = bannerContainer.scrollWidth / 3;

    const tl = gsap.timeline({
      repeat: -1,
    });

    const isBannerOne = id === 'scroll-container-one';

    tl.to(bannerContainer, {
      x: isBannerOne ? -totalWidth : totalWidth,
      duration: 30,
      ease: 'none',
    });

    bannerContainer.addEventListener('mouseenter', () => tl.pause());
    bannerContainer.addEventListener('mouseleave', () => tl.play());

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div id={id} className="relative flex gap-5">
      {[...data, ...data, ...data].map((testimonial, index) => {
        const { quote, author, role } = testimonial;
        return (
          <Message key={index} quote={quote} author={author} role={role} />
        );
      })}
    </div>
  );
}
