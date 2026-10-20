import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { VAULT_ITEMS, HERO_ITEM } from '../data/items';
import { VaultItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (item: VaultItem) => void;
  onClaimProduct: (item: VaultItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onClaimProduct
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const allItems = [HERO_ITEM, ...VAULT_ITEMS];
  // Deduplicate by ID
  const uniqueItems = Array.from(new Map(allItems.map((item) => [item.id, item])).values());

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredItems = uniqueItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.sku.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#1E1E1E] border border-[#404040] shadow-2xl mt-12 flex flex-col text-[#e5e2e1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b border-[#2B2B2B] bg-[#151515]">
          <Search className="w-5 h-5 text-[#D4FF00] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by pair title, brand (Jordan, Yeezy, Supreme), or SKU..."
            className="flex-1 bg-transparent font-mono text-[14px] text-white placeholder-[#737373] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#737373] hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 bg-[#262626] font-mono text-[11px] text-[#c4c7c8] hover:text-white uppercase"
          >
            ESC
          </button>
        </div>

        {/* Quick Filter Tag Suggestions */}
        <div className="px-4 py-2.5 bg-[#0e0e0e] border-b border-[#2B2B2B] flex items-center gap-2 overflow-x-auto text-[11px] font-mono">
          <span className="text-[#737373] uppercase font-bold flex-shrink-0">FILTERS:</span>
          {['JORDAN', 'YEEZY', 'SUPREME', 'BEARBRICK', 'APPAREL'].map((brand) => (
            <button
              key={brand}
              onClick={() => setQuery(brand)}
              className="px-2 py-0.5 bg-[#1E1E1E] border border-[#2B2B2B] hover:border-white text-[#c4c7c8] hover:text-white transition-colors cursor-pointer flex-shrink-0"
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-[#2B2B2B]">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center font-mono text-[13px] text-[#737373] flex flex-col items-center gap-2">
              <span>NO ARTIFACT FOUND MATCHING "{query.toUpperCase()}"</span>
              <span className="text-[11px]">
                Text our direct line at +1 (212) 804-8842 to request any grail.
              </span>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="p-4 flex items-center justify-between gap-4 hover:bg-[#262626] transition-colors group cursor-pointer"
                onClick={() => {
                  onClose();
                  onSelectProduct(item);
                }}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-14 h-14 bg-[#0e0e0e] border border-[#2B2B2B] p-1 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-contain filter drop-shadow"
                    />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      <span className="text-[#00FF66] font-bold">SKU: {item.sku}</span>
                      <span className="text-[#737373]">·</span>
                      <span className="text-[#737373]">{item.brand}</span>
                    </div>
                    <div className="font-sans text-[15px] font-bold text-white uppercase truncate group-hover:text-[#D4FF00] transition-colors">
                      {item.title}
                    </div>
                    <span className="font-mono text-[11px] text-[#D4FF00]">
                      {item.priceNote}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                    onClaimProduct(item);
                  }}
                  className="px-3 py-1.5 bg-[#151515] group-hover:bg-white text-[#c4c7c8] group-hover:text-black font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer border border-[#404040]"
                >
                  <span>CLAIM</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-[#151515] border-t border-[#2B2B2B] flex items-center justify-between font-mono text-[11px] text-[#737373]">
          <span>{filteredItems.length} ITEMS READY IN VAULT</span>
          <span>PRESS ENTER OR CLICK TO INSPECT</span>
        </div>
      </div>
    </div>
  );
};
