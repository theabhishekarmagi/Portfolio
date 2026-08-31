import React from 'react';

export default function BlogView() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center py-20">
        <p className="text-[28px] sm:text-[32px] leading-[38px] sm:leading-[42px] text-white/95 max-w-3xl mx-auto font-normal mb-32">
          Short, personal notes on what I'm learning while building + observations on the app and AI space which I take inspiration from
        </p>

        <p className="text-[24px] sm:text-[32px] leading-[39px] font-normal text-white/90">
          Curious about my blog?{' '}
          <a
            href="https://hypnotic-doll-337.notion.site/Welcome-to-my-blog-173564a777cc834b8aab814bc3c00870"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-white underline underline-offset-4 hover:text-white/80 cursor-pointer transition-colors inline"
          >
            Click here.
          </a>
        </p>
      </div>
    </div>
  );
}
