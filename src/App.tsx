import { useState } from 'react';
import RealWorldMap from './components/RealWorldMap';
import AudienceToggle from './components/AudienceToggle';
import type { Audience } from './components/AudienceToggle';

const content = {
  employer: {
    heading: "Build your dream team",
    subheading: "Elite global talent, deployed instantly",
    cta: {
      text: "Let's get on a call",
      link: "https://appt.link/meet-with-team-avacado-N2lER6GH/firstcall"
    }
  },
  employee: {
    heading: "Work with Europe's best",
    subheading: "From applications to relocation, we handle everything",
    cta: {
      text: "View Open Roles",
      link: "https://www.linkedin.com/company/avacadoo/jobs/?viewAsMember=true"
    }
  }
};

const employerCards = [
  {
    title: "Remote Talent Based in Asia",
    summary: "Hire the sharpest minds from the comfort of their homes to empower your global team.",
    content: "Access a vast pool of skilled professionals across Asia who can work remotely for your company. These talented individuals bring diverse perspectives, strong technical skills, and cost-effective solutions to your projects. Our rigorous vetting process ensures you get only the best candidates who are ready to integrate seamlessly with your existing team structure."
  },
  {
    title: "Remote Talent for Europe",
    summary: "We'll go a step further and relocate elite talent to Europe while taking care of payroll, visas, compliances, and everything.",
    content: "Our comprehensive relocation service handles every aspect of moving top talent to Europe. From visa applications and legal compliance to payroll setup and tax obligations, we manage the entire process. This allows you to access exceptional talent while ensuring they're working in your timezone with full legal authorization."
  },
  {
    title: "Employer of Record Solutions",
    summary: "Spotted talent that works in a geography you don't operate in? No problem, we'll handle legalities and compliances so they can start immediately.",
    content: "Our EOR services eliminate geographical barriers to hiring exceptional talent. We become the legal employer in any jurisdiction, handling all compliance, payroll, benefits, and legal requirements. This allows you to hire the best talent globally without establishing a legal entity in every country."
  }
];

const employeeCards = [
  {
    title: "Anti-Ghosting Policy",
    summary: "Our transparent process ensures timeline-first communication and removes anxiety from the equation.",
    content: "We believe in transparent, respectful communication throughout the entire hiring process. Our anti-ghosting policy ensures you receive regular updates, clear timelines, and honest feedback at every stage. No more wondering about your application status – we keep you informed every step of the way."
  },
  {
    title: "Remote-First Roles",
    summary: "Work remotely with some of the most cracked talent in Europe. Create real impact and wealth working with the finest minds.",
    content: "Join remote-first companies that value talent over location. Work alongside Europe's top performers, contribute to meaningful projects, and build wealth while maintaining work-life balance. Our partner companies offer competitive compensation packages and growth opportunities in a remote-friendly environment."
  },
  {
    title: "Post-Hiring Support",
    summary: "We handle taxes, legal compliance, and timely payouts. You focus on your work—we've got the boring stuff.",
    content: "Our support doesn't end when you get hired. We manage all administrative tasks including tax compliance, legal documentation, and ensure timely salary payments. Our dedicated support team is always available to help you navigate any challenges, allowing you to focus entirely on your work and career growth."
  },
  {
    title: "Relocation",
    summary: "We handle everything for you — visas, taxes, residency, and legal authorization to work in Europe. It's plug-and-play.",
    content: "Moving to Europe has never been easier. Our comprehensive relocation service covers visa applications, residency permits, tax registration, and all legal requirements for working in Europe. We provide step-by-step guidance and handle all paperwork, making your transition smooth and stress-free."
  },
  {
    title: "Integration Support",
    summary: "We help ensure cultural and performance fit. Replacements and feedback loops are in place if needed.",
    content: "We don't just place you in a role – we ensure you thrive. Our integration support includes cultural orientation, performance feedback mechanisms, and ongoing check-ins. If there are any fit issues, we have replacement policies and continuous feedback loops to ensure both you and your employer are satisfied."
  }
];

const globalFacts = [
  {
    fact: "Europe will need an additional 1.4 million digital professionals by 2030 to close the talent gap.",
    source: "McKinsey – The State of European Tech Talent"
  },
  {
    fact: "Demand for software engineers, data analysts, and cybersecurity specialists across Europe outpaces supply by nearly 4:1.",
    source: "LinkedIn Economic Graph"
  }
];

