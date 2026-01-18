const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
      <div className="h-14 w-14 bg-primary text-white rounded-md flex items-center justify-center mb-4">
        {/* Icon placeholder */}
        ICON
      </div>
      <h3 className="text-xl font-heading font-semibold">{title}</h3>
      <p className="mt-2 text-dark font-body">{description}</p>
    </div>
  );
};

export default ServiceCard;
