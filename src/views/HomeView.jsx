import React from 'react';

export default function HomeView({ setActiveTab }) {
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
    <main className="w-full max-w-[1440px] mx-auto font-['Inter'] pb-48 relative">

      {/* ── HERO SECTION ─────────────────────────────────────────────────────── */}
      {/*
       * Photo: x=655, y=378, w=435, h=426 (circle)
       * "Hi my name is": x=396, y=499 (starts 259px left of photo, 121px below photo top)
       * "MAGI ABISHEKAR": x=445, y=591 (at vertical center of photo: 378+426/2=591)
       *
       * Layout: text block is at 27-31% from left, photo at 45-76%
       * → Use a flex row. Photo width fixed at 435px.
       *   Left column: text. Right: photo. Space them with gap.
       */}
      <section
        className="relative pt-[200px] pb-[120px]"
      >
        {/* Position the flex row so text starts at x=396 from page left */}
        <div
          className="flex items-center"
          style={{ paddingLeft: 396, gap: 255 }}
        >
          {/* Text block: "Hi my name is" at y=499, "MAGI ABISHEKAR" at y=591 */}
          {/* Both are 32px, weight 400 */}
          <div className="flex-shrink-0">
            <p className="text-[32px] leading-[39px] font-normal text-white mb-4">
              Hi my name is
            </p>
            <h1 className="text-[32px] leading-[39px] font-normal text-white tracking-wide">
              MAGI<br />ABHISHEKAR
            </h1>
          </div>

          {/* Photo: 435x426 circle */}
          <div
            className="rounded-full overflow-hidden flex-shrink-0 shadow-2xl"
            style={{ width: 435, height: 426 }}
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
      {/* Figma: x=287, w=868, centered at x=721 (≈ center of 1440px frame) */}
      <section
        className="pb-[240px]"
        style={{ paddingLeft: 287, paddingRight: 287 }}
      >
        <p className="text-[32px] leading-[39px] font-normal text-white/95">
          I am a solo developer build products and design systems i love open source projects and i like to build productivity apps.
        </p>
      </section>

      {/* ── CONNECT SECTION ─────────────────────────────────────────────────── */}
      {/*
       * "Connect with me": x=470, y=1211, w=279
       * Instagram:         x=762, y=1184, w=83,  h=82
       * LinkedIn:          x=814, y=1175, w=101, h=101
       * GitHub:            x=870, y=1191, w=78,  h=77
       * "Check my work history →": x=966, y=1417, w=306
       */}
      <section className="pb-[360px]">
        {/* Connect with me + social icons inline row */}
        {/* "Connect with me" starts at x=470, social icons start at x=762 */}
        {/* Gap between text right edge (470+279=749) and instagram (762) = 13px */}
        <div
          className="flex items-center mb-[200px] group cursor-default"
          style={{ paddingLeft: 470 }}
        >
          <span className="text-[32px] leading-[51px] font-normal text-white whitespace-nowrap mr-[13px]">
            Connect with me
          </span>

          {/* Social icons cluster with negative overlap and scattered rotations */}
          <div className="flex items-center">
            {/* Instagram: rotated left */}
            <div className="transition-all duration-300 ease-out z-10 relative flex-shrink-0 -rotate-6 translate-y-1 group-hover:rotate-0 group-hover:translate-y-0">
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
              className="transition-all duration-300 ease-out z-20 relative flex-shrink-0 rotate-6 -translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[40px]"
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
              className="transition-all duration-300 ease-out z-30 relative flex-shrink-0 -rotate-6 translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[80px]"
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
              className="transition-all duration-300 ease-out z-40 relative flex-shrink-0 rotate-6 -translate-y-1 group-hover:rotate-0 group-hover:translate-y-0 group-hover:translate-x-[120px]"
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

        {/* "Check my work history →": x=966, right edge at 966+306=1272 */}
        {/* Right-padded to 1440-1272=168px from right */}
        <div style={{ paddingRight: 168 }} className="flex justify-end">
          <button
            onClick={() => {
              if (setActiveTab) {
                setActiveTab('work');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="text-[32px] leading-[34px] font-normal text-white/90 hover:text-white text-right hover:underline transition-all cursor-pointer"
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
