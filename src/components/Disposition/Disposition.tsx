import "./Disposition.css";

const Disposition = () => {
  const installations = [
    {
      icon: "🏫",
      title: "Salles de classe",
      description: "Des espaces d'apprentissage adaptés aux élèves.",
    },
    {
      icon: "👶",
      title: "Crèche",
      description: "Un espace dédié aux tout-petits depuis 2025.",
    },
    {
      icon: "🍽️",
      title: "Cantine",
      description: "Des repas équilibrés pour chaque enfant.",
    },
    {
      icon: "🍳",
      title: "Cuisine",
      description: "Une cuisine pour préparer les repas sur place.",
    },
    {
      icon: "💻",
      title: "Salle informatique",
      description: "Accès aux outils numériques et à la formation.",
    },
    {
      icon: "🌿",
      title: "Jardin potager",
      description: "Un potager pédagogique pour le développement durable.",
    },
  ];

  return (
    <section className="disposition-section" id="disposition">
      <div className="disposition-container">
        {/* Disposition de l'école */}
        <div className="disposition-header">
          <h2 className="disposition-title">
            Dispositions de{" "}
            <span className="disposition-highlight">l'école</span>
          </h2>
          <p className="disposition-subtitle">
            Les infrastructures développées depuis 2015 pour offrir un cadre
            éducatif complet
          </p>
        </div>

        <div className="disposition-grid">
          {installations.map((item, index) => (
            <div key={index} className="disposition-card">
              <div className="disposition-icon">{item.icon}</div>
              <h3 className="disposition-card-title">{item.title}</h3>
              <p className="disposition-card-description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Organigramme */}
        <div className="organigramme-section">
          <h3 className="organigramme-title">Notre école en chiffres</h3>
          <div className="organigramme-stats">
            <div className="organigramme-stat">
              <span className="organigramme-number">53</span>
              <span className="organigramme-label">élèves</span>
            </div>
            <div className="organigramme-divider"></div>
            <div className="organigramme-stat">
              <span className="organigramme-number">6</span>
              <span className="organigramme-label">infrastructures</span>
            </div>
            <div className="organigramme-divider"></div>
            <div className="organigramme-stat">
              <span className="organigramme-number">10</span>
              <span className="organigramme-label">ans d'existence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disposition;
