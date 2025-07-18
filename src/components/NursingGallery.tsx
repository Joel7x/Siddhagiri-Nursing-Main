import React from 'react';

// Add your images to public/nursing-gallery/ and list them here
const images = [
  { src: '/nursing-gallery/group1.jpg', alt: 'Siddhagiri Nursing College - Group Photo' },
  { src: '/nursing-gallery/group1.jpg', alt: '...' },
  // Add more images here, e.g.:
  // { src: '/nursing-gallery/yourimage.jpg', alt: 'Description' },
];

const NursingGallery = () => {
  return (
    <section id="nursing-gallery" className="max-w-5xl mx-auto my-16 px-2 sm:px-4 w-full">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">Nursing College Gallery</h2>
      {images.length === 0 ? (
        <div className="text-center text-blue-400 text-lg py-16">No images yet. Add your nursing college photos to <code>public/nursing-gallery/</code> and update the gallery array!</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg bg-white border border-blue-100 hover:scale-105 transition-transform cursor-pointer aspect-[4/3] flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NursingGallery; 