import Heading from '../ui/Heading';
import Banner from './Banner';
import Gradient from './Gradient';
import { testimonialsOne, testimonialsTwo } from './testimonials.data';

export default function Testimonials() {
  return (
    <section className="h-screen flex flex-col gap-5 items-center justify-center mx-auto overflow-x-hidden">
      <div className="mb-1">
        <Heading title="Testimonials" className="text-center tracking-wider" />
      </div>

      <h3 className='mb-3 text-3xl'>Hear it from people <span className='underline'>like you</span></h3>

      <div id='banner-container-one' className='relative'>
        <Gradient />
        <Banner id={"scroll-container-one"} data={testimonialsOne} />
      </div>

      <div id='banner-container-two' className='relative'>
        <Gradient />
        <Banner id={"scroll-container-two"} data={testimonialsTwo} />
      </div>
    </section>
  );
}
