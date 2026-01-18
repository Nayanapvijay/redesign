import aboutImage from "../assets/chair-pool.jpg";
const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary">
            Who We Are
          </h2>
          <p className="mt-4 text-dark font-body leading-relaxed">
            HX India is a multi-vertical engineering and infrastructure
            organization delivering industrial contracting, power distribution,
            and professional training.
          </p>
          <button className="mt-6 bg-primary text-white px-5 py-3 rounded-md font-semibold">
            Learn More
          </button>
        </div>

        <div className="bg-gray-300 h-64 rounded-md">
          <img src={aboutImage} alt="About Us" />;
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
