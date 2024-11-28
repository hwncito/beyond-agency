import Image from 'next/image';
import Button from '../ui/Button';

export default function Card() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <h3>Title</h3>
        <p>Descritpion</p>
        <Button id="loco" label="Button" className="border-red-600" />
      </div>
      <div>
        <Image src="/boat.webp" alt="boat" width={200} height={200} />
      </div>
    </div>
  );
}
