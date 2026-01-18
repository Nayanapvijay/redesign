import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "Turnkey Infrastructure Projects",
      description: "Electrical, civil, and industrial contracting solutions.",
    },
    {
      title: "Electrical Contracting Services",
      description: "Power distribution, substations, safety audits, and more.",
    },
    {
      title: "Technical Training Institute",
      description: "Skill development and career-oriented programs.",
    },
  ];

  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center text-primary">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
