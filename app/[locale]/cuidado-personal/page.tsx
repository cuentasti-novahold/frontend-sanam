import SectionOne from "@/components/cuidado-personal/SectionOne";
import SectionTwo from "@/components/cuidado-personal/SectionTwo";
import SectionThree from "@/components/cuidado-personal/SectionThree";
import SectionFour from "@/components/cuidado-personal/SectionFour";
import SectionFive from "@/components/cuidado-personal/SectionFive";
import SectionSix from "@/components/cuidado-personal/SectionSix";
import EnlacesDistribuir from "@/components/nuestros-productos/Enlaces-Distribuir";

function page() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <SectionOne />
      </div>
      <div className="md:p-20 lg:p-20">
        <SectionTwo />
      </div>
      <div className="relative w-full overflow-hidden">
        <SectionThree />
      </div>
      <div className="">
        <SectionFour />
      </div>
      <div className="">
        <SectionFive />
      </div>
      <div className="">
        <SectionSix />
      </div>
      {/* <div>
        <EnlacesDistribuir />
      </div> */}
    </>
  );
}

export default page;
