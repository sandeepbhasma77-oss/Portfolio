import FeatureCard from "../components/FeatureCard";
import { abilities } from "../constants";

export default function FeatureCards() {
  return (
    <div className="w-full md:px-20 px-5">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {abilities.map((ability, index) => (
          <FeatureCard key={index} card={ability} />
        ))}
      </div>
    </div>
  );
}
