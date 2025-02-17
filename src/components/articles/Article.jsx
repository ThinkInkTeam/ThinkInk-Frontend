import "./article.css";
import PropTypes from "prop-types";

const Article = ({ articleUrl, imageUrl, tag, title, subText, date }) => {
  return (
    <article className="mx-auto article">
      <a href={articleUrl} rel="noopener noreferrer" target="_blank">
        <div className="image w-full relative overflow-hidden rounded-[20px]">
          <img
            style={{
              height: "clamp(15.625rem, 11.2676rem + 18.5915vw, 28rem)",
            }}
            src={imageUrl}
            alt="Brain decoder turns a person’s brain activity into words article"
            loading="lazy"
            className="w-full object-cover rounded-[20px] transition-all duration-700"
          />
          <span className="tag min-w-[45px] absolute bg-white text-black text-[0.85rem] text-center top-5 left-5 z-9 rounded-lg font-bold py-[1px] px-[6px]">
            {tag}
          </span>
        </div>
        <h3
          className="mt-5 font-bold transition-all duration-500"
          style={{ fontSize: "clamp(1.25rem, 1.0739rem + 0.7512vw, 1.75rem)" }}
        >
          {title}
        </h3>
        <p className="text-[16px] hidden sm:block sm:w-[75%]">{subText}</p>
        <time
          datetime="2025-02-12T12:00:00.000Z"
          className="tracking-[0.02rem] font-medium text-[0.75rem] text-slate-500"
        >
          {date}
        </time>
      </a>
    </article>
  );
};

Article.prototype = {
  articleUrl: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  subText: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
