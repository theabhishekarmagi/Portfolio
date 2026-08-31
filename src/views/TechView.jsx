import React from 'react';

export default function TechView({ setActiveTab }) {
  const lifeTools = [
    {
      name: 'Wispr Flow',
      icon: '/assets/wispr_flow.png',
      desc: 'The dictation tool that I use every 40 seconds',
      link: 'https://www.flowvoice.ai/',
    },
    {
      name: 'Mobbin',
      icon: '/assets/mobbin.png',
      desc: 'Design inspiration tool that I use',
      link: 'https://mobbin.com/',
    },
    {
      name: 'Claude Code',
      icon: '/assets/claude_code.png',
      desc: 'My preferred AI coding agent',
      link: 'https://claude.ai/',
    },
    {
      name: 'Cursor',
      icon: '/assets/cursor.png',
      desc: 'What I use for code editing',
      link: 'https://cursor.com/',
    },
  ];

  const appTools = [
    {
      name: 'Convex',
      icon: '/assets/convex.png',
      desc: 'The backend platform I use',
      link: 'https://www.convex.dev/',
    },
    {
      name: 'Supabase',
      icon: '/assets/supabase.png',
      desc: 'Another backend I use',
      link: 'https://supabase.com/',
    },
    {
      name: 'PostHog',
      icon: '/assets/posthog.png',
      desc: 'The analytics platform I use',
      link: 'https://posthog.com/',
    },
    {
      name: 'OpenRouter',
      icon: '/assets/openrouter.png',
      desc: 'The service I use to call LLMs',
      link: 'https://openrouter.ai/',
    },
    {
      name: 'Vercel',
      icon: '/assets/vercel.png',
      desc: 'The service I use to host frontend websites',
      link: 'https://vercel.com/',
    },
    {
      name: 'Render',
      icon: '/assets/render.png',
      desc: 'The service I use to host Backend websites',
      link: 'https://render.com/',
    },
    {
      name: 'Swift',
      icon: '/assets/swift.png',
      desc: 'The framework I use for iOS apps',
      link: 'https://developer.apple.com/swift/',
    },
    {
      name: 'React',
      icon: '/assets/react.png',
      desc: 'The framework I use for web development',
      link: 'https://react.dev/',
    },
    {
      name: 'Electron',
      icon: '/assets/electron_clean.png',
      desc: 'The framework I use for Desktop app development',
      link: 'https://www.electronjs.org/',
    },
  ];

  const renderTool = (tool, index) => (
    <div key={index} className="flex items-start gap-6 sm:gap-[32px]">
      {/* Tool Icon: 105x105 Squircle */}
      <a 
        href={tool.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="rounded-[26px] overflow-hidden flex-shrink-0 shadow-2xl flex items-center justify-center bg-black/40 hover:scale-105 transition-transform duration-300"
        style={{ width: 105, height: 105 }}
      >
        <img
          src={tool.icon}
          alt={tool.name}
          className="w-full h-full object-cover select-none"
        />
      </a>

      {/* Tool Name + Curved Arrow + Description */}
      <div className="flex flex-col pt-1">
        <h3 className="text-[28px] sm:text-[32px] leading-[39px] font-normal sm:font-medium text-white mb-2">
          {tool.name}
        </h3>

        <div className="flex items-start gap-3 sm:gap-4">
          {/* Authentic Curved Pointer Arrow matching Figma */}
          <svg
            viewBox="0 0 54 48"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[34px] h-[30px] sm:w-[44px] sm:h-[38px] flex-shrink-0 opacity-90 mt-1"
          >
            <path d="M 4 4 Q 4 36 38 36" />
            <polyline points="28 26 38 36 28 46" />
          </svg>

          <p className="text-[24px] sm:text-[32px] leading-[34px] sm:leading-[39px] font-normal text-white/90 pt-0.5">
            {tool.desc}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <main className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-[164px] font-['Inter'] pb-40">

      {/* ── BACK TO HOME BUTTON ─────────────────────────────────────────────── */}
      <div className="pt-[60px] mb-10">
        <button
          onClick={() => {
            if (setActiveTab) {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-[28px] sm:text-[32px] leading-[39px] font-normal text-white/90 hover:text-white cursor-pointer transition-colors inline-block"
        >
          ← Back to home
        </button>
      </div>

      {/* ── PROFILE AVATAR ─────────────────────────────────────────────────── */}
      <div
        className="rounded-full overflow-hidden shadow-2xl mb-8 flex-shrink-0"
        style={{ width: 198, height: 198 }}
      >
        <img
          src="/assets/profile.png"
          alt="Magi Abhishekar"
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* ── INTRO DESCRIPTION ───────────────────────────────────────────────── */}
      <p className="text-[28px] sm:text-[32px] leading-[38px] sm:leading-[42px] font-normal text-white/95 max-w-[1124px] mb-14 sm:mb-16">
        Here are the tools and services I use to build my projects and power them.
      </p>

      {/* ── SECTION 1: Things that power my life ────────────────────────────── */}
      <section className="mb-24 sm:mb-28">
        <h2 className="text-[32px] sm:text-[36px] leading-[44px] font-bold text-white mb-12 sm:mb-16">
          Things that power my life
        </h2>

        <div className="space-y-[80px] sm:space-y-[90px]">
          {lifeTools.map(renderTool)}
        </div>
      </section>

      {/* ── SECTION 2: Things that power my apps ────────────────────────────── */}
      <section>
        <h2 className="text-[32px] sm:text-[36px] leading-[44px] font-bold text-white mb-12 sm:mb-16">
          Things that power my apps
        </h2>

        <div className="space-y-[80px] sm:space-y-[90px]">
          {appTools.map(renderTool)}
        </div>
      </section>

    </main>
  );
}
