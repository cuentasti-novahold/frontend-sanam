import ImpactPlanet from "@/components/proceso/content-history/ImpactPlanet";
import OurImpact from "@/components/proceso/content-history/OurImpact";
import Solution from "@/components/proceso/content-history/Solution";
import TheProblem from "@/components/proceso/content-history/TheProblem";

export default function SectionTwo() {
  return (
    <>
      <div className="mt-2">
        <OurImpact />
      </div>
      <div className="mt-2">
        <TheProblem />
      </div>
      <div className="mt-2">
        <ImpactPlanet />
      </div>
      <div className="mt-2">
        <Solution />
      </div>
    </>
  );
}
