import React from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2, Lock, Smartphone, Truck, Box, Phone } from 'lucide-react';
import { VAULT_PHONE, VAULT_SMS_NUM } from '../data/items';

interface AboutViewProps {
  onBackToHome: () => void;
  onOpenDirectInquiry: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBackToHome, onOpenDirectInquiry }) => {
  return (
    <div className="w-full bg-[#131313] min-h-screen py-10 lg:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col gap-12 text-[#e5e2e1]">
        {/* Navigation Return */}
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 font-mono text-[12px] text-[#737373] hover:text-[#D4FF00] uppercase tracking-wider transition-colors cursor-pointer self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO VAULT OVERVIEW</span>
        </button>

        {/* Header Block */}
        <div className="flex flex-col gap-4 border-b border-[#2B2B2B] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201f1f] border border-[#2B2B2B] self-start">
            <span className="w-2 h-2 bg-[#D4FF00] rounded-full animate-ping"></span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#c4c7c8]">
              MANIFESTO & VAULT RULES // SINCE 2021
            </span>
          </div>

          <h1 className="font-sans text-[38px] sm:text-[52px] uppercase text-white font-extrabold leading-[1.05] tracking-[-0.05em]">
            THE VAULT STANDARD.
          </h1>
          <p className="font-sans text-[17px] text-[#c4c7c8] leading-relaxed">
            Operating strictly outside conventional e-commerce. Curated archive artifacts, rare
            footwear, and deadstock garments verified 100% authentic. No synthetic checkouts.
            Conversational commerce built on personal relationships and provenance.
          </p>
        </div>

        {/* Why No Cart? */}
        <section className="flex flex-col gap-5 p-8 bg-[#1E1E1E] border border-[#2B2B2B]">
          <div className="font-mono text-[11px] text-[#D4FF00] uppercase font-bold tracking-widest">
            01 // PHILOSOPHY
          </div>
          <h2 className="font-sans text-[26px] uppercase font-extrabold text-white">
            WHY WE DON'T USE CARTS OR CHECKOUT BARS
          </h2>
          <div className="font-sans text-[15px] text-[#c4c7c8] space-y-4 leading-relaxed">
            <p>
              Grail sneakers and archival garments are not commoditized fast fashion. Automated
              bots, cart snipers, and predatory middleman marketplaces have ruined the community.
            </p>
            <p>
              At Random Stock, every single item in our catalog is physically in our Manhattan
              vault. When you claim a pair by call or text, you are speaking directly with our lead
              archivists. We confirm real-time shoe condition, box integrity, production batch codes,
              and arrange custom insured courier delivery right to your door.
            </p>
          </div>
          <div className="pt-4 border-t border-[#2B2B2B] flex flex-wrap items-center justify-between gap-4 font-mono text-[12px]">
            <span className="text-[#00FF66] font-bold">100% BOT-FREE GUARANTEE</span>
            <span className="text-[#737373]">HUMAN-TO-HUMAN VAULT DESK</span>
          </div>
        </section>

        {/* Physical 5-Point Authentication Protocol */}
        <section className="flex flex-col gap-6">
          <div className="font-mono text-[11px] text-[#00FF66] uppercase font-bold tracking-widest">
            02 // THE INSPECTION PROTOCOL
          </div>
          <h2 className="font-sans text-[26px] uppercase font-extrabold text-white">
            HAND-CHECKED AUTHENTICATION BENCHMARKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-[#1E1E1E] border border-[#2B2B2B] flex flex-col gap-2">
              <div className="font-mono text-[11px] text-[#D4FF00] font-bold">01 // UV BLACKLIGHT</div>
              <p className="font-sans text-[13px] text-[#c4c7c8]">
                Every sneaker is scanned under 365nm UV blacklight to identify invisible production
                stamps, glue bleed marks, and factory indicator lines characteristic of counterfeit runs.
              </p>
            </div>

            <div className="p-5 bg-[#1E1E1E] border border-[#2B2B2B] flex flex-col gap-2">
              <div className="font-mono text-[11px] text-[#D4FF00] font-bold">02 // STITCH COUNT & DENSITY</div>
              <p className="font-sans text-[13px] text-[#c4c7c8]">
                Precision gauge measurements of swoosh angles, wing logos, heel tab stitch spacing,
                and corner-stitch flaws compared against retail master archives.
              </p>
            </div>

            <div className="p-5 bg-[#1E1E1E] border border-[#2B2B2B] flex flex-col gap-2">
              <div className="font-mono text-[11px] text-[#D4FF00] font-bold">03 // INSOLE STROBEL & GLUE</div>
              <p className="font-sans text-[13px] text-[#c4c7c8]">
                Insoles are removed to inspect strobel stitch density, factory glue patterns (diagonal
                vs horizontal line spacing), and footbed density.
              </p>
            </div>

            <div className="p-5 bg-[#1E1E1E] border border-[#2B2B2B] flex flex-col gap-2">
              <div className="font-mono text-[11px] text-[#D4FF00] font-bold">04 // BARCODE & BOX LABEL</div>
              <p className="font-sans text-[13px] text-[#c4c7c8]">
                Font kerning, weight, MSRP tear-tabs, RFID tag responses, and box manufacture date
                stamps are cross-referenced with regional Nike/Adidas batch logs.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping & Tamper-Proof Packaging */}
        <section className="p-8 bg-[#1E1E1E] border border-[#2B2B2B] flex flex-col gap-4">
          <div className="font-mono text-[11px] text-[#737373] uppercase font-bold tracking-widest">
            03 // DISPATCH POLICY
          </div>
          <h2 className="font-sans text-[24px] uppercase font-extrabold text-white">
            PACKAGING & COURIER DISPATCH
          </h2>
          <p className="font-sans text-[14px] text-[#c4c7c8] leading-relaxed">
            All specimens are double-boxed using heavy-gauge corrugated outer cartons with shock-absorbing
            bubble cushions. Sealed with tamper-evident security tape printed with serialized vault numbers.
            Tracked via FedEx Express or UPS Next Day Air with direct SMS updates at each checkpoint.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 font-mono text-[11px] text-[#00FF66]">
            <span>✓ FULLY INSURED TRANSIT</span>
            <span>✓ SIGNATURE REQUIRED AT DELIVERY</span>
            <span>✓ DOUBLE-BOX PROTECTION</span>
          </div>
        </section>

        {/* Ready to Claim */}
        <section className="p-8 bg-[#151515] border border-[#D4FF00] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] text-[#D4FF00] uppercase font-bold">
              SPEAK DIRECTLY WITH THE VAULT
            </span>
            <h3 className="font-sans text-[22px] uppercase font-black text-white">
              HAVE A PAIR IN MIND?
            </h3>
            <p className="font-sans text-[13px] text-[#c4c7c8]">
              SMS or call {VAULT_PHONE} · Mon-Sun 10am-8pm EST
            </p>
          </div>
          <button
            onClick={onOpenDirectInquiry}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#D4FF00] hover:bg-white text-black font-sans text-[13px] uppercase font-extrabold tracking-wider transition-colors cursor-pointer flex-shrink-0"
          >
            START CLAIM INQUIRY
          </button>
        </section>
      </div>
    </div>
  );
};
