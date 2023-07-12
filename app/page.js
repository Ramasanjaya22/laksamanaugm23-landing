import {
  QandA,
  Sponsors,
  Timeline,
  Hero,
  Tantangan,
  MataLomba,
} from "@/components";

const Home = () => {
  return (
    <>
      <div className="z-0">
        <Hero />
      </div>
      <div className="z-0">
        <MataLomba />
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
