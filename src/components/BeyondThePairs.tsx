import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORY_BANNERS } from '../data/items';
import { ActivePage } from '../types';

interface BeyondThePairsProps {
  onNavigate: (page: ActivePage) => void;
}

export const BeyondThePairs: React.FC<BeyondThePairsProps> = ({ onNavigate }) => {
  return (
    <section className="w-full bg-[#151515] py-16 lg:py-20 border-b border-[#2B2B2B]" id="categories">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#737373] font-bold">
            04 // BROWSE BY CATEGORY
          </span>
          <h2 className="font-sans text-[36px] sm:text-[44px] uppercase text-white font-extrabold leading-tight tracking-[-0.04em]">
            BEYOND THE PAIRS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tile 1: Streetwear */}
          <div className="relative group bg-[#1E1E1E] border border-[#2B2B2B] hover:border-white overflow-hidden min-h-[380px] flex flex-col justify-end p-8 lg:p-10 shadow-lg transition-colors duration-200">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
              style={{ backgroundImage: `url(${CATEGORY_BANNERS.clothing.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/70 to-transparent" />

            <div className="relative z-10 flex flex-col items-start gap-2">
              <span className="font-mono text-[11px] text-[#D4FF00] uppercase tracking-widest font-bold">
                {CATEGORY_BANNERS.clothing.category}
              </span>
              <h3 className="font-sans text-[30px] sm:text-[34px] uppercase text-white leading-tight font-extrabold">
                {CATEGORY_BANNERS.clothing.title}
              </h3>
              <p className="font-sans text-[14px] text-[#c4c7c8] max-w-sm mb-4 leading-relaxed">
                {CATEGORY_BANNERS.clothing.description}
              </p>
              <button
                onClick={() => onNavigate('shop-clothing')}
                className="px-5 py-3 bg-white hover:bg-[#D4FF00] text-black font-sans text-[13px] uppercase font-extrabold tracking-wider inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>EXPLORE VAULT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tile 2: Random Shit */}
          <div
            className="relative group bg-[#1E1E1E] border border-[#2B2B2B] hover:border-white overflow-hidden min-h-[380px] flex flex-col justify-end p-8 lg:p-10 shadow-lg transition-colors duration-200"
            id="random-shit"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40"
              style={{ backgroundImage: `url(${CATEGORY_BANNERS.randomShit.imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/70 to-transparent" />

            <div className="relative z-10 flex flex-col items-start gap-2">
              <span className="font-mono text-[11px] text-[#D4FF00] uppercase tracking-widest font-bold">
                {CATEGORY_BANNERS.randomShit.category}
              </span>
              <h3 className="font-sans text-[30px] sm:text-[34px] uppercase text-white leading-tight font-extrabold">
                {CATEGORY_BANNERS.randomShit.title}
              </h3>
              <p className="font-sans text-[14px] text-[#c4c7c8] max-w-sm mb-4 leading-relaxed">
                {CATEGORY_BANNERS.randomShit.description}
              </p>
              <button
                onClick={() => onNavigate('random-shit')}
                className="px-5 py-3 bg-white hover:bg-[#D4FF00] text-black font-sans text-[13px] uppercase font-extrabold tracking-wider inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>EXPLORE VAULT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
