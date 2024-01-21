import Image from "next/image";
import Link from "next/link";
import { FaRegComments, FaRegEye } from "react-icons/fa";
import { blogData } from "../../data/blogData";

const LeftSide = () => {
  return (
    <div className="col-lg-8 mb-none-30">
      {/* blog section here */}
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-card style--two mb-30 has-link">
          <Link href="/blog-single" className="item-link"></Link>
          <div className="blog-card__thumb">
            <Image src={blog.img} alt={blog.title} />
          </div>
          <div className="blog-card__content">
            <h3 className="blog-card__title">{blog.title}</h3>
            <ul className="blog-card__meta">
              <li className="d-flex align-items-center gap-1">
                <FaRegComments className="fs-6" />
                <span>{blog.comments} Comments</span>
              </li>
              <li className="d-flex align-items-center gap-1">
                <FaRegEye className="fs-6" />
                <span>{blog.views} Views</span>
              </li>
            </ul>
            <p>{blog.short_desc}</p>
            <div className="blog-card__footer">
              <div className="left">
                <span className="post-date">{blog.date} BY</span>
                <div className="post-author">
                  <Image src={blog.author_avt} alt={blog.author_name} />
                  <span className="name">{blog.author_name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
