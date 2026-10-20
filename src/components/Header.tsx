import React, { useState } from 'react';
import { Search, ArrowRight, X, Menu, Phone, ShieldCheck } from 'lucide-react';
import { ActivePage } from '../types';
import { VAULT_PHONE, VAULT_SMS_NUM } from '../data/items';

interface HeaderProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  onOpenSearch: () => void;
  onOpenClaimGeneral: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  onOpenSearch,
  onOpenClaimGeneral
}) => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLedgerTooltip, setShowLedgerTooltip] = useState(false);

  const handleNavClick = (page: ActivePage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#151515]/95 backdrop-blur-md border-b border-[#2B2B2B]">
      {/* Top Ticker / Announcement Bar */}
      {showAnnouncement && (
        <div className="w-full bg-[#0e0e0e] border-b border-[#2B2B2B] px-4 py-2 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px] tracking-widest text-[#c4c7c8] uppercase">
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="inline-block w-1.5 h-1.5 bg-[#D4FF00] rounded-full animate-pulse flex-shrink-0"></span>
              <span className="truncate">NO CART — CALL OR TEXT TO CLAIM A PAIR · ORDERS SHIP WITHIN 1-2 BUSINESS DAYS</span>
            </div>
            <button
              aria-label="Dismiss Announcement"
              onClick={() => setShowAnnouncement(false)}
              className="text-[#737373] hover:text-white transition-colors flex items-center justify-center p-0.5 ml-2 cursor-pointer"
              type="button"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Nav Bar */}
      <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        <div className="flex items-center gap-8 lg:gap-10">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-baseline gap-1 group text-left cursor-pointer"
          >
            <span className="font-sans text-[20px] tracking-tight text-white font-extrabold uppercase">
              RANDOM
            </span>
            <span className="font-sans text-[20px] italic tracking-wider text-[#D4FF00] font-black uppercase">
              STOCK
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('shop-sneakers')}
              className={`font-mono text-[12px] font-bold uppercase tracking-widest py-1 transition-colors cursor-pointer ${
                activePage === 'shop-sneakers'
                  ? 'text-white border-b-2 border-white'
                  : 'text-[#c4c7c8] hover:text-white'
              }`}
            >
              Shop Sneakers
            </button>

            <button
              onClick={() => handleNavClick('shop-clothing')}
              className={`font-mono text-[12px] font-bold uppercase tracking-widest py-1 transition-colors cursor-pointer ${
                activePage === 'shop-clothing'
                  ? 'text-white border-b-2 border-white'
                  : 'text-[#c4c7c8] hover:text-white'
              }`}
            >
              Shop Clothing & Accessories
            </button>

            <button
              onClick={() => handleNavClick('random-shit')}
              className={`font-mono text-[12px] font-bold uppercase tracking-widest py-1 transition-colors cursor-pointer ${
                activePage === 'random-shit'
                  ? 'text-white border-b-2 border-white'
                  : 'text-[#c4c7c8] hover:text-white'
              }`}
            >
              Random Shit
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`font-mono text-[12px] font-bold uppercase tracking-widest py-1 transition-colors cursor-pointer ${
                activePage === 'about'
                  ? 'text-white border-b-2 border-white'
                  : 'text-[#c4c7c8] hover:text-white'
              }`}
            >
              About
            </button>
          </nav>
        </div>

        {/* Right Action Bar */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Button */}
          <button
            aria-label="Search Archive"
            onClick={onOpenSearch}
            className="w-9 h-9 flex items-center justify-center border border-[#2B2B2B] bg-[#1E1E1E] hover:border-white text-[#c4c7c8] hover:text-white transition-colors cursor-pointer"
            type="button"
            title="Search the vault (Cmd+K)"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Call / Text Button */}
          <button
            onClick={onOpenClaimGeneral}
            className="hidden sm:flex items-center gap-1.5 px-4 h-9 bg-white hover:bg-[#D4FF00] text-[#151515] hover:text-[#151515] font-sans text-[12px] uppercase font-extrabold tracking-wider transition-colors duration-150 cursor-pointer"
            type="button"
          >
            <span>CALL / TEXT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Vault Operator / Ledger Badge */}
          <div className="relative">
            <button
              onClick={() => setShowLedgerTooltip(!showLedgerTooltip)}
              className="w-8 h-8 bg-white hover:bg-[#D4FF00] transition-colors flex items-center justify-center text-[#151515] cursor-pointer"
              title="Vault Operator Status: Active"
              type="button"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>

            {showLedgerTooltip && (
              <div className="absolute right-0 top-11 w-64 p-3 bg-[#1E1E1E] border border-[#404040] shadow-2xl z-50 font-mono text-[11px] text-[#c4c7c8] flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-[#2B2B2B] pb-1 text-white font-bold">
                  <span>VAULT OPERATOR</span>
                  <span className="text-[#00FF66] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping inline-block"></span>
                    ONLINE
                  </span>
                </div>
                <div>DISPATCH LOCATION: SOHO, NYC</div>
                <div>SMS DESK: {VAULT_PHONE}</div>
                <div className="text-[10px] text-[#737373] pt-1">
                  Ready to quote condition, sizes & instant shipping manifests.
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center border border-[#2B2B2B] bg-[#1E1E1E] text-white cursor-pointer"
            aria-label="Toggle Navigation Menu"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151515] border-b border-[#2B2B2B] px-6 py-4 flex flex-col gap-3 font-mono text-[13px] uppercase">
          <button
            onClick={() => handleNavClick('shop-sneakers')}
            className={`text-left py-2 border-b border-[#2B2B2B] ${
              activePage === 'shop-sneakers' ? 'text-[#D4FF00] font-bold' : 'text-[#c4c7c8]'
            }`}
          >
            Shop Sneakers
          </button>
          <button
            onClick={() => handleNavClick('shop-clothing')}
            className={`text-left py-2 border-b border-[#2B2B2B] ${
              activePage === 'shop-clothing' ? 'text-[#D4FF00] font-bold' : 'text-[#c4c7c8]'
            }`}
          >
            Shop Clothing & Accessories
          </button>
          <button
            onClick={() => handleNavClick('random-shit')}
            className={`text-left py-2 border-b border-[#2B2B2B] ${
              activePage === 'random-shit' ? 'text-[#D4FF00] font-bold' : 'text-[#c4c7c8]'
            }`}
          >
            Random Shit
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`text-left py-2 border-b border-[#2B2B2B] ${
              activePage === 'about' ? 'text-[#D4FF00] font-bold' : 'text-[#c4c7c8]'
            }`}
          >
            About & Manifesto
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenClaimGeneral();
            }}
            className="w-full mt-2 py-3 bg-white hover:bg-[#D4FF00] text-black font-sans font-black text-center tracking-wider text-[13px]"
          >
            CALL OR TEXT TO CLAIM
          </button>
        </div>
      )}
    </header>
  );
};
