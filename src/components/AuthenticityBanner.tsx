import React from 'react';
import { SearchCheck, Microscope, Truck } from 'lucide-react';

export const AuthenticityBanner: React.FC = () => {
  return (
    <section className="w-full bg-[#0e0e0e] py-16 lg:py-20 border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="font-mono text-[11px] text-[#00FF66] uppercase tracking-widest font-bold">
              05 // OUR STANDARD
            </div>
            <h2 className="font-sans text-[36px] sm:text-[44px] uppercase text-white font-extrabold leading-[1.08] tracking-[-0.04em]">
              AUTHENTICITY GUARANTEED.
            </h2>
            <p className="font-sans text-[16px] text-[#c4c7c8] leading-relaxed">
              Every single pair undergoes a rigorous physical inspection: stitch count, UV light
              verification, box labels, and production stamps. We don't sell fakes. Period.
            </p>
          </div>

          {/* Right Column: 3 Protocols */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Protocol 01 */}
            <div className="p-6 bg-[#1E1E1E] border border-[#2B2B2B] hover:border-[#00FF66]/50 flex flex-col gap-4 transition-colors">
              <div className="w-10 h-10 bg-[#151515] flex items-center justify-center text-[#00FF66]">
                <SearchCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#737373] uppercase font-bold mb-1">
                  01 // PROTOCOL
                </div>
                <h3 className="font-sans text-[16px] uppercase font-bold text-white mb-1.5">
                  Source Verification
                </h3>
                <p className="font-sans text-[13px] text-[#c4c7c8] leading-relaxed">
                  Acquired strictly from authorized retail drops and reputable vetted collectors.
                </p>
              </div>
            </div>

            {/* Protocol 02 */}
            <div className="p-6 bg-[#1E1E1E] border border-[#2B2B2B] hover:border-[#00FF66]/50 flex flex-col gap-4 transition-colors">
              <div className="w-10 h-10 bg-[#151515] flex items-center justify-center text-[#00FF66]">
                <Microscope className="w-6 h-6" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#737373] uppercase font-bold mb-1">
                  02 // PROTOCOL
                </div>
                <h3 className="font-sans text-[16px] uppercase font-bold text-white mb-1.5">
                  Hands-On Verification
                </h3>
                <p className="font-sans text-[13px] text-[#c4c7c8] leading-relaxed">
                  Multi-point UV blacklight, font geometry, insole glue pattern, and weight checks.
                </p>
              </div>
            </div>

            {/* Protocol 03 */}
            <div className="p-6 bg-[#1E1E1E] border border-[#2B2B2B] hover:border-[#00FF66]/50 flex flex-col gap-4 transition-colors">
              <div className="w-10 h-10 bg-[#151515] flex items-center justify-center text-[#00FF66]">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#737373] uppercase font-bold mb-1">
                  03 // PROTOCOL
                </div>
                <h3 className="font-sans text-[16px] uppercase font-bold text-white mb-1.5">
                  Fast & Insured Delivery
                </h3>
                <p className="font-sans text-[13px] text-[#c4c7c8] leading-relaxed">
                  Double-boxed tamper-evident security tape, fully insured with real-time tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
