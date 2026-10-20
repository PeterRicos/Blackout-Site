import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ActivePage } from '../types';
import { VAULT_PHONE } from '../data/items';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#151515] border-t border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pb-14 border-b border-[#2B2B2B]">
          {/* Column 01: Manifesto */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[11px] text-[#737373] uppercase tracking-widest font-bold">
              01 // MANIFESTO
            </div>
            <div className="font-sans text-[18px] uppercase text-white font-extrabold">
              The Vault Standard
            </div>
            <p className="font-sans text-[14px] text-[#c4c7c8] leading-relaxed max-w-sm">
              Operating strictly outside conventional e-commerce. Curated archive artifacts, rare
              footwear, and deadstock garments verified 100% authentic. No synthetic checkouts.
              Immediate claim protocol.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-[#00FF66] font-bold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#00FF66]" />
              <span>VAULT SECURED GUARANTEE</span>
            </div>
          </div>

          {/* Column 02: Directory */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[11px] text-[#737373] uppercase tracking-widest font-bold">
              02 // DIRECTORY
            </div>
            <div className="font-sans text-[18px] uppercase text-white font-extrabold">
              The Vault Index
            </div>
            <ul className="flex flex-col gap-2.5 font-mono text-[12px] uppercase tracking-wider">
              <li className="flex items-center justify-between border-b border-[#2B2B2B] pb-2">
                <button
                  onClick={() => onNavigate('shop-sneakers')}
                  className="text-[#c4c7c8] hover:text-[#D4FF00] transition-colors cursor-pointer"
                >
                  Sneakers Archive
                </button>
                <span className="text-[#737373]">[48]</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#2B2B2B] pb-2">
                <button
                  onClick={() => onNavigate('shop-clothing')}
                  className="text-[#c4c7c8] hover:text-[#D4FF00] transition-colors cursor-pointer"
                >
                  Clothing & Gear
                </button>
                <span className="text-[#737373]">[29]</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#2B2B2B] pb-2">
                <button
                  onClick={() => onNavigate('random-shit')}
                  className="text-[#c4c7c8] hover:text-[#D4FF00] transition-colors cursor-pointer"
                >
                  Random Shit
                </button>
                <span className="text-[#737373]">[14]</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#2B2B2B] pb-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#c4c7c8] hover:text-[#D4FF00] transition-colors cursor-pointer"
                >
                  Provenance & Rules
                </button>
                <span className="text-[#737373]">[DOC]</span>
              </li>
            </ul>
          </div>

          {/* Column 03: Dispatch */}
          <div className="flex flex-col gap-4">
            <div className="font-mono text-[11px] text-[#737373] uppercase tracking-widest font-bold">
              03 // DISPATCH
            </div>
            <div className="font-sans text-[18px] uppercase text-white font-extrabold">
              Shipping & Returns
            </div>
            <p className="font-sans text-[14px] text-[#c4c7c8] leading-relaxed">
              All orders double-boxed and dispatched via tracked express courier within 1-2 business
              days. Direct SMS notification upon dispatch with vault manifest certificate.
            </p>
            <div className="p-4 bg-[#1E1E1E] border border-[#2B2B2B] font-mono text-[12px] flex flex-col gap-1">
              <span className="text-white font-bold">DIRECT LINE PROTOCOL:</span>
              <span className="text-[#737373]">SMS / TEL: {VAULT_PHONE}</span>
              <span className="text-[#737373]">HOURS: 10:00 - 20:00 EST</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-[#737373]">
          <div>© 2026 RANDOM STOCK ARCHIVE. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-6">
            <span>FRIENDS & FAMILY LEDGER</span>
            <span className="text-white font-bold">MADE BY RICO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
