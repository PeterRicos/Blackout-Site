import React from 'react';
import { BRAND_STATS } from '../data/items';
import { Brand } from '../types';

interface ByBrandProps {
  onSelectBrand: (brand: string) => void;
}

export const ByBrand: React.FC<ByBrandProps> = ({ onSelectBrand }) => {
  return (
    <section className="w-full bg-[#0e0e0e] py-16 lg:py-20 border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        <div className="flex flex-col">
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#737373] font-bold">
            03 // BROWSE THE ICONS
          </span>
          <h2 className="font-sans text-[36px] sm:text-[44px] uppercase text-white font-extrabold leading-tight tracking-[-0.04em]">
            BY BRAND
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {BRAND_STATS.map((b) => (
            <button
              key={b.brand}
              onClick={() => onSelectBrand(b.brand)}
              type="button"
              className="group p-5 bg-[#1E1E1E] border border-[#2B2B2B] hover:border-white hover:bg-[#262626] text-left flex flex-col justify-between h-36 transition-all duration-200 cursor-pointer"
            >
              <span className="font-mono text-[11px] text-[#D4FF00] uppercase font-bold">
                [{b.index}]
              </span>
              <div>
                <div className="font-sans text-[18px] text-white uppercase font-extrabold group-hover:text-[#D4FF00] transition-colors leading-tight">
                  {b.brand}
                </div>
                <span className="font-mono text-[11px] text-[#737373] block mt-1">
                  {b.count}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
