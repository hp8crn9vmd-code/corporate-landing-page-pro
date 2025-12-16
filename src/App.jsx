import React from 'react';
import { BentoGrid, BentoItem } from './features/BentoGrid/BentoGrid';
import { NeoCard } from './features/NeoBrutalism/ui/NeoCard/NeoCard';
import { GazeCueing } from './features/UIPsychology/components/GazeCueing';

function App() {
  return (
    <main className="min-h-screen bg-[#F0F0F0] text-[#212121] font-sans p-4 md:p-8">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto mb-16 text-center">
        <div className="mb-6">
          <GazeCueing />
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
          Corporate<br/><span className="text-[#FF6B6B]">Pro</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto">
          Radical transparency meets brutalist performance.
        </p>
      </header>

      {/* Bento Grid Layout */}
      <section className="container mx-auto">
        <BentoGrid>
          {/* Primary Value Prop - Spans 2 cols */}
          <BentoItem colSpan={2} rowSpan={2}>
            <NeoCard bgColor="#FF6B6B" className="text-white">
              <span className="text-sm font-mono border border-white px-2 py-1 rounded-full">STRATEGY</span>
              <h2 className="text-4xl font-bold mt-4 mb-4">Dominant Market Logic</h2>
              <p className="text-lg opacity-90">
                We leverage asymmetric information to provide market-leading insights.
                Our infrastructure is built for speed, reliability, and absolute precision.
              </p>
              <button className="mt-8 px-8 py-3 bg-white text-black font-bold border-2 border-black shadow-[4px_4px_0px_black] active:translate-y-1 active:shadow-none transition-all">
                START NOW
              </button>
            </NeoCard>
          </BentoItem>

          {/* KPI Stat */}
          <BentoItem>
            <NeoCard bgColor="#4ECDC4">
              <h3 className="text-xl font-bold">Growth Velocity</h3>
              <div className="flex items-baseline mt-4">
                <span className="text-6xl font-black">+145%</span>
                <span className="ml-2 font-mono">YoY</span>
              </div>
            </NeoCard>
          </BentoItem>

          {/* Social Proof */}
          <BentoItem>
            <NeoCard>
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="w-4 h-4 bg-[#212121] border border-black rounded-full"></div>
                ))}
              </div>
              <p className="font-medium text-lg">"The most aggressive ROI we've seen in the sector."</p>
              <span className="block mt-4 font-bold font-mono text-sm uppercase">
                CEO, CorpOne
              </span>
            </NeoCard>
          </BentoItem>

          {/* Feature Highlight */}
          <BentoItem colSpan={2}>
            <NeoCard bgColor="#FFE66D">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2">Zero Latency</h3>
                  <p>Our edge network ensures global availability within milliseconds.</p>
                </div>
                <div className="w-full md:w-1/3 h-32 border-2 border-black bg-white relative overflow-hidden">
                  {/* Abstract visualization */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_12px)] opacity-10"></div>
                </div>
              </div>
            </NeoCard>
          </BentoItem>
        </BentoGrid>
      </section>

      <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t-4 border-black text-center font-mono">
        <p>© 2025 Corporate Pro. All systems nominal.</p>
      </footer>
    </main>
  );
}

export default App;
