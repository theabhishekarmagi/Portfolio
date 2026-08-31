import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import WorkView from './views/WorkView';
import BlogView from './views/BlogView';
import TechView from './views/TechView';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'about':
        return <AboutView />;
      case 'work':
        return <WorkView setActiveTab={setActiveTab} />;
      case 'blog':
        return <BlogView />;
      case 'tech':
        return <TechView setActiveTab={setActiveTab} />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B56E3] text-white flex flex-col selection:bg-white/30 selection:text-white pb-24 relative overflow-x-hidden">
      {/* Noise Texture Layers matching Figma */}
      <div className="figma-noise-layer" aria-hidden="true" />
      <div className="figma-noise-layer-subtle" aria-hidden="true" />

      {/* Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-grow transition-opacity duration-300 relative z-10">
        {renderView()}
      </main>


    </div>
  );
}
