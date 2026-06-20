import "./Missions.css";

const Missions = () => {
  const missions = [
    {
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
      title: "Éducation maternelle et primaire",
      description:
        "L'éducation de niveau maternelle et primaire, socle fondamental pour l'avenir de chaque enfant.",
      layout: "vertical",
    },
    {
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
      title: "Prévention santé et pédagogie",
      description:
        "La prévention santé et la formation des enseignants à une pédagogie non-violente.",
      layout: "vertical",
    },
    {
      image:
        "https://images.unsplash.com/photo-1592150621744-aca64f48394a?q=80&w=600&auto=format&fit=crop",
      title: "Développement durable",
      description:
        "Le développement durable avec la mise en place d'un jardin potager dans l'école.",
      layout: "vertical",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop",
      title: "École inclusive",
      description:
        "École ouverte aux enfants en situation de handicap, parce que chaque enfant mérite sa chance.",
      layout: "vertical",
    },
    {
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
      title: "Alphabétisation",
      description:
        "Mise en place de cours d'alphabétisation en français et anglais pour les parents d'élèves.",
      layout: "vertical",
    },
    {
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop",
      title: "Ouverture d'une crèche",
      description:
        "Depuis la rentrée 2025, l'ouverture d'une crèche pour accueillir les tout-petits.",
      layout: "vertical",
    },
  ];

  return (
    <section className="missions-section" id="nos-missions">
      <div className="missions-container">
        <div className="missions-header">
          <h2 className="missions-title">
            Nos <span className="title-highlight">Missions</span>
          </h2>
          <p className="missions-subtitle">
            Depuis Yatchika au Cameroun, nous œuvrons chaque jour pour
            l'éducation et le bien-être de nos enfants
          </p>
        </div>

        <div className="missions-grid">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`mission-card mission-${mission.layout}`}
            >
              <div className="mission-image-wrapper">
                <img
                  src={mission.image}
                  alt={mission.title}
                  className="mission-image"
                />
                <div className="mission-overlay"></div>
              </div>
              <div className="mission-content">
                <h3 className="mission-title">{mission.title}</h3>
                <p className="mission-description">{mission.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="missions-discover">
          <div className="missions-discover-buttons">
            <a
              href="/resultats#disposition"
              className="discover-btn"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop)",
              }}
            >
              <span className="discover-btn-label">Dispositions</span>
            </a>
            <a
              href="/resultats#organigramme"
              className="discover-btn"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop)",
              }}
            >
              <span className="discover-btn-label">Organigramme</span>
            </a>
            <a
              href="/resultats#excellence"
              className="discover-btn"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop)",
              }}
            >
              <span className="discover-btn-label">Excellence éducative</span>
            </a>
            <a
              href="/resultats#partenaires"
              className="discover-btn"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop)",
              }}
            >
              <span className="discover-btn-label">Partenaires</span>
            </a>
          </div>
          <p className="discover-hint">Cliquer pour en savoir plus</p>
        </div>
      </div>
    </section>
  );
};

export default Missions;
