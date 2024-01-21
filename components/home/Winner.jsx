import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import winner from "/public/images/bg/winner.jpg";
import car from "/public/images/elements/car.png";
import w_1 from "/public/images/winner/w-1.png";

import "slick-carousel/slick/slick.css";

const NextBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      className="prev slick-arrow bg-transparent"
      onClick={onClick}
    >
      <i>
        <BsArrowLeft />
      </i>
    </button>
  );
};

const PrevBtn = ({ onClick }) => {
  return (
    <button
      type="button"
      className="next slick-arrow bg-transparent"
      onClick={onClick}
    >
      <i>
        <BsArrowRight />
      </i>
    </button>
  );
};

const Winner = () => {
  const settings = {
    speed: 700,
    arrows: true,
    dots: false,
    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
  };
  return (
    <section className="position-relative pt-120 pb-120">
      <div className="bg-el">
        <Image src={winner} alt="image" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-header text-center">
              {/* <span className="section-sub-title">
                The biggest lottery winners of the month
              </span> */}
              <h2 className="section-title">Como lo hacemos?</h2>
              <p>
              En nuestras rifas, utilizamos la Lotería de Medellín en Colombia como fuente para determinar el número de NFT ganador.. Trabajamos en la red de bloques de Binance Smart Chain para garantizar transparencia y seguridad en cada paso del proceso.
Creamos NFTs únicos que representan las rifas adquiridas. Utilizamos contratos inteligentes en red de bloques  para capturar automáticamente el número ganador basado en el resultado de la Lotería de Medellín. Esto asegura un proceso justo y confiable.
Una vez que se determina el número ganador, entregamos los premios en forma de USDT de manera instantánea y automática. Así, puedes disfrutar de una experiencia emocionante y confiable al participar en nuestras rifas respaldadas por la Lotería de Medellín y la red de bloques de Binance Smart Chain.

              </p>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="winner-wrapper">
              <div className="left">
                <div className="winner-prize-thumb">
                  <Image src={car} alt="image" />
                </div>
              </div>
              <div className="right">
                <Slider {...settings} className="winner-slider">
                  {[1, 2, 3, 4, 5].map((itm, i) => (
                    <div key={itm} className="winner-slide-item">
                      <div className="winner-thumb">
                        <Image src={w_1} alt="image" />
                      </div>
                      <div className="winner-content bg_img">
                        <h6 className="winner-name">Breeze Zodiac</h6>
                        <p>Draw took place on</p>
                        <span className="draw-date">19/04/2020</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Winner;
