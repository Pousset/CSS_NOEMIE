import { useState } from "react";
// import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  // const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // const handleSectionClick = (
  //   e: React.MouseEvent<HTMLAnchorElement>,
  //   sectionId: string,
  // ) => {
  //   // Si on est sur la page d'accueil, juste scroller
  //   if (location.pathname === "/") {
  //     e.preventDefault();
  //     const element = document.getElementById(sectionId);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //     setIsMenuOpen(false);
  //     setActiveDropdown(null);
  //   }
  //   // Sinon, laisser le lien naviguer vers /#section (rechargement de page)
  // };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img
              src="/logo.png"
              alt="Les Petits Poussins"
              className="navbar-logo-img"
            />
          </a>
        </div>

        <button
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="nav-link"
                onClick={() => toggleDropdown("discover")}
              >
                Découvrir
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === "discover" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/actualites">Actualité</a>
                  </li>
                  <li>
                    <a href="/photos">Photos</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link"
                onClick={() => toggleDropdown("engage")}
              >
                S'engager
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === "engage" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/nous-parrainer">Nous Parrainer</a>
                  </li>
                  <li>
                    <a href="/devenir-benevole">Devenir bénévole</a>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="navbar-actions">
            <a href="#faire-un-don" className="btn btn-primary">
              Faire un don
            </a>
            <a href="/inscription" className="btn btn-secondary">
              S'inscrire
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
