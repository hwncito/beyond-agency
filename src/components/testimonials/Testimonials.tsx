import Heading from '../ui/Heading';
import Banner from './Banner';
import { testimonialsOne, testimonialsTwo } from './testimonials.data';

export default function Testimonials() {
  return (
    <section className="h-screen flex flex-col gap-5 items-center justify-center mx-auto">
      <div className="mb-2">
        <Heading title="Testimonials" className="text-center" />
      </div>

      <Banner data={testimonialsOne} />
      <Banner data={testimonialsTwo} />
    </section>
  );
}
