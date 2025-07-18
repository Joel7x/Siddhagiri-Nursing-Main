import React from 'react';

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.013964479836!2d74.1899340751956!3d16.70837002185709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100b2e2e7b6e7%3A0x7e2e2e2e2e2e2e2e!2sSiddhagiri%20Math%2C%20Kaneri%2C%20Kolhapur%2C%20Maharashtra%20416234!5e0!3m2!1sen!2sin!4v1688899999999!5m2!1sen!2sin";
const NAVIGATE_URL = "https://g.co/kgs/gvvPHyW";

const MapSection = () => {
  return (
    <section id="map" className="max-w-4xl mx-auto my-16 px-2 sm:px-4 w-full">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">Find Us</h2>
      <div className="flex flex-col items-center justify-center w-full">
        {/* Location Map and Button */}
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-blue-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247238.23854411457!2d73.97777564104193!3d16.613120600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ffd68324e08d%3A0xe6861f88cf62e4e6!2sSiddhagiri%20Nursing%20Institute!5e1!3m2!1sen!2sin!4v1752823805570!5m2!1sen!2sin"
              className="w-full h-full min-h-[220px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Siddhagiri Nursing Institute Satellite Map"
            ></iframe>
          </div>
          <a
            href={NAVIGATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-6 inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-base sm:text-lg"
          >
            Navigate There
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-blue-700 font-semibold text-base sm:text-lg px-2">
        Siddhagiri Math, Kaneri, Kolhapur, Maharashtra 416234
      </div>
    </section>
  );
};

export default MapSection; 