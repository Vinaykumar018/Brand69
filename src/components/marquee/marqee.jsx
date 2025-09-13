import Marquee from "react-fast-marquee";

export default function BrandMarquee() {
  return (
    <div className="w-full bg-black py-2 mb-2">
      <Marquee speed={50} gradient={false}>
        <p className="mx-8 text-white uppercase tracking-[0.2em]">
          BRAND69 · Get the best quality t-shirts of our brand LevelSix9
        </p>
        <p className="mx-8 text-white uppercase tracking-[0.2em]">
          Exclusive Designs · BRAND69
        </p>
        <p className="mx-8 text-white uppercase tracking-[0.2em]">
          Premium Comfort · LevelSix9
        </p>
      </Marquee>
    </div>
  );
}
