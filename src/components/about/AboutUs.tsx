import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-20 h-screen flex justify-between items-center gap-8 mx-8">
      <Image
        className="rounded-3xl"
        src={'/boat.webp'}
        alt="Boat in the middle of the sea"
        width={600}
        height={0}
      />
      <div className='w-full pl-8 flex flex-col'>  
        <ul className="text-6xl space-y-6">
          <li>Use your time</li>
          <li className='text-[#1D545E]'>living your vacation</li>
          <li>instead of booking it.</li>
        </ul>
        <button className='self-start mt-10 text-2xl border-2 rounded-lg px-4 py-2 cursor-pointer hover:bg-white hover:text-black transition-colors'>Start living</button>
      </div>
    </section>
  );
}
