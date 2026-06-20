import { useState } from "react";
import "./Photos.css";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&h=600&fit=crop",
    alt: "Enfants en classe",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
    alt: "Salle de classe",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&h=600&fit=crop",
    alt: "Enfants qui jouent",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    alt: "Enfants souriants",
  },
  {
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&h=600&fit=crop",
    alt: "Petits enfants à la crèche",
  },
  {
    src: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?w=800&h=600&fit=crop",
    alt: "Paysage rural Cameroun",
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    alt: "Livres et fournitures scolaires",
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop",
    alt: "Mains d'enfants",
  },
  {
    src: "https://images.unsplash.com/photo-1611361289104-5fba0e0cd566?w=800&h=600&fit=crop",
    alt: "Enfants africains à l'école",
  },
];

const Photos = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigateLightbox = (direction: number) => {
    if (lightbox === null) return;
    const newIndex = lightbox + direction;
    if (newIndex >= 0 && newIndex < photos.length) {
      setLightbox(newIndex);
    }
  };

  return (
    <div className="photos-page">
      <div className="photos-hero">
        <h1>Galerie Photos</h1>
        <p>Découvrez la vie quotidienne à l'école Les Petits Poussins</p>
      </div>

      <div className="photos-container">
        <div className="photos-grid">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="photo-card"
              onClick={() => openLightbox(index)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="photo-overlay">
                <p className="photo-alt">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            {lightbox > 0 && (
              <button
                className="lightbox-nav lightbox-prev"
                onClick={() => navigateLightbox(-1)}
              >
                ‹
              </button>
            )}
            <img src={photos[lightbox].src} alt={photos[lightbox].alt} />
            <p className="lightbox-caption">{photos[lightbox].alt}</p>
            {lightbox < photos.length - 1 && (
              <button
                className="lightbox-nav lightbox-next"
                onClick={() => navigateLightbox(1)}
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
