
import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  cta: {
    text: string;
    link: string;
  };
  align?: "left" | "center" | "right";
}

interface HeroSliderProps {
  slides: Slide[];
  autoplay?: boolean;
  interval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoplay = true,
  interval = 5000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, currentSlide, isAnimating]);

  return (
    <div className="relative h-[75vh] md:h-[85vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>
          
          {/* Content */}
          <div className="relative h-full flex items-center z-20">
            <div 
              className={cn(
                "container mx-auto px-6 md:px-10",
                slide.align === "center" && "text-center",
                slide.align === "right" && "text-right ml-auto"
              )}
            >
              <div 
                className={cn(
                  "max-w-lg",
                  slide.align === "center" && "mx-auto",
                  slide.align === "right" && "ml-auto"
                )}
              >
                <h2 
                  className="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight animate-slide-in"
                  style={{ animationDelay: "200ms" }}
                >
                  {slide.title}
                </h2>
                <p 
                  className="text-lg md:text-xl text-white/90 mb-8 animate-slide-in"
                  style={{ animationDelay: "400ms" }}
                >
                  {slide.subtitle}
                </p>
                <Button 
                  className="animate-slide-in"
                  style={{ animationDelay: "600ms" }}
                  size="lg"
                  asChild
                >
                  <a href={slide.cta.link}>
                    {slide.cta.text}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 h-12 w-12 rounded-full text-white hover:bg-black/20 hover:text-white"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <ArrowLeft size={20} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 h-12 w-12 rounded-full text-white hover:bg-black/20 hover:text-white"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <ArrowRight size={20} />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            )}
            onClick={() => {
              if (isAnimating) return;
              setIsAnimating(true);
              setCurrentSlide(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
