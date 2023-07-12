import {
  QandA,
  Sponsors,
  Timeline,
  Hero,
  InfoLomba,
  Gallery,
  Tantangan,
} from "@/components";

const Home = () => {
  return (
    <>
      <div className="z-0">
        <Hero />
      </div>
      <div className="z-0">
        <InfoLomba />
      </div>
      <div className="z-0">
        <Timeline />
      </div>
      <div className="z-0">
        <Sponsors />
      </div>
      <div className="z-0">
        <QandA />
      </div>
      <div className="z-0 ">
        <Tantangan />
      </div>
    </>
  );
};
export default Home;
