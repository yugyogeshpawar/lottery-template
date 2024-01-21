import Image from "next/image";
import Banner from "../components/common/Banner";
import FaqBody from "../components/faq/FaqBody";
import inner_hero_shape_2 from "/public/images/elements/inner-hero-shape-2.png";

const Faq = () => {
  return (
    <>
      {/* Banner section */}
      <div className="inner-hero-section style--four">
        <div className="bg-shape">
          <Image src={inner_hero_shape_2} alt="inner hero shape 2" />
        </div>

        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Pages", "/"],
            ["Faq", "/"],
          ]}
        />
      </div>

      {/* Faq boday here */}
      <FaqBody />
    </>
  );
};

export default Faq;
