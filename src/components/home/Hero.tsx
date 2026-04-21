"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { image: '/bgs/hero.jpg', title: 'Hero', subtitle: 'Hero' },
    { image: '/bgs/hero2.jpg', title: 'Hero2', subtitle: 'Hero2' },
    { image: '/bgs/hero3.jpg', title: 'Hero3', subtitle: 'Hero3' },
    { image: '/bgs/hero4.jpg', title: 'Hero4', subtitle: 'Hero4' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => setCurrentSlide((prev) => (prev + 1) % slides.length), 200);
      setTimeout(() => setIsTransitioning(false), 1200);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    let ticking = false;
    const updateScrollY = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden border-[0rem] lg:border-[3rem] border-transparent rounded-none lg:rounded-tl-[5rem] lg:rounded-bl-[5rem]">
      {/* DESKTOP VERSION */}
      <div className="hidden lg:block relative w-full h-full">
        {/* Horizontal Line Behind Images */}
        <div
          className={`absolute top-1/2 left-1/2 w-full max-w-4xl flex items-center justify-center z-0 pointer-events-none transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          style={{ transform: `translateX(${scrollY * -0.5}px) translateY(-50%)` }}
        >
          <hr className="absolute w-screen border-t-2 border-black opacity-50" />
        </div>

        {/* Background Carousel */}
        <div className="absolute inset-0 will-change-transform z-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ transform: `translate3d(${scrollY * -0.3}px, 0, 0)` }}
            >
              <Image src={slide.image} alt={slide.title} fill className="w-[150%] h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Hero Text */}
        <div className="absolute left-16 bottom-16 w-full z-20">
          <div className="text-center md:text-left px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-[10rem] font-light text-white drop-shadow-lg leading-tight">
              BUILD WITH PRIDE
            </h1>
            <p className="text-4xl text-white mt-2">{slides[currentSlide].subtitle}</p>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="lg:hidden relative w-full h-screen">
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30" />

        {/* Text Centered */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white">
          <h1 className="text-4xl font-semibold leading-tight mb-2">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg mb-6">{slides[currentSlide].subtitle}</p>

          {/* Small progress dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-500 ${index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
