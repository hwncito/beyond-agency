import '@fontsource/bebas-neue';
import Button from '../ui/Button';

export default function Card() {
  return (
    <div id='card' className="min-h-screen flex flex-col justify-center gap-8">
      <h3 className='text-6xl tracking-wide' style={{ fontFamily: 'Bebas Neue' }}>Dive Into Serenity </h3>
      <p className='text-4xl tracking-wide text-balance'>Explore the World's Most Breathtaking Beaches</p>
      <Button id="loco" label="Dive now" className="border-gray-600 self-start" />
    </div>
  );
}
