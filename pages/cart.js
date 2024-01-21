import Image from "next/image";
import TotallCart from "../components/cart/TotallCart";
import Banner from "../components/common/Banner";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";

const Cart = () => {
  return (
    <>
      {/* Banner Section here */}
      <div className="inner-hero-section">
        <div className="bg-shape">
          <Image src={inner_hero_shape} alt="inner_hero_shape" />
        </div>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Lottery", "/"],
            ["Contest No: B2T", "/"],
            ["Pick your Lottery Number", "/"],
            ["My Cart", "/"],
          ]}
        />
      </div>

      {/* Total Cart Section here */}
      <TotallCart />
    </>
  );
};

export default Cart;
