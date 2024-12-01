import Image from 'next/image';
import Card from './Card';

export default function Explore() {
const cards = [{
  title: '',
  description: '',
  button: ''
}]

  return (
    <section id="explore-section" className="flex justify-center bg-slate-100">
      <div id="cards-container-wrapper" className="w-1/2">
        <div id="cards-container" className="mx-auto w-9/12 xl:w-8/12">
          <Card />
          <Card />
          <Card />
          <Card />
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
          <div className="absolute w-full h-full flex items-center justify-center">
            <Image
              src="/beach.webp"
              className="w-full h-full object-cover"
              alt="Boat in the middle of the sea"
              width={1920}
              height={0}
            />
          </div>
          <div>
            <Image
              src="/beach.webp"
              className="w-full h-full object-cover"
              alt="Boat in the middle of the sea"
              width={1920}
              height={0}
            />
          </div>
          <div>
            <Image
              src="/beach.webp"
              className="w-full h-full object-cover"
              alt="Boat in the middle of the sea"
              width={1920}
              height={0}
            />
          </div>
          <div>
            <Image
              src="/beach.webp"
              className="w-full h-full object-cover"
              alt="Boat in the middle of the sea"
              width={1920}
              height={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
