import "./Partners.css";

const Partners = () => {
  const partners = [
    {
      name: "Les Petits Poussins",
      logo: "/logo.png",
    },
    {
      name: "VHG",
      logo: "/vhg-logo.png",
    },
    {
      name: "UNICEF",
      logo: "/unicef_logo.png",
    },
    {
      name: "Alkine",
      logo: "/alkine_logo.png",
    },
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">
          Nos <span className="title-highlight">Partenaires</span>
        </h2>
        <p className="partners-subtitle">
          Ils nous font confiance et soutiennent notre mission
        </p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-logo">
              <img src={partner.logo} alt={partner.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
