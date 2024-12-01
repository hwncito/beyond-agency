import Living from "@/components/living/Living";
import Hero from "@/components/hero/Hero";
import Explore from "@/components/explore/Explore";

export default function Home() {
  return (
    <>
      <Hero />
      <Living />
      <Explore />
      <section className="bg-white h-screen">
      </section>
    </>
  );
}
