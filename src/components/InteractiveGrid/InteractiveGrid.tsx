import "./InteractiveGrid.css";

const InteractiveGrid = () => {
  return (
    <section className="interactive-grid-section">
      <div className="interactive-grid-container">
        <h2 className="grid-section-title">
          Des actions multiples,{" "}
          <span className="text-highlight">une seule mission</span>
        </h2>

        <div className="grid-wrapper">
          {/* Div 1 - Formations */}
          <a
            className="grid-item div1 search-link"
            href="/formations"
            aria-label="Ouvrir la carte"
          >
            <img src="/noemie.jpg" alt="" loading="lazy" aria-hidden="true" />
            <div className="search-link-text">
              <p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
                    fill="#4C40CF"
                  ></path>
                </svg>
                Découvrir les ...
              </p>
              <p className="stats">25+</p>
              <p>Formations disponibles</p>
            </div>
            <div className="search-link-overlay" aria-hidden="true">
              <div className="search-link-fake-search">
                <span className="search-text">Trouver une formation</span>
                <span className="search-icon" aria-hidden="true">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                      fill="#131445"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Div 2 - Élèves */}
          <a
            className="grid-item div2 search-link"
            href="/eleves"
            aria-label="Ouvrir la carte"
          >
            <img src="/noemie.jpg" alt="" loading="lazy" aria-hidden="true" />
            <div className="search-link-text">
              <p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
                    fill="#4C40CF"
                  ></path>
                </svg>
                Découvrir les ...
              </p>
              <p className="stats">200+</p>
              <p>Élèves accompagnés</p>
            </div>
            <div className="search-link-overlay" aria-hidden="true">
              <div className="search-link-fake-search">
                <span className="search-text">Voir les témoignages</span>
                <span className="search-icon" aria-hidden="true">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                      fill="#131445"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Div 3 - Action: Inscription */}
          <a href="/inscription" className="grid-item action div3">
            <div>
              <div className="btn-propagation">
                <span className="text">S'inscrire maintenant</span>
                <span className="icon">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="64 64 512 512"
                  >
                    <path
                      d="M320 544C443.7 544 544 443.7 544 320C544 196.3 443.7 96 320 96C196.3 96 96 196.3 96 320C96 443.7 196.3 544 320 544zM320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM384 368L384 278.6L251.3 411.3C245.1 417.5 234.9 417.5 228.7 411.3C222.5 405.1 222.5 394.9 228.7 388.7L361.4 256L272 256C263.2 256 256 248.8 256 240C256 231.2 263.2 224 272 224L400 224C408.8 224 416 231.2 416 240L416 368C416 376.8 408.8 384 400 384C391.2 384 384 376.8 384 368z"
                      fill="#4C40CF"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <p>Inscription</p>
              <p>Rejoignez notre école et commencez votre parcours</p>
            </div>
          </a>

          {/* Div 4 - Ateliers */}
          <a
            className="grid-item div4 search-link"
            href="/ateliers"
            aria-label="Ouvrir la carte"
          >
            <img src="/noemie.jpg" alt="" loading="lazy" aria-hidden="true" />
            <div className="search-link-text">
              <p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
                    fill="#4C40CF"
                  ></path>
                </svg>
                Découvrir les ...
              </p>
              <p className="stats">30+</p>
              <p>Ateliers pratiques</p>
            </div>
            <div className="search-link-overlay" aria-hidden="true">
              <div className="search-link-fake-search">
                <span className="search-text">Trouver un atelier</span>
                <span className="search-icon" aria-hidden="true">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                      fill="#131445"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Div 5 - Événements */}
          <a
            className="grid-item div5 search-link"
            href="/evenements"
            aria-label="Ouvrir la carte"
          >
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
            <div className="search-link-text">
              <p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
                    fill="#4C40CF"
                  ></path>
                </svg>
                Découvrir les ...
              </p>
              <p className="stats">15+</p>
              <p>Événements annuels</p>
            </div>
            <div className="search-link-overlay" aria-hidden="true">
              <div className="search-link-fake-search">
                <span className="search-text">Voir les événements</span>
                <span className="search-icon" aria-hidden="true">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                      fill="#131445"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Div 6 - Action: Emploi du temps */}
          <a href="/emploi-du-temps" className="grid-item action div6">
            <div>
              <div className="btn-propagation">
                <span className="text">Consulter l'emploi du temps</span>
                <span className="icon">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="64 64 512 512"
                  >
                    <path
                      d="M320 544C443.7 544 544 443.7 544 320C544 196.3 443.7 96 320 96C196.3 96 96 196.3 96 320C96 443.7 196.3 544 320 544zM320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM384 368L384 278.6L251.3 411.3C245.1 417.5 234.9 417.5 228.7 411.3C222.5 405.1 222.5 394.9 228.7 388.7L361.4 256L272 256C263.2 256 256 248.8 256 240C256 231.2 263.2 224 272 224L400 224C408.8 224 416 231.2 416 240L416 368C416 376.8 408.8 384 400 384C391.2 384 384 376.8 384 368z"
                      fill="#4C40CF"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <p>Emploi du temps</p>
              <p>Planifiez votre semaine et vos cours</p>
            </div>
          </a>

          {/* Div 7 - Ressources */}
          <a
            className="grid-item div7 search-link"
            href="/ressources"
            aria-label="Ouvrir la carte"
          >
            <img
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
            <div className="search-link-text">
              <p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
                    fill="#4C40CF"
                  ></path>
                </svg>
                Découvrir les ...
              </p>
              <p className="stats">500+</p>
              <p>Ressources pédagogiques</p>
            </div>
            <div className="search-link-overlay" aria-hidden="true">
              <div className="search-link-fake-search">
                <span className="search-text">Parcourir les ressources</span>
                <span className="search-icon" aria-hidden="true">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                      fill="#131445"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Div 8 - Action: Faire un don */}
          <a href="/faire-un-don" className="grid-item action div8">
            <div>
              <div className="btn-propagation">
                <span className="text">Faire un don</span>
                <span className="icon">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="64 64 512 512"
                  >
                    <path
                      d="M320 544C443.7 544 544 443.7 544 320C544 196.3 443.7 96 320 96C196.3 96 96 196.3 96 320C96 443.7 196.3 544 320 544zM320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM384 368L384 278.6L251.3 411.3C245.1 417.5 234.9 417.5 228.7 411.3C222.5 405.1 222.5 394.9 228.7 388.7L361.4 256L272 256C263.2 256 256 248.8 256 240C256 231.2 263.2 224 272 224L400 224C408.8 224 416 231.2 416 240L416 368C416 376.8 408.8 384 400 384C391.2 384 384 376.8 384 368z"
                      fill="#4C40CF"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <p>Don</p>
              <p>Soutenez notre mission éducative</p>
            </div>
          </a>

          {/* Div 9 - Image décorative */}
          <div className="grid-item div9">
            <img
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>

          {/* Div 10 - Projets humanitaires */}
          <a
            className="grid-item div10 search-link"
            href="/projets"
            aria-label="Ouvrir la carte"
          >
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
            <div className="search-link-text">
              <p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
                    fill="#4C40CF"
                  ></path>
                </svg>
                Découvrir les ...
              </p>
              <p className="stats">12</p>
              <p>Projets humanitaires en cours</p>
            </div>
            <div className="search-link-overlay" aria-hidden="true">
              <div className="search-link-fake-search">
                <span className="search-text">Voir les projets</span>
                <span className="search-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                      fill="#131445"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Div 11 - Image décorative */}
          <div className="grid-item div11">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>

          {/* Div 12 - Partenariats */}
          <a
            className="grid-item div12 search-link"
            href="/partenaires"
            aria-label="Ouvrir la carte"
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
            <div className="search-link-text">
              <p>
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    d="M0 55.2L0 426c0 12.2 9.9 22 22 22c6.3 0 12.4-2.7 16.6-7.5L121.2 346l58.1 116.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9L179.8 320l118.1 0c12.2 0 22.1-9.9 22.1-22.1c0-6.3-2.7-12.3-7.4-16.5L38.6 37.9C34.3 34.1 28.9 32 23.2 32C10.4 32 0 42.4 0 55.2z"
                    fill="#4C40CF"
                  ></path>
                </svg>
                Découvrir les ...
              </p>
              <p className="stats">20+</p>
              <p>Partenaires engagés</p>
            </div>
            <div className="search-link-overlay" aria-hidden="true">
              <div className="search-link-fake-search">
                <span className="search-text">Voir nos partenaires</span>
                <span className="search-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                      d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
                      fill="#131445"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </a>

          {/* Div 13 - Action: Devenir bénévole */}
          <a href="/benevolat" className="grid-item action div13">
            <div>
              <div className="btn-propagation">
                <span className="text">Devenir bénévole</span>
                <span className="icon" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="64 64 512 512"
                  >
                    <path
                      d="M320 544C443.7 544 544 443.7 544 320C544 196.3 443.7 96 320 96C196.3 96 96 196.3 96 320C96 443.7 196.3 544 320 544zM320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM384 368L384 278.6L251.3 411.3C245.1 417.5 234.9 417.5 228.7 411.3C222.5 405.1 222.5 394.9 228.7 388.7L361.4 256L272 256C263.2 256 256 248.8 256 240C256 231.2 263.2 224 272 224L400 224C408.8 224 416 231.2 416 240L416 368C416 376.8 408.8 384 400 384C391.2 384 384 376.8 384 368z"
                      fill="#4C40CF"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <p>Bénévolat</p>
              <p>Rejoignez notre équipe de volontaires</p>
            </div>
          </a>

          {/* Div 14 - Image décorative */}
          <div className="grid-item div14">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>

          {/* Div 15 - Action: Contact */}
          <a href="/contact" className="grid-item action div15">
            <div>
              <div className="btn-propagation">
                <span className="text">Nous contacter</span>
                <span className="icon" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="64 64 512 512"
                  >
                    <path
                      d="M320 544C443.7 544 544 443.7 544 320C544 196.3 443.7 96 320 96C196.3 96 96 196.3 96 320C96 443.7 196.3 544 320 544zM320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64zM384 368L384 278.6L251.3 411.3C245.1 417.5 234.9 417.5 228.7 411.3C222.5 405.1 222.5 394.9 228.7 388.7L361.4 256L272 256C263.2 256 256 248.8 256 240C256 231.2 263.2 224 272 224L400 224C408.8 224 416 231.2 416 240L416 368C416 376.8 408.8 384 400 384C391.2 384 384 376.8 384 368z"
                      fill="#4C40CF"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <p>Contact</p>
              <p>Des questions ? Parlons ensemble</p>
            </div>
          </a>

          {/* Div 16 - Image décorative */}
          <div className="grid-item div16">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>

          {/* Div 17 - Image décorative */}
          <div className="grid-item div17">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGrid;
