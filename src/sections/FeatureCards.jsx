import { abilities } from "../constants";

export default function FeatureCards() {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map((ability, index) => (
          <div
            key={index}
            className="common-card rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={ability.imgPath} alt={ability.title} />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">
              {ability.title}
            </h3>
            <p className="text-white-50 text-lg">{ability.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
