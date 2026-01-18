import aboutImage from "../assets/chair-pool.jpg";
const About = () => {
  return (
    <section className="pt-28 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-heading font-bold text-primary text-center">
        About Us
      </h1>

      <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-heading font-semibold">Our Story</h2>
          <p className="mt-4 font-body text-dark leading-relaxed">
            HX India is a multi-vertical engineering and infrastructure
            organisation with expertise across contracting, industrial projects,
            and professional training. Our mission is to empower industries and
            individuals through quality, reliability, and innovation.
          </p>
        </div>

        <div className="bg-gray-300 h-80 rounded-md">
          <img src={aboutImage} alt="About Us" />;
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-light rounded-xl shadow">
          <h3 className="font-heading text-xl font-semibold">Our Mission</h3>
          <p className="mt-2 font-body text-dark">
            Deliver high-quality engineering and training solutions with
            measurable impact.
          </p>
        </div>

        <div className="p-6 bg-light rounded-xl shadow">
          <h3 className="font-heading text-xl font-semibold">Our Vision</h3>
          <p className="mt-2 font-body text-dark">
            Train and support the next-generation skilled workforce while
            enabling industrial growth.
          </p>
        </div>

        <div className="p-6 bg-light rounded-xl shadow">
          <h3 className="font-heading text-xl font-semibold">Our Values</h3>
          <p className="mt-2 font-body text-dark">
            Safety, excellence, transparency, integrity, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
