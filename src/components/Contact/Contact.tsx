import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Nous <span className="title-highlight">Contacter</span>
          </h2>
          <p className="contact-subtitle">
            Une question ? Un projet ? N'hésitez pas à nous écrire, nous vous
            répondrons dans les plus brefs délais.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop"
                  alt="Localisation"
                />
              </div>
              <h3>Adresse</h3>
              <p>
                Les Petits Poussins
                <br />
                Yatchika, Cameroun
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=300&fit=crop"
                  alt="Email"
                />
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:contact@ecole-solidaire.org">
                  contact@ecole-solidaire.org
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <img
                  src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?w=400&h=300&fit=crop"
                  alt="Téléphone"
                />
              </div>
              <h3>Téléphone</h3>
              <p>
                <a href="tel:+237123456789">+237 1 23 45 67 89</a>
              </p>
            </div>

            {/* <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Horaires</h3>
              <p>
                Lundi - Vendredi
                <br />
                8h00 - 17h00
              </p>
            </div> */}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="information">Demande d'information</option>
                <option value="inscription">Inscription</option>
                <option value="partenariat">Partenariat</option>
                <option value="benevolat">Bénévolat</option>
                <option value="donation">Don</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
