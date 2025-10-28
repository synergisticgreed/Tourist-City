

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, ArrowLeft, Star, Clock, Navigation, Plane, Camera, TrendingUp } from 'lucide-react';
import citiesData from './data/citiesData';


// Scroll animation hook
const useScrollAnimation = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const CityCard = ({ city, onClick, index }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      onClick={onClick}
      className={`group cursor-pointer bg-black overflow-hidden transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-96 overflow-hidden">
        <img 
          src={`https://images.unsplash.com/photo-${city.imageId}?w=800&h=800&fit=crop&q=80`}
          alt={city.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
        
        {/* Sharp corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-80"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={18} className="text-yellow-400" />
            <span className="text-yellow-400 font-bold tracking-widest text-xs uppercase">{city.country}</span>
          </div>
          <h3 className="text-4xl font-black text-white mb-2 tracking-tight uppercase">{city.name}</h3>
          <p className="text-gray-300 text-sm tracking-wide">{city.description}</p>
          
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            <span className="text-white text-xs font-bold tracking-wider uppercase">Explore Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TouristPlaceCard = ({ place, index }) => {
  const [ref, isVisible] = useScrollAnimation();
  
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`, '_blank');
  };

  return (
    <div 
      ref={ref}
      className={`bg-white overflow-hidden group transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={`https://images.unsplash.com/photo-${place.imageId}?w=800&h=600&fit=crop&q=80`}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
        
        {/* Sharp corner rating badge */}
        <div className="absolute top-0 right-0">
          <div className="bg-black text-white px-4 py-3 flex items-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <span className="font-black text-lg">{place.rating}</span>
          </div>
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-black absolute -bottom-[20px] right-0"></div>
        </div>
      </div>
      
      <div className="p-6 bg-white">
        <div className="mb-4">
          <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight uppercase">{place.name}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{place.description}</p>
        </div>
        
        <div className="flex items-center gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="w-8 h-8 bg-black flex items-center justify-center">
              <Clock size={16} className="text-yellow-400" />
            </div>
            <span className="font-bold">{place.time}</span>
          </div>
          <div className="h-4 w-px bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-700">
            <Camera size={16} className="text-gray-400" />
            <span className="font-bold text-xs uppercase tracking-wider">Must See</span>
          </div>
        </div>
        
        <button
          onClick={openInGoogleMaps}
          className="w-full bg-black hover:bg-gray-900 text-white font-black py-4 px-6 flex items-center justify-center gap-3 transition-all duration-300 group/btn uppercase tracking-widest text-sm"
        >
          <Navigation size={20} className="group-hover/btn:rotate-45 transition-transform duration-300" />
          View on Map
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    setSelectedCity(city);
    setCurrentView('city-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCity(null);
  };

  if (currentView === 'home') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-screen bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative h-full flex items-center justify-center px-4">
            <div className="text-center max-w-5xl">
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-400"></div>
                <Plane className="text-yellow-400" size={32} />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-400"></div>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                Discover<br />The World
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-8 tracking-wide uppercase font-bold">
                Explore • Adventure • Experience
              </p>
              
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 font-black uppercase tracking-widest">
                <TrendingUp size={20} />
                <span>Start Your Journey</span>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-white text-xs uppercase tracking-widest font-bold">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Cities Grid Section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-yellow-500 font-black text-sm uppercase tracking-widest">Featured Destinations</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight uppercase">
              Popular Cities
            </h2>
            <p className="text-gray-600 text-lg tracking-wide max-w-2xl mx-auto">
              Handpicked destinations that will take your breath away
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {citiesData.map((city, index) => (
              <CityCard 
                key={city.id}
                city={city}
                onClick={() => handleCityClick(city)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'city-detail' && selectedCity) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* City Hero */}
        <div className="relative h-[60vh] bg-black overflow-hidden">
          <img 
            src={`https://images.unsplash.com/photo-${selectedCity.imageId}?w=1920&h=1080&fit=crop&q=80`}
            alt={selectedCity.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          <button
            onClick={handleBackToHome}
            className="absolute top-8 left-8 flex items-center gap-3 text-white font-black uppercase tracking-widest text-sm hover:text-yellow-400 transition-colors bg-black/50 px-6 py-3"
          >
            <ArrowLeft size={20} />
            Back
          </button>
          
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={24} className="text-yellow-400" />
                <span className="text-yellow-400 font-black tracking-widest text-sm uppercase">{selectedCity.country}</span>
              </div>
              <h1 className="text-7xl font-black text-white mb-3 tracking-tighter uppercase">
                {selectedCity.name}
              </h1>
              <p className="text-2xl text-gray-300 tracking-wide">{selectedCity.description}</p>
            </div>
          </div>
        </div>

        {/* Attractions Section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-yellow-500 font-black text-sm uppercase tracking-widest">Must Visit</span>
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase">
              Top Attractions
            </h2>
            <p className="text-gray-600 text-lg tracking-wide">
              {selectedCity.touristPlaces.length} incredible places waiting for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCity.touristPlaces.map((place, index) => (
              <TouristPlaceCard 
                key={index}
                place={place}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default App;