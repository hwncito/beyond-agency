import '@fontsource/bebas-neue';

export default function Footer() {
  return (
    <footer
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      className="relative h-[675px] bg-[#0F7FA2] flex items-center justify-center"
    >
      <div className="fixed bottom-0 h-[675px] w-full grid grid-cols-12 text-white uppercase pt-20 px-10 md:px-20 text-lg max-w-screen-2xl">
        <div className="col-span-12 flex flex-col gap-3">
          <a href="#top-page" className="self-start hover:underline">
            Back to the top
          </a>
          <a href="#living-section" className="self-start hover:underline">
            Start living
          </a>
          <a href="#explore-section" className="self-start hover:underline">
            Explore cards
          </a>
          <a href="#testimonials-section" className="self-start hover:underline">
            Testimonials
          </a>
          <a href="#contact-section" className="self-start hover:underline">
            Contact us
          </a>
        </div>
        <p
          className="col-start-1 col-span-12 lg:col-span-8 flex items-center text-4xl sm:text-7xl tracking-widest font-bold"
          style={{ fontFamily: 'Bebas Neue' }}
        >
          Explore & Beyond
        </p>
        <p className="col-start-1 col-span-12 lg:col-start-9 lg:col-span-4 flex items-start lg:items-center justify-start lg:justify-end">ALL RIGHTS RESERVED © 2024</p>
      </div>
    </footer>
  );
}
