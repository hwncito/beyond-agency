'use client';
import Image from 'next/image';
import Card from './Card';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Explore() {
  const cardsContent = [
    {
      title: 'Dive Into Serenity',
      description: "Explore the World's Most Breathtaking Beaches",
      classes: {
        heading: 'text-[#116080]',
        button: {
          id: 'explore-button',
          label: 'Explore Now',
          className: 'border-[#116080] hover:bg-[#116080] hover:text-white',
        },
      },
    },
    {
      title: 'Reach New Heights',
      description: 'Discover Majestic Dune Escapes',
      classes: {
        heading: 'text-[#CB8B57]',
        button: {
          id: 'discover-button',
          label: 'Discover Now',
          className: 'border-[#CB8B57] hover:bg-[#CB8B57] hover:text-white',
        },
      },
    },
    {
      title: 'Embrace the Wild',
      description: 'Immerse Yourself in Vibrant Rainforests',
      classes: {
        heading: 'text-[#346032]',
        button: {
          id: 'immerse-button',
          label: 'Immerse Now',
          className: 'border-[#346032] hover:bg-[#346032] hover:text-white',
        },
      },
    },
    {
      title: 'Journey to the Edge',
      description: 'Experience the Magic of Arctic Landscapes',
      classes: {
        heading: 'text-[#61737E]',
        button: {
          id: 'experience-button',
          label: 'Experience Now',
          className: 'border-[#61737E] hover:bg-[#61737E] hover:text-white',
        },
      },
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray('.card-image:not(:first-child)');

    gsap.set(images, {
      yPercent: 101,
    });

    const animateCards = gsap.to(images, {
      yPercent: 0,
      duration: 1,
      stagger: 1,
    });

    ScrollTrigger.create({
      trigger: '#explore-section',
      start: 'top top',
      end: 'bottom bottom',
      pin: '#images-container-wrapper',
      animation: animateCards,
      scrub: true,
    });
  }, []);

  return (
    <section
      id="explore-section"
      className="flex justify-center"
      style={{
        background:
          'linear-gradient(109.6deg, rgb(243, 249, 252) 11.2%, rgb(251, 253, 254) 100.2%)',
      }}
    >
      <div id="cards-container-wrapper" className="w-1/2">
        <div id="cards-container" className="mx-auto w-9/12 xl:w-8/12">
          {cardsContent.map((card, index) => {
            const { title, description, classes } = card;
            return (
              <Card
                key={index}
                title={title}
                description={description}
                classes={classes}
              />
            );
          })}
        </div>
      </div>
      <div
        id="images-container-wrapper"
        className="h-screen w-1/2 flex flex-col justify-center"
      >
        <div
          id="images-container"
          className="relative w-4/5 h-1/2 rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="card-image absolute w-full h-full flex items-center justify-center">
            <Image
              src="/beach.webp"
              className="card-image w-full h-full object-cover"
              alt="Boat in the middle of the sea"
              width={1920}
              height={0}
              loading="lazy"
            />
          </div>
          <div className="card-image absolute w-full h-full flex items-center justify-center">
            <Image
              src="/dunes.webp"
              className="card-image w-full h-full object-cover"
              alt="Dune landscape"
              width={1920}
              height={0}
              loading="lazy"
            />
          </div>
          <div className="card-image absolute w-full h-full flex items-center justify-center">
            <Image
              src="/forest.webp"
              className="card-image w-full h-full object-cover"
              alt="Forest landscape"
              width={1920}
              height={0}
              loading="lazy"
            />
          </div>
          <div className="card-image absolute w-full h-full flex items-center justify-center">
            <Image
              src="/mountain.webp"
              className="card-image w-full h-full object-cover"
              alt="Mountain landscape"
              width={1920}
              height={0}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
