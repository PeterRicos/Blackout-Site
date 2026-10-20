/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActivePage, VaultItem } from './types';
import { HERO_ITEM, VAULT_ITEMS } from './data/items';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { TrendingNow } from './components/TrendingNow';
import { ByBrand } from './components/ByBrand';
import { BeyondThePairs } from './components/BeyondThePairs';
import { AuthenticityBanner } from './components/AuthenticityBanner';
import { RecentlyAdded } from './components/RecentlyAdded';
import { Footer } from './components/Footer';
import { ClaimModal } from './components/ClaimModal';
import { ItemDetailModal } from './components/ItemDetailModal';
import { SearchModal } from './components/SearchModal';
import { CatalogView } from './components/CatalogView';
import { AboutView } from './components/AboutView';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>('ALL');

  // Modals state
  const [claimItem, setClaimItem] = useState<VaultItem | null>(null);
  const [isClaimOpen, setIsClaimOpen] = useState(false);

  const [inspectItem, setInspectItem] = useState<VaultItem | null>(null);
  const [isInspectOpen, setIsInspectOpen] = useState(false);

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K / / for search, Esc to close modals)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsClaimOpen(false);
        setIsInspectOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOpenClaim = (item: VaultItem) => {
    setClaimItem(item);
    setIsClaimOpen(true);
  };

  const handleOpenClaimGeneral = () => {
    setClaimItem(HERO_ITEM);
    setIsClaimOpen(true);
  };

  const handleInspectItem = (item: VaultItem) => {
    setInspectItem(item);
    setIsInspectOpen(true);
  };

  const handleSelectBrand = (brand: string) => {
    setSelectedBrandFilter(brand);
    // If brand is Supreme or Bearbrick or clothing, route to appropriate catalog, else sneakers
    if (brand === 'BEARBRICK') {
      setActivePage('random-shit');
    } else if (brand === 'SUPREME') {
      setActivePage('shop-clothing');
    } else {
      setActivePage('shop-sneakers');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#D4FF00] selection:text-[#151515]">
      {/* Header */}
      <Header
        activePage={activePage}
        onNavigate={(page) => {
          setSelectedBrandFilter('ALL');
          setActivePage(page);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenClaimGeneral={handleOpenClaimGeneral}
      />

      {/* Main Content Area */}
      <main className="w-full pt-[97px] flex-grow">
        {activePage === 'home' && (
          <>
            <Hero
              onNavigate={(page) => {
                setSelectedBrandFilter('ALL');
                setActivePage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenClaim={handleOpenClaim}
              onInspectItem={handleInspectItem}
            />

            <HowItWorks onOpenDirectInquiry={handleOpenClaimGeneral} />

            <TrendingNow
              onOpenClaim={handleOpenClaim}
              onInspectItem={handleInspectItem}
              onExploreVault={() => {
                setSelectedBrandFilter('ALL');
                setActivePage('shop-sneakers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <ByBrand onSelectBrand={handleSelectBrand} />

            <BeyondThePairs
              onNavigate={(page) => {
                setSelectedBrandFilter('ALL');
                setActivePage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <AuthenticityBanner />

            <RecentlyAdded
              onOpenClaim={handleOpenClaim}
              onInspectItem={handleInspectItem}
              onBrowseVault={() => {
                setSelectedBrandFilter('ALL');
                setActivePage('shop-sneakers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {activePage === 'shop-sneakers' && (
          <CatalogView
            category="sneakers"
            title="Sneakers Archive"
            subtitle="Deadstock grail sneakers, hand-checked for stitch integrity and UV validity. In hand and ready to ship within 24-48 hours."
            initialBrandFilter={selectedBrandFilter}
            onBackToHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenClaim={handleOpenClaim}
            onInspectItem={handleInspectItem}
          />
        )}

        {activePage === 'shop-clothing' && (
          <CatalogView
            category="clothing"
            title="Clothing & Accessories"
            subtitle="Archive streetwear, limited collaboration hoodies, box logo graphic tees, and vetted collector apparel."
            initialBrandFilter={selectedBrandFilter}
            onBackToHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenClaim={handleOpenClaim}
            onInspectItem={handleInspectItem}
          />
        )}

        {activePage === 'random-shit' && (
          <CatalogView
            category="random-shit"
            title="Random Shit"
            subtitle="Medicom Bearbrick sets, art toys, skate decks, spray can memorabilia, and rare gallery specimens."
            initialBrandFilter={selectedBrandFilter}
            onBackToHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenClaim={handleOpenClaim}
            onInspectItem={handleInspectItem}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            onBackToHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenDirectInquiry={handleOpenClaimGeneral}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(page) => {
          setSelectedBrandFilter('ALL');
          setActivePage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Interactive Modals */}
      <ClaimModal
        item={claimItem}
        isOpen={isClaimOpen}
        onClose={() => setIsClaimOpen(false)}
      />

      <ItemDetailModal
        item={inspectItem}
        isOpen={isInspectOpen}
        onClose={() => setIsInspectOpen(false)}
        onClaim={(item) => {
          setIsInspectOpen(false);
          handleOpenClaim(item);
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(item) => {
          handleInspectItem(item);
        }}
        onClaimProduct={(item) => {
          handleOpenClaim(item);
        }}
      />
    </div>
  );
}
