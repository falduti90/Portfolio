import { useState, useEffect } from 'react';

const photosByCategory = [
  {
    category: "Aruba",
    photos: [
      { src: "/images/Aruba/aruba1.jpeg", alt: "Aruba 1" },
      { src: "/images/Aruba/aruba2.jpeg", alt: "Aruba 2" },
      { src: "/images/Aruba/aruba3.jpeg", alt: "Aruba 3" },
      { src: "/images/Aruba/aruba4.jpeg", alt: "Aruba 4" },
      { src: "/images/Aruba/aruba5.jpeg", alt: "Aruba 5" },
      { src: "/images/Aruba/aruba6.jpeg", alt: "Aruba 6" }
    ]
  },
  {
    category: "Automovilismo",
    photos: [
      { src: "/images/Automovilismo/auto1.jpeg", alt: "Auto 1" },
      { src: "/images/Automovilismo/auto2.jpeg", alt: "Auto 2" },
      { src: "/images/Automovilismo/auto3.jpeg", alt: "Auto 3" },
      { src: "/images/Automovilismo/auto4.jpeg", alt: "Auto 4" }
    ]
  },
  {
    category: "Panama",
    photos: [
      { src: "/images/Panama/pana1.jpeg", alt: "Panama 1" },
      { src: "/images/Panama/pana2.jpeg", alt: "Panama 2" },
      { src: "/images/Panama/pana3.jpeg", alt: "Panama 3" },
      { src: "/images/Panama/pana4.jpeg", alt: "Panama 4" },
      { src: "/images/Panama/pana5.jpeg", alt: "Panama 5" },
      { src: "/images/Panama/pana6.jpeg", alt: "Panama 6" },
      { src: "/images/Panama/pana7.jpeg", alt: "Panama 7" },
      { src: "/images/Panama/pana8.jpeg", alt: "Panama 8" },
      { src: "/images/Panama/pana9.jpeg", alt: "Panama 9" },
      { src: "/images/Panama/pana10.jpeg", alt: "Panama 10" },
    ]
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentCategory = photosByCategory[activeCategory];
  const currentPhoto = currentCategory.photos[currentPhotoIndex];

  const nextPhoto = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === currentCategory.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? currentCategory.photos.length - 1 : prevIndex - 1
    );
  };

  const goToPhoto = (index) => {
    if (isTransitioning || index === currentPhotoIndex) return;
    
    setIsTransitioning(true);
    setCurrentPhotoIndex(index);
  };

  const changeCategory = (index) => {
    if (index === activeCategory) return;
    
    setActiveCategory(index);
    setCurrentPhotoIndex(0);
  };

  // Efecto para manejar la finalización de la transición
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Duración de la transición en ms
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section id="gallery" className="mx-auto max-w-4xl px-6 py-12 border-t border-neutral-800">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
          Galería de Fotos
        </h2>
        <p className="text-neutral-400 text-sm">Mis viajes y pasiones</p>
      </div>

      {/* Selector de categorías */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-1 p-1 bg-neutral-900/50 rounded-xl border border-neutral-800">
          {photosByCategory.map((category, index) => (
            <button
              key={index}
              onClick={() => changeCategory(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === index 
                  ? 'text-white bg-cyan-500/20 shadow-md shadow-cyan-500/10' 
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
      </div>

      {/* Carrusel principal */}
      <div className="relative bg-neutral-900/30 rounded-xl border border-neutral-800 p-4 mb-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            <img 
              src={currentPhoto.src} 
              alt={currentPhoto.alt}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.src = '/images/placeholder.jpg';
              }}
            />
          </div>
        </div>

        {/* Controles de navegación */}
        <button 
          onClick={prevPhoto}
          disabled={isTransitioning}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button 
          onClick={nextPhoto}
          disabled={isTransitioning}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 disabled:opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Indicadores de posición */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2">
            {currentCategory.photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentPhotoIndex 
                    ? 'bg-cyan-500 w-6' 
                    : 'bg-neutral-700 w-2 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Información de la foto actual */}
        <div className="text-center mt-3">
          <p className="text-white font-medium">{currentPhoto.alt}</p>
          <p className="text-neutral-400 text-sm">
            {currentPhotoIndex + 1} de {currentCategory.photos.length} - {currentCategory.category}
          </p>
        </div>
      </div>

      {/* Miniaturas de vista previa */}
      <div className="grid grid-cols-5 gap-2">
        {currentCategory.photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => goToPhoto(index)}
            className={`aspect-square overflow-hidden rounded-lg border transition-all duration-200 ${
              index === currentPhotoIndex 
                ? 'border-cyan-500 ring-2 ring-cyan-500/30' 
                : 'border-neutral-700 hover:border-neutral-500'
            }`}
          >
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = '/images/placeholder.jpg';
              }}
            />
          </button>
        ))}
      </div>
    </section>
  );
}