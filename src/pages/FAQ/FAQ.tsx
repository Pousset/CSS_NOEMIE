import { useState } from "react";
import "./FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqs: FAQItem[] = [
    {
      category: "dons",
      question: "Comment faire un don ?",
      answer:
        "Vous pouvez faire un don en ligne via notre page dédiée. Cliquez sur 'Faire un don', choisissez votre montant et suivez les étapes. Vous pouvez également faire un virement bancaire ou envoyer un chèque.",
    },
    {
      category: "dons",
      question: "Mon don est-il déductible des impôts ?",
      answer:
        "Oui ! Vous bénéficiez d'une réduction d'impôts de 66% du montant de votre don. Par exemple, un don de 100€ ne vous coûte réellement que 34€. Vous recevrez automatiquement un reçu fiscal.",
    },
    {
      category: "dons",
      question: "Puis-je faire un don mensuel ?",
      answer:
        "Absolument ! Vous pouvez choisir entre un don ponctuel ou un don mensuel. Les dons réguliers nous aident à planifier nos actions sur le long terme.",
    },
    {
      category: "dons",
      question: "À quoi servent mes dons ?",
      answer:
        "85% de vos dons sont directement investis dans l'éducation et les repas des enfants. 15% couvrent nos frais de fonctionnement (loyer, équipement, communication). Consultez notre page 'Modèle économique' pour plus de détails.",
    },
    {
      category: "association",
      question: "Qui sommes-nous ?",
      answer:
        "Les Petits Poussins est une association dédiée à l'éducation de qualité pour tous les enfants, sans distinction. Nous accompagnons plus de 250 enfants chaque année avec un taux de réussite de 95%.",
    },
    {
      category: "association",
      question: "Où êtes-vous situés ?",
      answer:
        "Nous sommes basés à [Ville]. Vous pouvez nous contacter via notre formulaire de contact ou nous rendre visite sur rendez-vous.",
    },
    {
      category: "association",
      question: "Comment devenir bénévole ?",
      answer:
        "Nous recherchons toujours des bénévoles motivés ! Contactez-nous via notre formulaire en précisant vos disponibilités et compétences. Nous organisons régulièrement des sessions d'accueil pour les nouveaux bénévoles.",
    },
    {
      category: "inscription",
      question: "Comment inscrire mon enfant ?",
      answer:
        "L'inscription se fait en ligne via notre formulaire d'inscription. Vous pouvez également nous contacter directement pour prendre rendez-vous et visiter notre établissement.",
    },
    {
      category: "inscription",
      question: "Quels sont les critères d'admission ?",
      answer:
        "Nous accueillons tous les enfants, sans distinction. Notre mission est de rendre l'éducation accessible à tous. Contactez-nous pour discuter de votre situation.",
    },
    {
      category: "inscription",
      question: "Quels sont les horaires ?",
      answer:
        "Nous sommes ouverts du lundi au vendredi de 8h à 18h. Des activités périscolaires sont proposées jusqu'à 19h. Consultez notre emploi du temps pour plus de détails.",
    },
    {
      category: "transparence",
      question: "Publiez-vous vos comptes ?",
      answer:
        "Oui, nous croyons en la transparence totale. Notre modèle économique est détaillé sur notre site, et nous publions un rapport annuel accessible à tous.",
    },
    {
      category: "transparence",
      question: "Comment suivre l'utilisation de mon don ?",
      answer:
        "Nous envoyons une newsletter trimestrielle à tous nos donateurs avec des rapports d'activité. Vous pouvez également consulter notre page 'Actualités' pour suivre nos projets en temps réel.",
    },
  ];

  const categories = [
    { id: "all", label: "Tout" },
    { id: "dons", label: "Dons" },
    { id: "association", label: "Association" },
    { id: "inscription", label: "Inscription" },
    { id: "transparence", label: "Transparence" },
  ];

  const filteredFAQs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="faq-hero">
        <h1>Questions fréquentes</h1>
        <p>Vous avez des questions ? Nous avons les réponses !</p>
      </div>

      <div className="faq-container">
        <div className="faq-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Vous n'avez pas trouvé votre réponse ?</h3>
          <p>Notre équipe est là pour vous aider</p>
          <a href="/contact" className="btn-primary">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
