import Living from "@/components/living/Living";
import Hero from "@/components/hero/Hero";
import Explore from "@/components/explore/Explore";
import Testimonials from "@/components/testimonials/Testimonials";
import Maillist from "@/components/maillist/Maillist";

export default function Home() {
  return (
    <>
      <Hero />
      <Living />
      <Explore />
      <Testimonials />
      <Maillist />
    </>
  );
}
