import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { VAULT_ITEMS } from '../data/items';
import { VaultItem } from '../types';

interface TrendingNowProps {
  onOpenClaim: (item: VaultItem) => void;
  onInspectItem: (item: VaultItem) => void;
  onExploreVault: () => void;
}

export const TrendingNow: React.FC<TrendingNowProps> = ({
  onOpenClaim,
  onInspectItem,
  onExploreVault
}) => {
  const trendingItems = VAULT_ITEMS.filter((item) => item.isTrending);

  return (
    <section className="w-full bg-[#151515] py-16 lg:py-20 border-b border-[#2B2B2B]" id="trending">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#737373] font-bold">
              02 // THE ROTATION
            </span>
            <h2 className="font-sans text-[36px] sm:text-[44px] uppercase text-white font-extrabold leading-tight tracking-[-0.04em]">
              TRENDING NOW
            </h2>
          </div>
          <button
            onClick={onExploreVault}
            className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#D4FF00] hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>EXPLORE THE VAULT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trendingItems.map((item) => (
            <article
              key={item.id}
              className="bg-[#1E1E1E] border border-[#2B2B2B] hover:border-white flex flex-col justify-between group transition-all duration-200"
            >
              {/* Top Meta Bar */}
              <div className="p-4 flex items-center justify-between font-mono text-[12px] border-b border-[#2B2B2B]">
                <span className="px-2 py-0.5 bg-[#151515] text-[#00FF66] border border-[#00FF66]/30 font-bold uppercase text-[10px] tracking-wider">
                  {item.tag}
                </span>
                <span className="text-[#737373] font-mono">SKU: {item.sku}</span>
              </div>

              {/* Product Image Stage */}
              <div
                onClick={() => onInspectItem(item)}
                className="relative aspect-square w-full bg-[#0e0e0e] overflow-hidden flex items-center justify-center p-6 cursor-pointer group/img"
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-500 group-hover/img:scale-110"
                />

                {/* Quick inspect overlay button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="px-3 py-1.5 bg-[#151515] border border-[#404040] text-white font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>INSPECT SPECIMEN</span>
                  </div>
                </div>
              </div>

              {/* Card Meta & Action */}
              <div className="p-5 flex flex-col gap-2 bg-[#1E1E1E] border-t border-[#2B2B2B]">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="uppercase tracking-widest text-[#737373] font-bold">
                    {item.brand}
                  </span>
                  <span className="text-[#D4FF00] font-bold">{item.priceNote}</span>
                </div>

                <h3
                  onClick={() => onInspectItem(item)}
                  className="font-sans text-[18px] uppercase font-bold text-white line-clamp-1 hover:text-[#D4FF00] transition-colors cursor-pointer"
                  title={item.title}
                >
                  {item.title}
                </h3>

                <button
                  type="button"
                  onClick={() => onOpenClaim(item)}
                  className="w-full mt-3 py-2.5 px-4 bg-[#2a2a2a] hover:bg-white text-white hover:text-black font-sans text-[13px] uppercase font-extrabold tracking-wider flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>INQUIRE / CLAIM</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
