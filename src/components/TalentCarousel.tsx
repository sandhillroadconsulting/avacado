import { useState, useEffect } from 'react';

interface TalentCategory {
  title: string;
  facts: string[];
  color: string;
}

const talentCategories: TalentCategory[] = [
  {
    title: "Indian Talent",
    facts: [
      "120 unicorns scaled by Indian operators",
      "Largest digital workforce after the US",
      "Cost-effective without compromise",
      "Cross-border collaboration experience",
      "3rd largest startup ecosystem after US & China"
    ],
    color: "#FF6B35" // Orange for India
  },
  {
    title: "Southeast Asian Talent",
    facts: [
      "Growing tech hubs in Singapore, Philippines & Vietnam",
      "Strong English proficiency across the region",
      "Competitive rates with high quality output",
      "Timezone compatibility with Australia & Japan",
      "Emerging fintech and e-commerce expertise"
    ],
    color: "#00B4D8" // Blue for Southeast Asia
  },
  {
    title: "Eastern European Talent",
    facts: [
      "World-class developers from Poland, Romania & Ukraine",
      "Strong technical education systems",
      "EU timezone compatibility",
      "Proven track record with US & European companies",
      "Expertise in AI, blockchain, and cybersecurity"
    ],
    color: "#7209B7" // Purple for Eastern Europe
  },
  {
    title: "Latin American Talent",
    facts: [
      "Nearshore advantage for US companies",
      "Growing tech scenes in Mexico, Brazil & Argentina",
      "Cultural alignment with North American markets",
      "Competitive timezone overlap",
      "Rising expertise in mobile and web development"
    ],
    color: "#F72585" // Pink for Latin America
  }
];

const TalentCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === talentCategories.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentCategory = talentCategories[currentIndex];

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <div className="relative group">
        <div 
          className="absolute inset-0 border opacity-20 group-hover:opacity-40 transition-all duration-500" 
          style={{
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
            borderColor: currentCategory.color
          }}
        ></div>
        
        <div className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 
              className={`text-2xl font-bold transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
              }`}
              style={{ color: currentCategory.color }}
            >
              Why {currentCategory.title}?
            </h3>
            
            {/* Progress indicators */}
            <div className="flex space-x-2">
              {talentCategories.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 opacity-100' : 'w-2 opacity-40'
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? currentCategory.color : '#666'
                  }}
                />
              ))}
            </div>
          </div>
          
          <div 
            className={`transition-all duration-500 ${
              isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {currentCategory.facts.slice(0, 3).map((fact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: currentCategory.color }}
                    ></div>
                    <span className="text-gray-200">{fact}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {currentCategory.facts.slice(3).map((fact, index) => (
                  <div key={index + 3} className="flex items-center space-x-3">
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: currentCategory.color }}
                    ></div>
                    <span className="text-gray-200">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subtle animation effect */}
          <div 
            className="absolute top-0 right-0 w-32 h-1 opacity-30 animate-pulse"
            style={{
              background: `linear-gradient(90deg, transparent, ${currentCategory.color}, transparent)`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TalentCarousel; 