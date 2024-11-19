import '@fontsource/bebas-neue';
import './Hero.css';

export default function Hero() {
  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/ny-bright.webp)',
      }}
    >
      <h1
        id="hero-title"
        className="text-8xl tracking-widest text-white font-bold"
        style={{ fontFamily: 'Bebas Neue' }}
      >
        Explore & Beyond
      </h1>
    </main>
  );
}
