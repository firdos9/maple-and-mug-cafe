import { galleryItems } from "../data/galleryData";

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h1>Our Gallery</h1>
      <div className="gallery-grid">
        {galleryItems.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-img"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
