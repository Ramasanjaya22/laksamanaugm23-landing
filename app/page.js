import { Footer, Navbar } from "@/components";
import Hero from "@/components/Hero";
import InfoLomba from "@/components/InfoLomba";

export default function Home() {
  return (
    <div className="bg-secondary-white container mx-auto overflow-hidden">
      <Navbar />
      <Hero />
      <InfoLomba />
      <Footer />
    </div>
  );
}
