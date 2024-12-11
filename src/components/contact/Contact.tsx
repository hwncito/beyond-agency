import React from 'react';
import Heading from '../ui/Heading';
import Button from '../ui/Button';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className="h-screen flex items-center mx-auto max-w-screen-2xl mt-40">
      <div className="flex flex-col items-center basis-1/2">
        <div className='flex flex-col items-start'>
          <Heading id='contact-heading' containerId='contact-container' title="Contact" className="text-6xl tracking-wide" />
          <p className="text-5xl tracking-wide mt-6">Any questions?</p>
          <p className="text-5xl tracking-wide mt-3">Get in touch with</p>
          <p className="text-5xl tracking-wide text-[#116080] mt-3">our team<span className='text-black'>.</span></p>
          <Button
            id="contact-button"
            label="Contact us"
            className="mt-8 tracking-wide text-3xl border-[#116080] text-[#116080] hover:bg-[#116080] hover:text-white"
          />
        </div>
      </div>
      <div className="basis-1/2 flex justify-center">
        <Image
          src={'/contact-signs.webp'}
          alt="Contact signs"
          width={600}
          height={0}
          className="rounded-3xl"
        />
      </div>
    </section>
  );
}
