"use client";

import {
  QandA,
  Sponsors,
  Timeline,
  Hero,
  InfoLomba,
  Gallery,
} from "@/components";

const Home = () => {
  return (
    <>
      <div className="snap-start overflow-auto z-0">
        <Hero />
      </div>
      <div className="snap-start overflow-auto z-0">
        <Gallery />
      </div>
      <div className="snap-start overflow-auto z-0">
        <Timeline />
      </div>
      <div className="snap-start overflow-auto z-0">
        <InfoLomba />
      </div>
      <div className="snap-start overflow-auto z-0">
        <QandA />
      </div>
      <div className="snap-start overflow-auto z-0">
        <Sponsors />
      </div>
    </>
  );
};
export default Home;
