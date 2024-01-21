import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

const ContestCard = ({ itm }) => {
  return (
    <div className="contest-card">
      <Link href="/contest-details-one" className="item-link"></Link>
      <div className="contest-card__thumb">
        <Image src={itm.img} alt={itm.title} />
        <a href="#0" className="action-icon">
          <FaRegHeart />
        </a>
        <div className="contest-num">
          {/* <span >contest no:</span> */}
          <h8 className="number">{itm.contest_no}</h8>
        </div>
      </div>
      <div className="contest-card__content">
        <div className="left">
          <h5 className="contest-card__name">{itm.title}</h5>
        </div>
        <div className="right">
          <span className="contest-card__price">${itm.ticket_price}</span>
          <p>Precio Tiquete</p>
        </div>
      </div>
      <div className="contest-card__footer">
        <ul className="contest-card__meta">
          <li>
            <i className="las la-clock"></i>
            <span>{itm.day_remain}d</span>
          </li>
          <li>
            <i className="las la-ticket-alt"></i>
            <span>{itm.ticket_remain}</span>
            <p>Vendidos</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContestCard;
