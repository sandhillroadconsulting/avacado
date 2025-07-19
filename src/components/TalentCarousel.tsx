import { useState, useEffect } from 'react';

interface TalentCategory {
  title: string;
  facts: string[];
  color: string;
}

const talentCategories: TalentCategory[] = [
  {
    title: "Tech Excellence",
    facts: [
      "120 unicorns scaled by Indian operators",
      "Largest digital workforce after the US",
      "3rd largest startup ecosystem after US & China",
      "Strong technical education from IITs & top universities",
      "Leading in AI, blockchain, and software development"
    ],
    color: "#FF6B35" // Orange for India
  },
  {
    title: "Business Impact",
    facts: [
      "Cross-border collaboration experience",
      "Proven track record with Fortune 500 companies",
      "English proficiency and cultural adaptability",
      "Time zone compatibility across global markets",
      "Strong project management and delivery skills"
    ],
    color: "#FF6B35" // Orange for India
  },
  {
    title: "Cost & Quality",
    facts: [
      "Cost-effective without compromise",
      "Higher productivity with competitive rates",
      "Quality-focused development processes",
      "Scalable teams from junior to senior levels",
      "Reduced overhead with maintained excellence"
    ],
    color: "#FF6B35" // Orange for India
  },
  {
    title: "Market Advantage",
    facts: [
      "Access to 1.4 billion person talent pool",
      "Growing domestic market understanding",
      "Innovation-driven startup ecosystem",
      "Government support for tech initiatives",
      "Strategic location for Asian market expansion"
    ],
    color: "#FF6B35" // Orange for India
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
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Why Indian Talent?
              </h3>
              <h4 
                className={`text-lg font-medium transition-all duration-500 ${
                  isAnimating ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}
                style={{ color: currentCategory.color }}
              >
                {currentCategory.title}
              </h4>
            </div>
            
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