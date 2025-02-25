import Article from "./Article";
import { useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const articles = [
  {
    articleUrl:
      "https://theconversation.com/from-thoughts-to-words-how-ai-deciphers-neural-signals-to-help-a-man-with-als-speak-236998",
    imageUrl: "https://i.postimg.cc/7hkZ4pb0/art-2.avif",
    tag: "neural signals",
    title:
      "From thoughts to words: How AI deciphers neural signals to help a man with ALS speak",
    subText:
      "Researchers developed a system that can decode language based on a person’s brain activity. Such a system might one day help people who can’t speak to communicate.",
    date: "Aug 22, 2024",
  },
  {
    articleUrl:
      "https://www.nih.gov/news-events/nih-research-matters/brain-decoder-turns-person-s-brain-activity-into-words",
    imageUrl: "https://i.postimg.cc/xCChxnqg/art-1.png",
    tag: "brain activity",
    title: "Brain decoder turns a person’s brain activity into words",
    subText:
      "Researchers developed a system that can decode language based on a person’s brain activity. Such a system might one day help people who can’t speak to communicate.",
    date: "Feb 12, 2025",
  },
  {
    articleUrl:
      "https://www.ru.nl/en/research/research-news/brain-signals-transformed-into-speech-through-implants-and-ai",
    imageUrl: "https://i.postimg.cc/cLcFpCgZ/art-3.webp",
    tag: "implants and AI",
    title: "Brain signals transformed into speech through implants and AI",
    subText:
      "Researchers from Radboud University and the UMC Utrecht have succeeded in transforming brain signals into audible speech.",
    date: "Feb 12, 2023",
  },
  {
    articleUrl:
      "https://developer.nvidia.com/blog/transforming-brain-waves-into-words-with-ai/",
    imageUrl: "https://i.postimg.cc/rwymz387/art-4.png",
    tag: "Conversational AI",
    title: "Transforming Brain Waves into Words with AI",
    subText:
      "Researchers from Radboud University and the UMC Utrecht have succeeded in transforming brain signals into audible speech.",
    date: "Jul 19, 2021",
  },
];

const Articles = () => {
  const swiperRef = useRef(null);

  return (
    <section className="container mx-auto p-5">
      <div className="header flex items-center justify-between">
        <h3
          className="font-bold capitalize"
          style={{ fontSize: "clamp(1.9rem, 1.5468rem + 1.6147vw, 3rem)" }}
        >
          Latest updates
        </h3>
        <div className="flex gap-3">
          <button
            aria-label="previos slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-slate-200 p-3 rounded-full hover:bg-slate-300 duration-300 transition-colors"
          >
            <ArrowLeft />
          </button>
          <button
            aria-label="next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-slate-200 p-3 rounded-full hover:bg-slate-300 duration-300 transition-colors"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="content w-full mt-5">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            350: { slidesPerView: 1 },
            650: { slidesPerView: 2, spaceBetween: 10 },
            1200: { slidesPerView: 3, spaceBetween: 25 },
          }}
        >
          {articles.map((article) => (
            <SwiperSlide key={uuidv4()}>
              <Article {...article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Articles;
