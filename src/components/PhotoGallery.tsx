import React from 'react';

const photos = [
  {
    src: '/gallery/group1.jpg',
    alt: 'Siddhagiri Nursing Institute - Group Photo',
  },
  {
    src: '/gallery/vaccine1.jpg',
    alt: 'Vaccination drive at Siddhagiri Nursing Institute',
  },
  {
    src: '/gallery/oath1.jpg',
    alt: 'Nursing students taking oath at Siddhagiri Nursing Institute',
  },
  // Add more images here as needed
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="max-w-5xl mx-auto my-16 px-2 sm:px-4 w-full">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {photos.map((photo, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden shadow-lg bg-white border border-blue-100 hover:scale-105 transition-transform cursor-pointer aspect-[4/3] flex items-center justify-center">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Placeholder for more images */}
        <div className="flex items-center justify-center rounded-2xl bg-blue-50 border border-blue-100 aspect-[4/3] text-blue-400 font-bold text-xl">
          More photos coming soon...
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery; 