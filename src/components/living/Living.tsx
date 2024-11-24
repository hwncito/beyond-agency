import Image from 'next/image';
import Button from '../ui/Button';

export default function Living() {
  return (
    <section className="py-20 h-screen flex justify-between items-center gap-8 mx-8">
      <Image
        className="rounded-3xl"
        src={'/boat.webp'}
        alt="Boat in the middle of the sea"
        width={600}
        height={0}
      />
      <div className="w-full pl-8 flex flex-col">
        <ul className="relative text-6xl space-y-6">
          <li>Use your time</li>
          <li className="text-[#1D545E]">living your vacation,</li>
          <div className="absolute bottom-5 w-[360px] border-2 border-gray-500"></div>
          <li>not booking it.</li>
        </ul>
        <Button
          id="living-button"
          label="Start living"
          className="self-start mt-10 border-[#1D545E] text-[#1D545E] hover:bg-[#1D545E] hover:text-white"
        />
      </div>
    </section>
  );
}
