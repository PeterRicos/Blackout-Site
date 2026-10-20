import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Eye, Filter, SlidersHorizontal, Check } from 'lucide-react';
import { VAULT_ITEMS, HERO_ITEM } from '../data/items';
import { VaultItem, Category, Brand } from '../types';

interface CatalogViewProps {
  category: Category;
  title: string;
  subtitle: string;
  initialBrandFilter?: string;
  onBackToHome: () => void;
  onOpenClaim: (item: VaultItem) => void;
  onInspectItem: (item: VaultItem) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  category,
  title,
  subtitle,
  initialBrandFilter = 'ALL',
  onBackToHome,
  onOpenClaim,
  onInspectItem
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>(initialBrandFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [conditionFilter, setConditionFilter] = useState<'ALL' | 'DEADSTOCK'>('ALL');

  const allItems = [HERO_ITEM, ...VAULT_ITEMS];
  const uniqueItems = Array.from(new Map(allItems.map((item) => [item.id, item])).values());

  const categoryItems = uniqueItems.filter((item) => {
    if (category === 'sneakers') return item.category === 'sneakers';
    if (category === 'clothing') return item.category === 'clothing';
    if (category === 'random-shit') return item.category === 'random-shit';
    return true;
  });

  const availableBrands = ['ALL', ...Array.from(new Set(categoryItems.map((i) => i.brand)))];

  const filteredItems = categoryItems.filter((item) => {
    if (selectedBrand !== 'ALL' && item.brand !== selectedBrand) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSku = item.sku.toLowerCase().includes(q);
      if (!matchTitle && !matchSku) return false;
    }
    return true;
  });

  return (
    <div className="w-full bg-[#131313] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Header Navigation */}
        <div className="flex flex-col gap-4 border-b border-[#2B2B2B] pb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 font-mono text-[12px] text-[#737373] hover:text-[#D4FF00] uppercase tracking-wider transition-colors cursor-pointer self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO VAULT OVERVIEW</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#D4FF00] font-bold">
                INDEX // {category.toUpperCase().replace('-', ' ')}
              </span>
              <h1 className="font-sans text-[36px] sm:text-[48px] uppercase text-white font-extrabold leading-tight tracking-[-0.04em]">
                {title}
              </h1>
              <p className="font-sans text-[15px] text-[#c4c7c8] max-w-xl mt-1">
                {subtitle}
              </p>
            </div>
            <div className="font-mono text-[12px] text-[#00FF66] border border-[#00FF66]/30 px-3 py-1.5 bg-[#151515] self-start sm:self-auto">
              {filteredItems.length} ARTIFACTS IN STOCK
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-[#1E1E1E] p-4 border border-[#2B2B2B]">
          {/* Brand Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 font-mono text-[11px]">
            <span className="text-[#737373] uppercase font-bold mr-1 flex-shrink-0">BRAND:</span>
            {availableBrands.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setSelectedBrand(b)}
                className={`px-3 py-1 uppercase tracking-wider transition-colors cursor-pointer flex-shrink-0 border ${
                  selectedBrand === b
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-[#151515] text-[#c4c7c8] border-[#2B2B2B] hover:border-white'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Quick Keyword Search in Catalog */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search category or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#151515] border border-[#2B2B2B] px-3 py-1.5 font-mono text-[12px] text-white placeholder-[#737373] focus:outline-none focus:border-white w-full md:w-56"
            />
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center justify-center gap-3 bg-[#1E1E1E] border border-[#2B2B2B] p-8">
            <span className="font-mono text-[14px] text-white uppercase font-bold">
              NO SPECIMENS MATCH CURRENT CRITERIA
            </span>
            <p className="font-sans text-[14px] text-[#737373] max-w-md">
              Need a rare size or piece not listed? Contact our concierge line at +1 (212) 804-8842
              and we will source directly from vetted private collections.
            </p>
            <button
              onClick={() => {
                setSelectedBrand('ALL');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 bg-white text-black font-mono text-[12px] font-bold uppercase hover:bg-[#D4FF00] transition-colors"
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-[#1E1E1E] border border-[#2B2B2B] hover:border-white flex flex-col justify-between group transition-all duration-200"
              >
                <div className="p-4 flex items-center justify-between font-mono text-[12px] border-b border-[#2B2B2B]">
                  <span className="px-2 py-0.5 bg-[#151515] text-[#00FF66] border border-[#00FF66]/30 font-bold uppercase text-[10px] tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-[#737373]">SKU: {item.sku}</span>
                </div>

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
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="px-3 py-1.5 bg-[#151515] border border-[#404040] text-white font-mono text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-[#D4FF00]" />
                      <span>INSPECT SPECIMEN</span>
                    </div>
                  </div>
                </div>

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
        )}
      </div>
    </div>
  );
};
