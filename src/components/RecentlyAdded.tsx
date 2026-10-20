import React from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { VAULT_ITEMS } from '../data/items';
import { VaultItem } from '../types';

interface RecentlyAddedProps {
  onOpenClaim: (item: VaultItem) => void;
  onInspectItem: (item: VaultItem) => void;
  onBrowseVault: () => void;
}

export const RecentlyAdded: React.FC<RecentlyAddedProps> = ({
  onOpenClaim,
  onInspectItem,
  onBrowseVault
}) => {
  const recentItems = VAULT_ITEMS.filter((item) => item.isRecent);

  const getActionLabel = (item: VaultItem) => {
    if (item.id.includes('tee')) return 'CLAIM TEE';
    if (item.id.includes('bearbrick')) return 'CLAIM SET';
    if (item.id.includes('hoodie')) return 'CLAIM HOODIE';
    if (item.id.includes('deck')) return 'CLAIM DECK';
    return 'CLAIM ITEM';
  };

  return (
    <section className="w-full bg-[#151515] py-16 lg:py-20 border-b border-[#2B2B2B]" id="recent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#737373] font-bold">
              06 // JUST LANDED
            </span>
            <h2 className="font-sans text-[36px] sm:text-[44px] uppercase text-white font-extrabold leading-tight tracking-[-0.04em]">
              RECENTLY ADDED
            </h2>
          </div>
          <button
            onClick={onBrowseVault}
            className="font-mono text-[12px] font-bold uppercase tracking-wider text-[#D4FF00] hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
          >
            <span>BROWSE THE VAULT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentItems.map((item) => (
            <article
              key={item.id}
              className="bg-[#1E1E1E] border border-[#2B2B2B] hover:border-white flex flex-col justify-between group transition-all duration-200"
            >
              {/* Top Tag Header */}
              <div className="p-3.5 flex items-center justify-between font-mono text-[11px] border-b border-[#2B2B2B]">
                <span
                  className={`font-bold uppercase tracking-wider ${
                    item.tagType === 'verified'
                      ? 'text-[#00FF66]'
                      : item.tagType === 'electric'
                      ? 'text-[#D4FF00]'
                      : 'text-white'
                  }`}
                >
                  {item.tag}
                </span>
                <span className="text-[#737373]">{item.brand}</span>
              </div>

              {/* Product Image Square */}
              <div
                onClick={() => onInspectItem(item)}
                className="relative aspect-square bg-[#0e0e0e] p-6 flex items-center justify-center overflow-hidden cursor-pointer group/img"
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-contain filter drop-shadow-xl transition-transform duration-500 group-hover/img:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="px-2.5 py-1 bg-[#151515] border border-[#404040] text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1">
                    <Eye className="w-3 h-3 text-[#D4FF00]" />
                    <span>INSPECT</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="p-4 flex flex-col gap-1 bg-[#1E1E1E] border-t border-[#2B2B2B]">
                <span className="font-mono text-[11px] text-[#737373] truncate" title={item.sku}>
                  {item.sku}
                </span>
                <h3
                  onClick={() => onInspectItem(item)}
                  className="font-sans text-[16px] uppercase font-bold text-white line-clamp-1 hover:text-[#D4FF00] transition-colors cursor-pointer"
                  title={item.title}
                >
                  {item.title}
                </h3>

                <button
                  type="button"
                  onClick={() => onOpenClaim(item)}
                  className="mt-3 py-2 px-3 bg-[#2a2a2a] hover:bg-white text-white hover:text-black font-mono text-[11px] font-bold uppercase tracking-wider flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>{getActionLabel(item)}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
