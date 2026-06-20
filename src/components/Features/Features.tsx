import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "📚",
      title: "Formations gratuites",
      description:
        "Des cours de qualité accessibles à tous, sans distinction sociale ou économique.",
    },
    {
      icon: "👥",
      title: "Accompagnement personnalisé",
      description:
        "Chaque élève bénéficie d'un suivi adapté à ses besoins et à son rythme.",
    },
    {
      icon: "🌍",
      title: "Engagement humanitaire",
      description:
        "Une éducation qui prépare nos élèves à devenir des acteurs du changement.",
    },
    {
      icon: "💻",
      title: "Outils numériques",
      description:
        "Accès à des ressources en ligne et emplois du temps interactifs.",
    },
    {
      icon: "🤝",
      title: "Communauté solidaire",
      description:
        "Un réseau d'entraide entre élèves, enseignants et bénévoles.",
    },
    {
      icon: "🎯",
      title: "Projets concrets",
      description:
        "Des initiatives qui donnent du sens et développent les compétences.",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Notre engagement,{" "}
            <span className="text-highlight">votre avenir</span>
          </h2>
          <p className="features-subtitle">
            Découvrez ce qui fait la différence dans notre approche éducative
            solidaire
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
