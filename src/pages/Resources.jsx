import React from "react";

const resources = [
  {
    id: 1,
    title: "Plate Heat Exchanger Guide",
    description:
      "Learn about Plate Heat Exchanger types, working principles, and selection criteria for industrial applications.",
    link: "/docs/plate-heat-exchanger-guide.pdf",
  },
  {
    id: 2,
    title: "Product Datasheets",
    description:
      "Download detailed datasheets for Gasketed, Welded and Semi-welded Plate Heat Exchangers.",
    link: "/docs/product-datasheets.pdf",
  },
  {
    id: 3,
    title: "Engineering Support",
    description:
      "Request custom engineering support for heat transfer systems and optimized thermal performance.",
    link: "/contact",
  },
  {
    id: 4,
    title: "Case Studies",
    description:
      "Explore real industrial applications where our heat transfer solutions improved efficiency and sustainability.",
    link: "/case-studies",
  },
];

const Resource = () => {
  return (
    <section className="pt-28 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-heading font-bold text-primary text-center">
        Resources & Documentation
      </h1>

      <p className="mt-4 text-center font-body text-dark max-w-3xl mx-auto">
        Access technical references, guides and support materials to help you
        choose, implement and maintain efficient heat transfer systems.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {resources.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-6 hover:shadow-lg transition bg-white"
          >
            <h2 className="text-2xl font-heading font-semibold text-primary">
              {item.title}
            </h2>
            <p className="mt-2 font-body text-dark">{item.description}</p>
            <a
              href={item.link}
              className="mt-4 inline-block bg-primary text-white px-5 py-3 rounded-md font-semibold"
            >
              {item.link.includes("pdf") ? "Download" : "Learn More"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resource;
