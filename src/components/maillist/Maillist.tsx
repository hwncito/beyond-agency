import React from 'react';
import Button from '../ui/Button';

export default function Maillist() {
  return (
    <section className="flex items-center justify-center my-20">
      <div
        className="w-full max-w-screen-2xl mx-10 h-72 flex flex-col items-center justify-center rounded-xl"
        style={{
          backgroundImage: 'url(/ferry.webp)',
          backgroundSize: 'cover',
          backgroundPosition: '0% 80%',
        }}
      >
        <h2 className="text-6xl tracking-wide text-white">
        Be the first to discover exclusive deals
        </h2>
        <Button
          id="maillist-button"
          label="Subscribe"
          className="mt-10 text-3xl px-6 py-3 text-white border-white hover:bg-white hover:text-black"
        />
      </div>
    </section>
  );
}
