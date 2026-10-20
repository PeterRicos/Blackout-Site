import React from 'react';
import { Smartphone, ArrowRight } from 'lucide-react';
import { VAULT_PHONE } from '../data/items';

interface HowItWorksProps {
  onOpenDirectInquiry: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenDirectInquiry }) => {
  return (
    <section className="w-full bg-[#0e0e0e] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Copy & Explanation */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="font-mono text-[11px] text-[#D4FF00] uppercase tracking-widest font-bold">
              01 // HOW IT WORKS
            </div>
            <h2 className="font-sans text-[36px] sm:text-[44px] uppercase text-white font-extrabold leading-[1.08] tracking-[-0.04em]">
              NO CART. NO CHECKOUT. JUST MESSAGE US.
            </h2>
            <p className="font-sans text-[16px] text-[#c4c7c8] leading-relaxed">
              Every pair here is in hand and claimed directly. Find the one you want, tell us your
              size, and we reply with the price, the condition and the shipping. Nothing is sold out
              unless we tell you it is.
            </p>

            {/* Direct SMS Callout */}
            <div
              onClick={onOpenDirectInquiry}
              className="mt-3 p-4 bg-[#1E1E1E] border border-[#2B2B2B] hover:border-[#D4FF00] flex items-center gap-4 cursor-pointer transition-colors group"
            >
              <div className="w-11 h-11 bg-[#151515] flex items-center justify-center text-[#00FF66] flex-shrink-0 group-hover:bg-[#D4FF00] group-hover:text-black transition-colors">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[12px] font-bold text-white uppercase tracking-wider group-hover:text-[#D4FF00] transition-colors">
                  DIRECT SMS LINE OPEN
                </span>
                <span className="font-mono text-[13px] text-[#737373]">
                  {VAULT_PHONE} · MON-SUN 10AM-8PM EST
                </span>
              </div>
            </div>
          </div>

          {/* Right: 3 Numbered Steps */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Step 01 */}
            <div className="bg-[#1E1E1E] border border-[#2B2B2B] p-6 flex flex-col justify-between h-full min-h-[220px] hover:bg-[#262626] transition-colors">
              <div className="font-sans text-[52px] text-[#737373]/30 font-black leading-none">
                01
              </div>
              <div className="mt-6">
                <h3 className="font-sans text-[17px] uppercase font-bold text-white mb-2">
                  Browse the vault
                </h3>
                <p className="font-sans text-[14px] text-[#c4c7c8] leading-snug">
                  Check our live inventory of deadstock, grail sneakers, and streetwear.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="bg-[#1E1E1E] border border-[#2B2B2B] p-6 flex flex-col justify-between h-full min-h-[220px] hover:bg-[#262626] transition-colors">
              <div className="font-sans text-[52px] text-[#D4FF00]/50 font-black leading-none">
                02
              </div>
              <div className="mt-6">
                <h3 className="font-sans text-[17px] uppercase font-bold text-white mb-2">
                  Call or text the pair
                </h3>
                <p className="font-sans text-[14px] text-[#c4c7c8] leading-snug">
                  Send the SKU or pair title along with your requested size directly.
                </p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="bg-[#1E1E1E] border border-[#2B2B2B] p-6 flex flex-col justify-between h-full min-h-[220px] hover:bg-[#262626] transition-colors">
              <div className="font-sans text-[52px] text-[#00FF66]/50 font-black leading-none">
                03
              </div>
              <div className="mt-6">
                <h3 className="font-sans text-[17px] uppercase font-bold text-white mb-2">
                  We confirm price & shipping
                </h3>
                <p className="font-sans text-[14px] text-[#c4c7c8] leading-snug">
                  We lock down the pair, send invoice & dispatch double-boxed via express.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
