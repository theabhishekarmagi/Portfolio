import React, { useState, useEffect, useRef } from 'react';

export default function WorkView({ setActiveTab }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [iconsInView, setIconsInView] = useState(false);
  const iconsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && window.innerWidth < 768) {
          setIconsInView(true);
        } else {
          setIconsInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (iconsRef.current) {
      observer.observe(iconsRef.current);
    }

    return () => {
      if (iconsRef.current) observer.unobserve(iconsRef.current);
    };
  }, []);

  const handleClick = () => {
    if (isExpanded) return;
    setIsAnimating(true);
    // Timeout to allow for CSS transition before unmounting
    setTimeout(() => {
      setIsExpanded(true);
      setIsAnimating(false);
    }, 400);
  };

  if (!isExpanded) {
    return (
      <main 
        className="w-full max-w-[1440px] mx-auto px-6 font-['Inter'] min-h-[80vh] flex flex-col items-center justify-center cursor-pointer relative"
        onClick={handleClick}
      >
        <div className={`flex flex-col md:flex-row items-center group transition-opacity duration-500 ease-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`} ref={iconsRef}>
          <span className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] font-normal text-white mr-0 md:mr-[20px] mb-12 md:mb-0 whitespace-nowrap">
            Projects I've build
          </span>

          {/* Social icons cluster with negative overlap and scattered rotations */}
          {/* Shift container left by 40px on mobile to compensate for the rightward spread, keeping it centered */}
          <div className={`flex items-center transform scale-75 sm:scale-100 transition-transform duration-500 ${iconsInView ? '-translate-x-[40px] sm:translate-x-0' : 'translate-x-0'}`}>
            {/* GitDesk: rotated left */}
            <div className={`group/icon transition-all duration-500 ease-out z-10 relative flex-shrink-0 ${isAnimating || iconsInView ? 'rotate-0 translate-y-0' : '-rotate-6 translate-y-1 group-hover:rotate-0 group-hover:translate-y-0'}`}>
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-[#333333] text-white text-[16px] sm:text-[20px] leading-tight rounded-full opacity-0 pointer-events-none transition-opacity duration-200 group-hover/icon:opacity-100 whitespace-nowrap z-50">
                GitDesk
              </div>
              <div className="w-[120px] h-[120px] rounded-[36px] overflow-hidden shadow-xl flex items-center justify-center">
                <img src="/assets/gitdesk_icon.png" alt="GitDesk" className="w-full h-full object-cover select-none" />
              </div>
            </div>

            {/* Draw.io Figma: overlaps, rotated right */}
            <div 
              className={`group/icon transition-all duration-500 ease-out z-20 relative flex-shrink-0 ${isAnimating || iconsInView ? 'rotate-0 translate-y-0 translate-x-[40px] sm:translate-x-[60px]' : 'rotate-6 -translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[40px] sm:group-hover:translate-x-[60px]'}`}
              style={{ marginLeft: -42 }}
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-[#333333] text-white text-[16px] sm:text-[20px] leading-tight rounded-full opacity-0 pointer-events-none transition-opacity duration-200 group-hover/icon:opacity-100 whitespace-nowrap z-50">
                Figma Plugin with 2k+ users
              </div>
              <div className="w-[120px] h-[120px] rounded-[36px] overflow-hidden shadow-xl flex items-center justify-center">
                <img src="/assets/drawio_figma.png" alt="Draw.io Figma" className="w-full h-full object-cover select-none" />
              </div>
            </div>

            {/* T-Works: overlaps, rotated left */}
            <div 
              className={`group/icon transition-all duration-500 ease-out z-30 relative flex-shrink-0 ${isAnimating || iconsInView ? 'rotate-0 translate-y-0 translate-x-[80px] sm:translate-x-[120px]' : '-rotate-6 translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[80px] sm:group-hover:translate-x-[120px]'}`}
              style={{ marginLeft: -42 }}
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-[#333333] text-white text-[16px] sm:text-[20px] leading-tight rounded-full opacity-0 pointer-events-none transition-opacity duration-200 group-hover/icon:opacity-100 whitespace-nowrap z-50">
                ERP & CRM for T-Works
              </div>
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden shadow-xl flex items-center justify-center bg-[#282626]">
                <img src="/assets/tworks_clean.png" alt="T-Works" className="w-full h-full object-cover select-none" />
              </div>
            </div>

            {/* DSR: overlaps, rotated right */}
            <div 
              className={`group/icon transition-all duration-500 ease-out z-40 relative flex-shrink-0 ${isAnimating || iconsInView ? 'rotate-0 translate-y-0 translate-x-[120px] sm:translate-x-[180px]' : 'rotate-6 -translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[120px] sm:group-hover:translate-x-[180px]'}`}
              style={{ marginLeft: -42 }}
            >
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-[#333333] text-white text-[16px] sm:text-[20px] leading-tight rounded-full opacity-0 pointer-events-none transition-opacity duration-200 group-hover/icon:opacity-100 whitespace-nowrap z-50">
                DSR
              </div>
              <div className="w-[120px] h-[120px] rounded-[36px] overflow-hidden shadow-xl flex items-center justify-center bg-transparent p-3 border-2 border-white/20">
                <img src="/assets/dreamstartrise.png" alt="DSR" className="w-full h-full object-contain select-none" />
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM CALL TO ACTION ───────────────────────────────────────────── */}
        <div className={`absolute bottom-0 text-center pb-12 transition-opacity duration-500 ease-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white/90">
            Curious about my tech stack?{' '}
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (setActiveTab) {
                  setActiveTab('tech');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="font-normal text-white underline underline-offset-4 hover:text-white/80 cursor-pointer transition-colors inline"
            >
              Click here.
            </button>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[164px] font-['Inter'] pb-32 animate-fade-in">

      {/* ── PROJECT 1: GitDesk ──────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[300px_1fr] items-start pt-[100px] sm:pt-[120px] gap-8 md:gap-12">
        {/* Left Column */}
        <div className="flex flex-col items-start md:items-center">
          <a href="https://github.com/theabhishekarmagi/GitDesk" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform block">
            <img
              src="/assets/gitdesk_icon.png"
              alt="GitDesk"
              style={{ width: 177, height: 177 }}
              className="rounded-[36px] object-contain drop-shadow-2xl select-none"
            />
          </a>
        </div>

        {/* Right Column: Title + Description */}
        <div className="flex flex-col pt-2 max-w-[717px]">
          <a href="https://github.com/theabhishekarmagi/GitDesk" target="_blank" rel="noopener noreferrer" className="w-fit hover:text-white/80 transition-colors">
            <h2 className="text-[28px] sm:text-[32px] leading-[39px] font-bold text-white underline underline-offset-4 mb-4">
              GitDesk
            </h2>
          </a>
          <p className="text-[24px] sm:text-[32px] leading-[36px] sm:leading-[39px] font-normal text-white/95">
            GitDesk is a private cloud storage powered by your own GitHub account lives
            on own local system giving you data privacy and security.
          </p>
        </div>
      </section>

      {/* ── PROJECT 2: Draw.io → Figma ───────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-[300px_1fr] items-start pt-[140px] sm:pt-[160px] gap-8 md:gap-12">
        {/* Left Column */}
        <div className="flex flex-col items-start md:items-center">
          <a href="https://www.figma.com/community/plugin/1611229062201086448/draw-io-to-figma" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform block">
            <img
              src="/assets/drawio_figma.png"
              alt="Draw.io to Figma"
              style={{ width: 177, height: 177 }}
              className="rounded-[36px] object-cover drop-shadow-2xl select-none"
            />
          </a>
        </div>

        {/* Right Column: Title + 2 Paragraphs */}
        <div className="flex flex-col pt-2 max-w-[717px]">
          <a href="https://www.figma.com/community/plugin/1611229062201086448/draw-io-to-figma" target="_blank" rel="noopener noreferrer" className="w-fit hover:text-white/80 transition-colors">
            <h2 className="text-[28px] sm:text-[32px] leading-[39px] font-bold text-white underline underline-offset-4 mb-6">
              Draw.io → Figma
            </h2>
          </a>
          <p className="text-[24px] sm:text-[32px] leading-[36px] sm:leading-[39px] font-normal text-white/95 mb-6">
            Draw.io to Figma lets you seamlessly import your Draw.io SVG files directly into Figma as fully editable layers.
          </p>
          <p className="text-[24px] sm:text-[32px] leading-[36px] sm:leading-[39px] font-normal text-white/95">
            Whether you're migrating diagrams, system architectures, flowcharts, or wireframes from Draw.io, this plugin converts your shapes, connectors, and text into native Figma nodes so you can continue designing without starting from scratch.
          </p>
        </div>
      </section>

      {/* ── PROJECT 3: T-Works ERP & CRM ────────────────────────────────────── */}
      <section className="pt-[140px] sm:pt-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] items-start gap-8 md:gap-12">
          {/* Left: T-Works logo */}
          <div className="flex flex-col items-start md:items-center relative group/tworks cursor-not-allowed">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-max max-w-[280px] sm:max-w-[320px] px-5 py-3 bg-[#333333] text-white text-[14px] sm:text-[16px] leading-tight rounded-xl opacity-0 pointer-events-none transition-opacity duration-200 group-hover/tworks:opacity-100 z-50 shadow-xl text-center whitespace-normal">
              This project is strictly for internal use and cannot be shared outside the organization
            </div>
            <div
              className="flex-shrink-0 overflow-hidden rounded-full drop-shadow-2xl flex items-center justify-center bg-[#282626] transition-transform group-hover/tworks:scale-105"
              style={{ width: 177, height: 177 }}
            >
              <img
                src="/assets/tworks_clean.png"
                alt="T-Works"
                className="w-full h-full object-cover select-none"
              />
            </div>
          </div>

          {/* Right: Title + Subtitle + Description */}
          <div className="flex flex-col pt-2 max-w-[717px]">
            <div className="relative group/tworks-text cursor-not-allowed w-fit">
              <div className="absolute -top-20 left-0 w-max max-w-[280px] sm:max-w-[320px] px-5 py-3 bg-[#333333] text-white text-[14px] sm:text-[16px] leading-tight rounded-xl opacity-0 pointer-events-none transition-opacity duration-200 group-hover/tworks-text:opacity-100 z-50 shadow-xl whitespace-normal">
                This project is strictly for internal use and cannot be shared outside the organization
              </div>
              <h2 className="text-[28px] sm:text-[32px] leading-[39px] font-bold text-white underline underline-offset-4 mb-2">
                T-Works
              </h2>
            </div>
            <h3 className="text-[28px] sm:text-[32px] leading-[39px] font-bold text-white mb-4">
              ERP & CRM system
            </h3>
            <p className="text-[24px] sm:text-[32px] leading-[36px] sm:leading-[39px] font-normal text-white/95">
              Designed to improve the internal workflow and custom developed for handling
              multiple workflows at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROJECT 4: Dream Start Rise ─────────────────────────────────────── */}
      <section className="pt-[140px] sm:pt-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] items-start gap-8 md:gap-12">
          {/* Left: Dream Start Rise logo */}
          <div className="flex flex-col items-start md:items-center relative group/dsr cursor-not-allowed">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-max max-w-[280px] sm:max-w-[320px] px-5 py-3 bg-[#333333] text-white text-[14px] sm:text-[16px] leading-tight rounded-xl opacity-0 pointer-events-none transition-opacity duration-200 group-hover/dsr:opacity-100 z-50 shadow-xl text-center whitespace-normal">
              This project is strictly for internal use and cannot be shared outside the organization
            </div>
            <div className="transition-transform group-hover/dsr:scale-105">
              <img
                src="/assets/dreamstartrise.png"
                alt="Dream Start Rise"
                style={{ width: 123, height: 171 }}
                className="object-contain select-none"
              />
            </div>
          </div>

          {/* Right: Title + Description */}
          <div className="flex flex-col pt-2 max-w-[717px]">
            <div className="relative group/dsr-text cursor-not-allowed w-fit">
              <div className="absolute -top-20 left-0 w-max max-w-[280px] sm:max-w-[320px] px-5 py-3 bg-[#333333] text-white text-[14px] sm:text-[16px] leading-tight rounded-xl opacity-0 pointer-events-none transition-opacity duration-200 group-hover/dsr-text:opacity-100 z-50 shadow-xl whitespace-normal">
                This project is strictly for internal use and cannot be shared outside the organization
              </div>
              <h2 className="text-[28px] sm:text-[32px] leading-[39px] font-bold text-white mb-6 underline underline-offset-4">
                DSR
              </h2>
            </div>
            <ul className="text-[24px] sm:text-[32px] leading-[36px] sm:leading-[39px] font-normal text-white/95 space-y-6 list-disc ml-8">
              <li>
                Developed a full end-to-end PaaS application that enables users to post innovation ideas with proper documentation journals for collaborative review and feedback.
              </li>
              <li>
                Built a comprehensive platform where innovators can share ideas publicly and receive community reviews, fostering a culture of innovation and knowledge sharing.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CALL TO ACTION ───────────────────────────────────────────── */}
      <section className="pt-[200px] pb-[100px] text-center">
        <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white/90">
          Curious about my tech stack?{' '}
          <button
            onClick={() => {
              if (setActiveTab) {
                setActiveTab('tech');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="font-normal text-white underline underline-offset-4 hover:text-white/80 cursor-pointer transition-colors inline"
          >
            Click here.
          </button>
        </p>
      </section>

    </main>
  );
}
