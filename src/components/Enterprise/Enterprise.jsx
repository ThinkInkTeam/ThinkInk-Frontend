import SectionText from "../sectionText/SectionText";

const Enterprise = () => {
  return (
    <section className="container flex flex-wrap justify-center items-center mx-auto">
      <SectionText
        Niche="Enterprise"
        title="Transforming Brain Signals into Text"
        subText="Our project converts EEG brain signals into text using advanced NLP and machine learning. This technology aims to improve communication for individuals with speech impairments, offering a seamless and innovative solution."
        firstBtnText="CONTACT US"
        secondBtnText="READ MORE"
      />
      <div className="lg:w-1/2 w-full flex justify-center items-center rounded-md px-3 lg:py-36 py-5">
        <div>
          <img
            loading="lazy"
            src="https://i.postimg.cc/zBnhXx6P/freepik-a-highcontrast-black-and-white-banner-for-thinkink-92327.png"
            alt="Brain and spine cord image"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