const problemCards = [
  {
    title: "Remote Work: A Beautiful Mess",
    content: "Fierce competition for the SAME talent. Cost inflation, attrition, profit erosion."
  },
  {
    title: "Fierce Competition for the SAME Talent",
    content: "Teams are fighting for the same pool. We give you a novel talent base — your MOAT."
  },
  {
    title: "The Occasional Travel 🛫",
    content: "Business travel, meetups, conferences are hard when teams are globally split. Our resources are already in EU."
  },
  {
    title: "Offshore Hiring is Inconsistent",
    content: "Timezone differences make great candidates say no. We get them into the EU for seamless work."
  },
  {
    title: "Time Zone Overlaps",
    content: "Async helps but overlap is key. We solve this by relocating remote-ready engineers into your timezone."
  }
];

const howItWorksSteps = [
  {
    number: "1",
    title: "Define Roles",
    description: "We work with you to detail the roles, culture fit, and skill requirements."
  },
  {
    number: "2",
    title: "Select Talent",
    description: "We source, vet, and shortlist top matches. You only interview the best."
  },
  {
    number: "3",
    title: "Relocation & Onboarding",
    description: "We manage all immigration, legal, and onboarding logistics."
  },
  {
    number: "4",
    title: "Seamless Work",
    description: "The engineer works directly with your team, fully integrated from day one."
  }
];

