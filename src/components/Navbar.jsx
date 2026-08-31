import React from 'react';

export default function Navbar({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'home', label: '', icon: '/assets/nav_home.svg', isHome: true },
    { id: 'about', label: 'About', icon: '/assets/nav_about.svg' },
    { id: 'work', label: 'Work', icon: '/assets/nav_work.svg' },
    { id: 'blog', label: 'Blog', icon: '/assets/nav_blog.svg' },
    { id: 'tech', label: 'Tech', icon: '/assets/nav_tech.svg' },
  ];

  return (
    <header className="sticky top-8 z-50 flex justify-center px-4">
      <nav 
        className="flex items-center justify-between px-6 sm:px-10 py-3 sm:py-4 rounded-[17px] border border-white/80 max-w-[808px] w-full bg-transparent transition-all duration-300 select-none shadow-sm"
      >
        {navItems.map((item) => {
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex items-center gap-2.5 sm:gap-3 px-2 sm:px-3 py-1.5 rounded-lg transition-all duration-200 group cursor-pointer ${
                isActive ? 'opacity-100' : 'opacity-85 hover:opacity-100'
              }`}
            >
              {/* Exact Figma SVG Icon */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                <img
                  src={item.icon}
                  alt={item.label || item.id}
                  className="w-full h-full object-contain filter drop-shadow-sm brightness-100"
                />
              </div>

              {/* Label matching Figma 24px Inter Medium */}
              {item.label && (
                <span className={`text-xl sm:text-2xl font-medium tracking-normal text-white ${
                  isActive ? 'font-semibold underline underline-offset-8 decoration-white/60' : 'font-medium'
                }`}>
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
