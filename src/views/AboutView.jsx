import React, { useState } from 'react';

export default function AboutView() {
  const [showFigmaNotice, setShowFigmaNotice] = useState(true);
  const [hoveredOther, setHoveredOther] = useState(false);
  const education = [
    {
      institution: 'Vignana Bharathi Institute of Technology',
      period: '2022 - 2026',
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering (Data Science)',
    },
    {
      institution: 'Sri Chaitanya Jr Collage',
      period: '2020 - 2022',
      degree: 'Intermediate Junior Collage (MPC)',
      field: '',
    },
    {
      institution: 'Sadha Shiva International School',
      period: '2019 - 2020',
      degree: 'X - High School',
      field: '',
    },
  ];

  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[120px] lg:px-[164px] font-['Inter'] pb-40">

      {/* ── PROFILE HEADER SECTION ───────────────────────────────────────────── */}
      {/* Figma: Ellipse 5 x=251 y=398 (435x426), Name x=755 y=500, HYD x=460 y=862 */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 pt-[100px] sm:pt-[140px] pb-[120px]">
        {/* Left: Avatar + HYD below */}
        <div className="flex flex-col items-center flex-shrink-0">
          <div
            className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[435px] md:h-[426px] rounded-full overflow-hidden shadow-2xl flex-shrink-0"
          >
            <img
              src="/assets/profile.png"
              alt="Magi Abhishekar"
              className="w-full h-full object-cover select-none"
            />
          </div>
          <p className="text-[28px] sm:text-[36px] leading-[44px] font-normal text-white/90 mt-6 tracking-wide text-center">
            HYD
          </p>
        </div>

        {/* Right: MAGI ABISHEKAR */}
        <div className="md:pt-16 text-center md:text-left flex flex-col h-full justify-between">
          <div>
            <h1 className="text-[36px] sm:text-[44px] md:text-[48px] leading-[1.2] font-bold text-white tracking-wide mb-8">
              MAGI<br />ABISHEKAR
            </h1>
            <p className="text-[24px] sm:text-[28px] md:text-[32px] leading-[1.4] font-normal text-white/95">
              Software Developer Engineer<br />
              Backend & Distributed Systems
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-6 sm:gap-8 mt-16 md:mt-24 md:pr-12">
            {/* LinkedIn */}
            <div 
              className="group/icon relative"
              onMouseEnter={() => setHoveredOther(true)}
              onMouseLeave={() => setHoveredOther(false)}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#333333] text-white text-[14px] sm:text-[16px] leading-tight rounded-full opacity-0 pointer-events-none transition-opacity duration-200 group-hover/icon:opacity-100 whitespace-nowrap z-50 shadow-xl">
                theabhishekar
              </div>
              <a 
                href="https://www.linkedin.com/in/theabhishekar-m/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setShowFigmaNotice(false)}
                className="block w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] bg-white rounded-[16px] sm:rounded-[20px] shadow-xl hover:scale-110 transition-transform flex items-center justify-center p-1.5 sm:p-2"
              >
                <img src="/assets/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain select-none" />
              </a>
            </div>

            {/* GitHub */}
            <div 
              className="group/icon relative"
              onMouseEnter={() => setHoveredOther(true)}
              onMouseLeave={() => setHoveredOther(false)}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#333333] text-white text-[14px] sm:text-[16px] leading-tight rounded-full opacity-0 pointer-events-none transition-opacity duration-200 group-hover/icon:opacity-100 whitespace-nowrap z-50 shadow-xl">
                theabhishekarmagi
              </div>
              <a 
                href="https://github.com/theabhishekarmagi" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={() => setShowFigmaNotice(false)}
                className="block w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] rounded-full shadow-xl hover:scale-110 transition-transform overflow-hidden"
              >
                <img src="/assets/github.png" alt="GitHub" className="w-full h-full object-cover select-none" />
              </a>
            </div>

            {/* Gmail */}
            <div 
              className="group/icon relative"
              onMouseEnter={() => setHoveredOther(true)}
              onMouseLeave={() => setHoveredOther(false)}
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#333333] text-white text-[14px] sm:text-[16px] leading-tight rounded-full opacity-0 pointer-events-none transition-opacity duration-200 group-hover/icon:opacity-100 whitespace-nowrap z-50 shadow-xl">
                theabhishekar@gmail.com
              </div>
              <a 
                href="mailto:theabhishekar@gmail.com" 
                onClick={() => setShowFigmaNotice(false)}
                className="block w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] bg-white rounded-[16px] sm:rounded-[20px] shadow-xl hover:scale-110 transition-transform flex items-center justify-center p-2 sm:p-2.5"
              >
                <img src="/assets/gmail.png" alt="Gmail" className="w-full h-full object-contain select-none" />
              </a>
            </div>

            {/* Figma */}
            <div className="group/icon relative">
              <a
                href="https://www.figma.com/@theabhishekar"
                target="_blank"
                rel="noopener noreferrer"
                className={`absolute -top-12 sm:-top-14 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 px-4 py-2 bg-[#333333] hover:bg-[#222222] text-white text-[14px] sm:text-[16px] leading-tight rounded-full whitespace-nowrap z-50 shadow-xl transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none ${
                  showFigmaNotice && !hoveredOther
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-95 pointer-events-none group-hover/icon:opacity-100 group-hover/icon:scale-100 group-hover/icon:pointer-events-auto'
                }`}
              >
                <span>1.8k subs on the Figma Community</span>
                {/* Pointer arrow down */}
                <div className="absolute -bottom-1 right-6 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-2.5 h-2.5 bg-[#333333] group-hover/icon:bg-[#222222] rotate-45 transition-colors" />
              </a>
              <a
                href="https://www.figma.com/@theabhishekar"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] bg-white rounded-[16px] sm:rounded-[20px] shadow-xl hover:scale-110 transition-transform flex items-center justify-center p-2.5 sm:p-3"
              >
                <img src="/assets/figma.svg" alt="Figma" className="w-full h-full object-contain select-none" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ─────────────────────────────────────────────────── */}
      <section className="mb-28 max-w-[1100px]">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] font-bold text-white tracking-wide mb-[92px]">
          WORK EXPERIENCE
        </h2>

        {/* T-Works company entry */}
        <div className="flex items-center mb-[92px]">
          <div className="flex-shrink-0 overflow-hidden rounded-full" style={{ width: 160, height: 160 }}>
            <img src="/assets/tworks_clean.png" alt="T-Works" className="w-full h-full object-cover select-none" />
          </div>
          <div className="pl-4 sm:pl-7">
            <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white whitespace-nowrap">
              T-Works
            </p>
            <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white/80 whitespace-nowrap">
              1 yr 3 mos
            </p>
            <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white/80 whitespace-nowrap">
              Hyderabad,Telangana
            </p>
          </div>
        </div>

        {/* Timeline section */}
        <div className="relative mb-[200px] ml-4 sm:ml-[38px]">
          <div className="absolute bg-white/80" style={{ left: 10, top: 22, bottom: 0, width: 2 }} />

          <div className="relative mb-0">
            <div className="absolute rounded-full bg-white" style={{ left: 0, top: 0, width: 21, height: 22 }} />
            <div style={{ paddingLeft: 44 }}>
              <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white mb-[16px]">
                SDE Trainee
              </p>
            </div>
          </div>

          <div style={{ paddingLeft: 44, paddingTop: 16 }} className="sm:pl-[63px]">
            <p className="text-[20px] sm:text-[32px] leading-[32px] sm:leading-[42px] font-normal text-white/90 max-w-[934px]">
              • Designed and implemented an ERP and CRM system
              <br /><br />
              • Improved pipeline resilience by designing liveness probes that detect hung file processors and automatically restart them, reducing stuck-job incidents and manual intervention.
              <br /><br />
              • Built end-to-end observability by implementing OpenObserve for centralised logs, metrics, and traces, giving the team faster detection and root-cause analysis of production
            </p>
          </div>

          <div className="relative mt-[40px]">
            <div className="absolute rounded-full bg-white" style={{ left: 0, top: 0, width: 21, height: 22 }} />
            <div style={{ paddingLeft: 44 }}>
              <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white mb-[16px]">
                SDE Intern
              </p>
            </div>
            <div style={{ paddingLeft: 44 }} className="sm:pl-[93px]">
              <p className="text-[20px] sm:text-[32px] leading-[32px] sm:leading-[42px] font-normal text-white/90 max-w-[874px]">
                Engineered an automated MoU/NDA processing system with secure ID verification and digital e-signatures, reducing document turnaround time and manual dependency
              </p>
            </div>
          </div>
        </div>

        {/* Dream Start Rise entry */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-0">
            <div className="flex-shrink-0 overflow-hidden" style={{ width: 123, height: 171 }}>
              <img src="/assets/dreamstartrise.png" alt="Dream Start Rise" className="w-full h-full object-contain select-none" />
            </div>
            <div className="sm:pl-[51px]">
              <p className="text-[28px] sm:text-[32px] leading-[39px] font-bold text-white">
                Software Developer
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-[24px] sm:text-[32px] leading-[40px] sm:leading-[52px] font-normal text-white">
                  Dream Start Rise
                </span>
                <span className="text-[24px] sm:text-[32px] leading-[40px] sm:leading-[52px] font-normal text-white sm:ml-2">
                  . Apprenticeship
                </span>
              </div>
            </div>
          </div>
          <div className="pt-6 sm:pt-16 sm:pl-[138px]">
            <p className="text-[20px] sm:text-[32px] leading-[32px] sm:leading-[42px] font-normal text-white/90 max-w-[897px]">
              • Developed a full end-to-end PaaS application that enables users to post innovation ideas with proper documentation journals for collaborative review and feedback.
              <br /><br />
              • Built a comprehensive platform where innovators can share ideas publicly and receive community reviews, fostering a culture of innovation and knowledge sharing.
            </p>
          </div>
        </div>
      </section>

      {/* ── EDUCATION HISTORY ─────────────────────────────────────────────────── */}
      <section className="mb-28 max-w-[1100px]">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] font-bold text-white tracking-wide mb-16">
          EDUCATION<br className="sm:hidden" /> HISTORY
        </h2>

        <div className="relative pl-8 sm:pl-12 ml-4 sm:ml-6 border-l-2 border-white/80 space-y-16">
          {education.map((item, index) => (
            <div key={index} className="relative">
              {/* Dot */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-2 w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-white rounded-full ring-4 ring-[#0B56E3]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <h3 className="text-[24px] sm:text-[30px] md:text-[32px] leading-[39px] font-normal text-white">
                  {item.institution}
                </h3>
                <span className="text-[20px] sm:text-[28px] md:text-[32px] leading-[39px] text-white/90 font-normal whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              {item.degree && (
                <p className="text-[20px] sm:text-[26px] md:text-[32px] leading-[38px] text-white/90 font-normal mt-1">
                  {item.degree}
                </p>
              )}
              {item.field && (
                <p className="text-[20px] sm:text-[26px] md:text-[32px] leading-[38px] text-white/90 font-normal">
                  {item.field}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── ACCOMPLISHMENTS ─────────────────────────────────────────────────── */}
      <section className="max-w-[1100px] pt-10">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] font-bold text-white tracking-wide mb-12">
          ACCOMPLISHMENTS
        </h2>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h3 className="text-[28px] sm:text-[32px] leading-[39px] font-bold text-white">
              SIH 2K24
            </h3>
            <span className="text-[20px] sm:text-[28px] md:text-[32px] leading-[39px] text-white/90 font-normal whitespace-nowrap">
              2023 - 2024
            </span>
          </div>

          <h4 className="text-[24px] sm:text-[30px] md:text-[32px] leading-[39px] font-normal text-white/95">
            Smart India Hackathon Finalist
          </h4>

          <p className="text-[20px] sm:text-[26px] md:text-[32px] leading-[36px] sm:leading-[42px] font-normal text-white/90 max-w-[874px] pt-2">
            Proposed an idea of parking booking system in metro politic cities for public use case. Using public private places in rush hours.
          </p>
        </div>
      </section>

    </main>
  );
}