function App() {
  const [audience, setAudience] = useState<Audience>('employer');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);
  const [expandedFact, setExpandedFact] = useState<string | null>(null);
  
  const currentContent = content[audience];
  const currentCards = audience === 'employer' ? employerCards : employeeCards;

  const toggleCard = (cardTitle: string) => {
    setExpandedCard(expandedCard === cardTitle ? null : cardTitle);
  };

  const toggleProblem = (problemTitle: string) => {
    setExpandedProblem(expandedProblem === problemTitle ? null : problemTitle);
  };

  const toggleFact = (factText: string) => {
    setExpandedFact(expandedFact === factText ? null : factText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-avocado-dark via-avocado-dark to-gray-900 relative overflow-hidden">
      {/* Simple Art Deco Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="artDeco" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 0L120 60L60 120L0 60Z" fill="currentColor" fillOpacity="0.1"/>
              <path d="M60 20L100 60L60 100L20 60Z" fill="currentColor" fillOpacity="0.05"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#artDeco)" className="text-avocado"/>
        </svg>
      </div>

      {/* Simple corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-avocado">
          <path d="M0 0 L50 0 L0 50 Z" fill="currentColor"/>
          <path d="M10 10 L40 10 L10 40 Z" fill="currentColor" fillOpacity="0.5"/>
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-90">
        <svg viewBox="0 0 100 100" className="w-full h-full text-avocado">
          <path d="M0 0 L50 0 L0 50 Z" fill="currentColor"/>
          <path d="M10 10 L40 10 L10 40 Z" fill="currentColor" fillOpacity="0.5"/>
        </svg>
      </div>

      {/* Clean Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="text-3xl font-bold text-white tracking-wider">
                avaca<span className="text-avocado"><sub className="text-lg">🥑</sub>do</span>
              </div>
              <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-avocado to-transparent"></div>
            </div>
            <AudienceToggle onChange={setAudience} />
          </div>
        </div>
      </header>

      {/* Clean Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Hero Content */}
            <div className="space-y-8 relative">
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-avocado to-transparent opacity-30"></div>
              
              <div className="space-y-6">
                <div className="relative">
                  <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                    {currentContent.heading}
                  </h1>
                  <div className="absolute -top-4 left-0 w-16 h-px bg-avocado"></div>
                  <div className="absolute -bottom-4 right-0 w-16 h-px bg-avocado"></div>
                </div>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg font-light">
                  {currentContent.subheading}
                </p>
              </div>
              
              <div className="pt-6">
                <a
                  href={currentContent.cta.link}
                  className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-avocado to-avocado-light hover:from-avocado-light hover:to-avocado text-white font-semibold text-lg rounded-none transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative overflow-hidden group"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10">{currentContent.cta.text}</span>
                  <svg className="ml-3 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right Column - Map */}
            <div className="relative">
              <div className="absolute -inset-8 border-2 border-avocado opacity-20" style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
              }}></div>
              
              <div className="relative z-10">
                <RealWorldMap audience={audience} />
              </div>
              
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-avocado opacity-40"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-avocado opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-avocado opacity-40"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-avocado opacity-40"></div>
              
              <div className="absolute inset-0 bg-avocado opacity-5 rounded-lg blur-xl transform scale-105 -z-10" />
            </div>
          </div>
        </div>
      </main>

      {/* Audience-Specific Cards Section */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              {audience === 'employer' ? 'For Employers' : 'For Talent'}
            </h2>
            <div className="w-16 h-1 bg-avocado mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCards.map((card, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 border border-avocado opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}></div>
                
                <div className="relative p-6 cursor-pointer" onClick={() => toggleCard(card.title)}>
                  <div className="w-3 h-3 bg-avocado transform rotate-45 mb-4 relative">
                    <div className="absolute inset-0.5 bg-avocado-dark transform -rotate-45"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{card.summary}</p>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === card.title ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-gray-600">
                      <p className="text-gray-200 leading-relaxed">{card.content}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-avocado text-sm font-medium">
                      {expandedCard === card.title ? 'Show Less' : 'Read More'}
                    </span>
                    <svg 
                      className={`w-4 h-4 text-avocado transition-transform duration-300 ${
                        expandedCard === card.title ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Indian Talent section for employers */}
          {audience === 'employer' && (
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 border border-avocado opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}></div>
                
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Indian Talent?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-avocado rounded-full"></div>
                        <span className="text-gray-200">120 unicorns scaled by Indian operators</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-avocado rounded-full"></div>
                        <span className="text-gray-200">Largest digital workforce after the US</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-avocado rounded-full"></div>
                        <span className="text-gray-200">Cost-effective without compromise</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-avocado rounded-full"></div>
                        <span className="text-gray-200">Cross-border collaboration experience</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-avocado rounded-full"></div>
                        <span className="text-gray-200">3rd largest startup ecosystem after US & China</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Global Talent Market Facts */}
      <section className="relative z-10 py-24 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Global Talent Market Facts</h2>
            <div className="w-16 h-1 bg-avocado mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {globalFacts.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 border border-avocado opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}></div>
                
                <div className="relative p-6 cursor-pointer" onClick={() => toggleFact(item.fact)}>
                  <div className="w-3 h-3 bg-avocado transform rotate-45 mb-4 relative">
                    <div className="absolute inset-0.5 bg-avocado-dark transform -rotate-45"></div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-200 leading-relaxed mb-4">
                    "{item.fact}"
                  </blockquote>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedFact === item.fact ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-gray-600">
                      <cite className="text-avocado text-sm font-medium">— {item.source}</cite>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-avocado text-sm font-medium">
                      {expandedFact === item.fact ? 'Show Less' : 'Read Source'}
                    </span>
                    <svg 
                      className={`w-4 h-4 text-avocado transition-transform duration-300 ${
                        expandedFact === item.fact ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">The Problem We Solve</h2>
            <div className="w-16 h-1 bg-avocado mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {problemCards.map((problem, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 border border-avocado opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}></div>
                
                <div className="relative p-6 cursor-pointer" onClick={() => toggleProblem(problem.title)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                    <svg 
                      className={`w-5 h-5 text-avocado transition-transform duration-300 ${
                        expandedProblem === problem.title ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    expandedProblem === problem.title ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t border-gray-600 mt-4">
                      <p className="text-gray-200 leading-relaxed">{problem.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Your Remote Talent in 4 Simple Steps</h2>
            <div className="w-16 h-1 bg-avocado mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative group text-center">
                <div className="absolute inset-0 border border-avocado opacity-20 group-hover:opacity-40 transition-opacity duration-300" style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                }}></div>
                
                <div className="relative p-6">
                  <div className="w-16 h-16 bg-avocado rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-avocado-dark">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">Let's Build Your Global Team Together</h2>
            <div className="w-24 h-1 bg-avocado mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-avocado rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-avocado-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">Start with a personalized call</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-avocado rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-avocado-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proposal</h3>
              <p className="text-gray-300">Get a tailored plan in 48 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-avocado rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-avocado-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hiring</h3>
              <p className="text-gray-300">Go live in 2 weeks</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-avocado rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-avocado-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
              <p className="text-gray-300">We handle multi-country legality</p>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://appt.link/meet-with-team-avacado-N2lER6GH/firstcall"
              className="inline-flex items-center px-16 py-6 bg-gradient-to-r from-avocado to-avocado-light hover:from-avocado-light hover:to-avocado text-white font-bold text-xl rounded-none transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 relative overflow-hidden group"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <span className="relative z-10">Let's get on a call</span>
              <svg className="ml-4 w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-gray-700 pt-8 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-avocado to-transparent"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-4">
              <div className="text-gray-400 text-sm font-light tracking-wide">
                © 2024 avaca<sub className="text-xs">🥑</sub>do - Connecting talent across borders
              </div>
              <div className="flex space-x-8 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors relative group">
                  Privacy
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-avocado transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#" className="hover:text-white transition-colors relative group">
                  Terms
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-avocado transition-all duration-300 group-hover:w-full"></div>
                </a>
                <a href="#" className="hover:text-white transition-colors relative group">
                  Contact
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-avocado transition-all duration-300 group-hover:w-full"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
