const Services = () => {
  const services = [
    {
      title: "Turnkey Infrastructure Projects",
      content:
        "End-to-end contracting for industrial, civil, power, and electrical projects.",
    },
    {
      title: "Electrical Contracting",
      content:
        "Power distribution, substations, panel installations, audits, and safety solutions.",
    },
    {
      title: "Workforce Training",
      content:
        "Skill-based training programs to empower technicians, engineers, and support teams.",
    },
  ];

  return (
    <section className="pt-28 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-heading font-bold text-primary text-center">
        Our Services
      </h1>

      <div className="mt-12 grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all"
          >
            <div className="h-14 w-14 bg-primary text-white rounded-md flex items-center justify-center mb-4">
              ICON
            </div>
            <h3 className="font-heading text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 font-body text-dark">{s.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
