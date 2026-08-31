import React, { useState, useEffect, useRef } from 'react';

export default function HomeView({ setActiveTab }) {
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

  return (
    /*
     * Frame is 1440px wide. We use a max-w-[1440px] container.
     * Key positions (px from left of 1440px frame):
     *   Text "Hi my name is": x=396 (27.5%)
     *   Photo:                x=655 (45.5%), w=435
     *   Bio text:             x=287 (19.9%), w=868 (centered at 720)
     *   "Connect with me":    x=470 (32.6%)
     *   Instagram:            x=762, LinkedIn: x=814, GitHub: x=870
     *   "Check my work...":   x=966 (67.1%)
     *   WORK EXPERIENCE:      x=164 (11.4%) — left padding edge
     *   T-Works image(rect):  x=72  (5%),  w=306, h=173
     *   T-Works text:         x=331 (23%)
     *   Timeline line:        x=209 (14.5%)
     *   Dots:                 x=202-204 (14%)
     *   SDE roles:            x=246 (17.1%)
     *   Dream logo:           x=164 (11.4%), w=123, h=171
     *   Software Dev title:   x=338 (23.5%)
     */
    <main className="w-full max-w-[1440px] mx-auto font-['Inter'] pb-32 md:pb-48 relative overflow-x-hidden">

      {/* ── HERO SECTION ─────────────────────────────────────────────────────── */}
      <section
        className="relative pt-[100px] sm:pt-[150px] md:pt-[200px] pb-[80px] md:pb-[120px] px-6 md:px-0"
      >
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-start gap-12 md:gap-[150px] lg:gap-[255px] md:pl-[200px] lg:pl-[396px]"
        >
          {/* Text block */}
          <div className="flex-shrink-0 text-center md:text-left">
            <p className="text-[24px] sm:text-[32px] leading-[1.2] font-normal text-white mb-4">
              Hi my name is
            </p>
            <h1 className="text-[32px] sm:text-[40px] leading-[1.2] font-normal text-white tracking-wide">
              MAGI<br />ABHISHEKAR
            </h1>
          </div>

          {/* Photo */}
          <div
            className="rounded-full overflow-hidden flex-shrink-0 shadow-2xl w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[435px] md:h-[426px]"
          >
            <img
              src="/assets/profile.png"
              alt="Magi Abhishekar"
              className="w-full h-full object-cover select-none"
            />
          </div>
        </div>
      </section>

      {/* ── BIO TEXT ─────────────────────────────────────────────────────────── */}
      <section
        className="pb-[120px] md:pb-[240px] px-6 sm:px-12 md:px-[150px] lg:px-[287px]"
      >
        <p className="text-[24px] sm:text-[32px] leading-[1.4] font-normal text-white/95 text-center md:text-left">
          I am a solo developer build products and design systems i love open source projects and i like to build productivity apps.
        </p>
      </section>

      {/* ── CONNECT SECTION ─────────────────────────────────────────────────── */}
      <section className="pb-[150px] md:pb-[360px] px-6 md:px-0">
        <div
          className="flex flex-col md:flex-row items-center mb-[100px] md:mb-[200px] group cursor-default md:pl-[200px] lg:pl-[470px]"
          ref={iconsRef}
        >
          <span className="text-[28px] sm:text-[32px] leading-[1.2] font-normal text-white whitespace-nowrap mb-8 md:mb-0 md:mr-[13px]">
            Connect with me
          </span>

          {/* Social icons cluster with negative overlap and scattered rotations */}
          {/* Shift container left by 40px on mobile to compensate for the rightward spread */}
          <div className={`flex items-center transform scale-75 sm:scale-100 transition-transform duration-500 ${iconsInView ? '-translate-x-[40px] sm:translate-x-0' : 'translate-x-0'}`}>
            {/* Instagram: rotated left */}
            <div className={`transition-all duration-500 ease-out z-10 relative flex-shrink-0 ${iconsInView ? 'rotate-0 translate-y-0' : '-rotate-6 translate-y-1 group-hover:rotate-0 group-hover:translate-y-0'}`}>
              <a
                href="https://www.instagram.com/theabhishekar/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform block"
              >
                <img
                  src="/assets/instagram.png"
                  alt="Instagram"
                  style={{ width: 80, height: 80, borderRadius: 20 }}
                  className="select-none shadow-xl object-cover"
                />
              </a>
            </div>

            {/* LinkedIn: overlaps instagram, rotated right */}
            <div 
              className={`transition-all duration-500 ease-out z-20 relative flex-shrink-0 ${iconsInView ? 'rotate-0 translate-y-0 translate-x-[40px]' : 'rotate-6 -translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[40px]'}`}
              style={{ marginLeft: -28 }}
            >
              <a
                href="https://www.linkedin.com/in/theabhishekar-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform bg-white rounded-[20px] flex items-center justify-center shadow-xl block"
                style={{ width: 80, height: 80, padding: 6 }}
              >
                <img
                  src="/assets/linkedin.png"
                  alt="LinkedIn"
                  className="w-full h-full object-contain select-none"
                />
              </a>
            </div>

            {/* GitHub: overlaps linkedin, rotated left */}
            <div 
              className={`transition-all duration-500 ease-out z-30 relative flex-shrink-0 ${iconsInView ? 'rotate-0 translate-y-0 translate-x-[80px]' : '-rotate-6 translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[80px]'}`}
              style={{ marginLeft: -28 }}
            >
              <a
                href="https://github.com/theabhishekarmagi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform block"
              >
                <img
                  src="/assets/github.png"
                  alt="GitHub"
                  style={{ width: 80, height: 80, borderRadius: '50%' }}
                  className="select-none shadow-xl object-cover"
                />
              </a>
            </div>

            {/* Mail (Gmail): overlaps github, rotated right */}
            <div 
              className={`transition-all duration-500 ease-out z-40 relative flex-shrink-0 ${iconsInView ? 'rotate-0 translate-y-0 translate-x-[120px]' : 'rotate-6 -translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[120px]'}`}
              style={{ marginLeft: -28 }}
            >
              <a
                href="mailto:theabhishekar@gmail.com"
                className="hover:scale-110 transition-transform bg-white rounded-[20px] flex items-center justify-center shadow-xl block"
                style={{ width: 80, height: 80, padding: 8 }}
              >
                <img
                  src="/assets/gmail.png"
                  alt="Gmail"
                  className="w-full h-full object-contain select-none"
                />
              </a>
            </div>
          </div>
        </div>

        {/* "Check my work history →" */}
        <div className="flex justify-center md:justify-end md:pr-[100px] lg:pr-[168px]">
          <button
            onClick={() => {
              if (setActiveTab) {
                setActiveTab('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="text-[24px] sm:text-[32px] leading-[1.2] font-normal text-white/90 hover:text-white text-center md:text-right hover:underline transition-all cursor-pointer"
          >
            Check my work history →
          </button>
        </div>
      </section>

      {/* ── FOOTER CONTACT SECTION ───────────────────────────────────────────── */}
      <section className="pb-[120px] max-w-[860px] mx-auto px-6">
        <div className="border-t border-dashed border-white/40 pt-16 space-y-8">
          <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white/95">
            Need dev/design help for your company?{' '}
            <a href="mailto:theabhishekar@gmail.com?subject=Dev/Design%20Help%20Inquiry" className="font-normal text-white underline underline-offset-4 hover:text-white/80 transition-colors inline">
              Click here.
            </a>
          </p>
          <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white/95">
            Want to say hi?{' '}
            <a href="mailto:theabhishekar@gmail.com?subject=Just%20saying%20hi!" className="font-normal text-white underline underline-offset-4 hover:text-white/80 transition-colors inline">
              Click here.
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}
