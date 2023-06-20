import { Footer, Navbar, QandA } from "@/components";
import Hero from "@/components/Hero";
import InfoLomba from "@/components/InfoLomba";

export default function Home() {
  return (
    <div className="snap-y bg-secondary-white snap-mandatory container mx-auto overflow-scroll  w-screen h-screen ">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="snap-start overflow-auto">
        <Hero />
      </div>
      <div className="snap-start overflow-auto">
        <InfoLomba />
      </div>
      <div className="snap-start overflow-auto">
        <QandA />
      </div>
      <div className="snap-start overflow-auto">
        <Footer />
      </div>
    </div>
  );
}
