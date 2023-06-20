import { Footer, Navbar, QandA } from "@/components";
import Hero from "@/components/Hero";
import InfoLomba from "@/components/InfoLomba";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory container mx-auto overflow-scroll  w-screen h-screen bg-[#F8FFF0]">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="snap-start overflow-auto h-screen">
        <Hero />
      </div>
      <div className="snap-start overflow-auto h-screen">
        <InfoLomba />
      </div>
      <div className="snap-start overflow-auto h-screen">
        <QandA />
      </div>
      <div className="snap-start overflow-auto">
        <Footer />
      </div>
    </div>
  );
}
