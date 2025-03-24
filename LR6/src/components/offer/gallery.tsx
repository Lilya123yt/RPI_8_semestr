import React from "react";

interface GalleryProps {
    images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => (
    <div className="offer__gallery">
        {images.map((src, index) => (
            <div key={index} className="offer__image-wrapper">
                <img className="offer__image" src={src} alt="Photo studio" />
            </div>
        ))}
    </div>
);

export default Gallery;
