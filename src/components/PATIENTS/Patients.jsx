import SectionText from "../sectionText/SectionText";

const Patients = () => {
  return (
    <section className="container flex flex-wrap justify-center items-center mx-auto">
      <SectionText
        Niche="PATIENTS"
        title="Breaking Barriers in Communication"
        subText="Our innovative system translates brain signals into text, empowering patients with speech impairments to express themselves effortlessly. Using advanced EEG technology and AI-driven processing, we provide a seamless way for individuals to communicate their thoughts in real-time. Join us in redefining accessibility and independence for those in need."
        firstBtnText="LEARN MORE"
        secondBtnText="GET SUPPORT"
      />
      <div className="lg:w-1/2 w-full flex justify-center items-center rounded-md px-3 lg:py-36 py-5">
        <div>
          <img
            loading="lazy"
            src="https://i.postimg.cc/B6Sm8f2q/freepik-the-style-is-candid-image-photography-with-natural-95066.jpg"
            alt="Brain and spine cord image"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Patients;
