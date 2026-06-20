import { useState } from "react";
import "./DonationSlider.css";

const DonationSlider = () => {
  const [amount, setAmount] = useState(3);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const donationUrl = `/faire-un-don?amount=${amount * 100}`;

  return (
    <section id="faire-un-don" className="donation-slider-section">
      <div className="donation-slider-wrapper">
        <div className="donation-info">
          <h3>Nous avons besoin de votre générosité pour continuer d'agir</h3>
          <p>
            Vos contributions volontaires à Les Petits Poussins rendent notre
            mission possible en nous offrant les moyens de continuer à éduquer
            et accompagner.
          </p>
          <a className="link link-outline-secondary" href="/modele-economique">
            Découvrir notre modèle
          </a>
        </div>

        <div className="donation-controls">
          <p id="sliderLabel">Choisissez le montant de votre soutien :</p>
          <div className="donation-slider-container">
            <div
              className="value-label"
              style={{ left: `${(amount - 1) * (100 / 9)}%` }}
            >
              <span>{amount}</span>€
            </div>
            <input
              id="donationSlider"
              type="range"
              name="donationAmount"
              role="slider"
              min="1"
              max="10"
              value={amount}
              step="1"
              aria-labelledby="sliderLabel"
              aria-valuenow={amount}
              aria-valuemin={1}
              aria-valuemax={10}
              onChange={handleSliderChange}
            />
          </div>
          <a
            id="donationLink"
            className="link link-secondary"
            target="_blank"
            href={donationUrl}
            rel="noopener noreferrer"
          >
            Soutenir Les Petits Poussins
          </a>
        </div>
      </div>
    </section>
  );
};

export default DonationSlider;
