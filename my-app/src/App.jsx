import React, { useState } from 'react';
import "./App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [language, setLanguage] = useState('English');
  const [email, setEmail] = useState('');

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail('');
  };

  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question: "Is Netflix good for kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    }
  ];

  const footerLinks = [
    ["FAQ", "Help Centre", "Account", "Media Centre"],
    ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"],
    ["Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
    ["Speed Test", "Legal Notices", "Only on Netflix"]
  ];

  const trendingContent = [
    {
      id: 1,
      title: "WEDNESDAY",
      image: "/images/wednesday.webp",
      alt: "Wednesday Addams from the Wednesday series"
    },
    {
      id: 2,
      title: "GREAT INDIAN",
      image: "/images/kapil.webp",
      alt: "The Great Indian Kapil Show"
    },
    {
      id: 3,
      title: "3ND2",
      image: "/images/raid.webp",
      alt: "Raid movie poster"
    },
    {
      id: 4,
      title: "SQUID GAME",
      image: "/images/squid.webp",
      alt: "Squid Game series poster"
    }
  ];

  const features = [
    {
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background */}
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
          style={{ backgroundImage: "url('/Images/main-page.jpg')" }}
        ></div>

        {/* Navbar */}
        <nav className="relative z-50 w-full flex justify-between items-center p-4 md:p-6">
          <h1 className="text-red-600 text-3xl md:text-4xl font-bold cursor-pointer font-netflix-sans">NETFLIX</h1>
          <div className="flex gap-3">
            <button className="bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded hover:bg-red-700 transition text-sm md:text-base">
              Sign In
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center pt-32 pb-20 px-4 md:pt-40 md:pb-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl mx-auto leading-tight">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-xl md:text-2xl mb-6">Watch anywhere. Cancel anytime.</p>
          <p className="text-lg md:text-xl mb-6 max-w-lg mx-auto">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email address"
                className="flex-grow px-4 py-3 bg-black/70 border border-gray-600 rounded focus:outline-none focus:border-red-500 text-black md:text-lg"
                required
              />
              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition md:text-lg"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="py-12 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Trending Now</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {trendingContent.map((item) => (
              <div 
                key={item.id} 
                className="group relative rounded-md overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
                <p className="absolute bottom-0 left-0 p-3 font-medium text-white text-shadow">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 md:px-8 bg-black border-t-8 border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">More reasons to join</h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 md:px-8 bg-black border-t-8 border-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-800 last:border-b-0">
                <button
                  className="w-full py-4 px-2 text-left flex justify-between items-center text-lg md:text-xl font-medium hover:bg-gray-900 transition-colors rounded"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-200 ${activeIndex === index ? 'transform rotate-45' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div
                  id={`faq-${index}`}
                  className={`overflow-hidden transition-all duration-200 ${activeIndex === index ? 'max-h-96 pb-4 px-2' : 'max-h-0'}`}
                  aria-hidden={activeIndex !== index}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Email Form (Repeated) */}
          <div className="mt-12 text-center">
            <p className="text-xl mb-6">Ready to watch? Enter your email to create or restart your membership.</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email address"
                className="text-[#fff] flex-grow px-4 py-3 bg-black/70 border border-gray-600 rounded focus:outline-none focus:border-red-500 md:text-lg"
                required
              />
              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded flex items-center justify-center gap-2 transition md:text-lg"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-12 px-4 md:px-8 bg-black border-t-8 border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-lg mb-6">
              Questions? Call <a href="tel:000-800-919-1743" className="hover:underline">000-800-919-1743</a>
            </p>
            
            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
              {footerLinks.map((column, colIndex) => (
                <ul key={colIndex} className="space-y-3">
                  {column.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="hover:underline text-sm md:text-base text-gray-400 hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Language Selector */}
            <div className="relative inline-block mb-6">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-black border border-gray-600 text-white px-4 py-2 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-red-600 pr-8 cursor-pointer"
                aria-label="Select language"
              >
                <option value="English">English</option>
                <option value="Hindi">हिन्दी</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <p className="text-sm text-gray-400">Netflix India</p>
          </div>

          {/* reCAPTCHA Notice */}
          <div className="text-xs text-gray-500">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">Learn more</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;