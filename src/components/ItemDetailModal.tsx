import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Eye, Tag, Calendar, UserCheck } from 'lucide-react';
import { VaultItem } from '../types';

interface ItemDetailModalProps {
  item: VaultItem | null;
  isOpen: boolean;
  onClose: () => void;
  onClaim: (item: VaultItem) => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onClaim
}) => {
  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#1E1E1E] border border-[#404040] p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-[#e5e2e1] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#737373] hover:text-white transition-colors cursor-pointer"
          type="button"
          aria-label="Close Inspection Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Tag */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-[#00FF66] bg-[#151515] border border-[#00FF66]/30 px-2 py-0.5 uppercase font-bold tracking-wider">
            {item.tag}
          </span>
          <span className="font-mono text-[11px] text-[#D4FF00] font-bold">
            SKU: {item.sku}
          </span>
        </div>

        {/* 2-Column Inspection Stage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left: High-Res Image with Authenticity Stamp */}
          <div className="relative aspect-square bg-[#0e0e0e] border border-[#2B2B2B] p-6 flex items-center justify-center overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="w-full h-full object-contain filter drop-shadow-2xl"
            />
            {/* Authenticity Watermark */}
            <div className="absolute top-3 right-3 bg-[#151515]/90 border border-[#00FF66] px-2 py-1 font-mono text-[10px] text-[#00FF66] font-bold">
              VAULT VERIFIED 100%
            </div>
          </div>

          {/* Right: Technical Specs & Provenance */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-mono text-[11px] text-[#737373] uppercase tracking-widest font-bold">
                {item.brand} ARCHIVE
              </span>
              <h2 className="font-sans text-[24px] uppercase font-extrabold text-white leading-tight">
                {item.title}
              </h2>
              <div className="mt-2 font-mono text-[13px] text-[#D4FF00] font-bold">
                PRICING PROTOCOL: {item.priceNote}
                {item.estimatedValue && (
                  <span className="text-[#c4c7c8] font-normal ml-2">
                    (Est. {item.estimatedValue})
                  </span>
                )}
              </div>
            </div>

            <p className="font-sans text-[14px] text-[#c4c7c8] leading-relaxed">
              {item.description}
            </p>

            {/* Condition Breakdown */}
            <div className="p-3 bg-[#151515] border border-[#2B2B2B] flex flex-col gap-2 font-mono text-[11px]">
              <div className="flex items-center justify-between text-[#737373] border-b border-[#2B2B2B] pb-1">
                <span>CONDITION GRADE:</span>
                <span className="text-white font-bold">{item.condition}</span>
              </div>
              <div className="flex items-center justify-between text-[#737373] border-b border-[#2B2B2B] pb-1">
                <span>SOURCE PROVENANCE:</span>
                <span className="text-white font-bold truncate max-w-[200px]">
                  {item.provenance.origin}
                </span>
              </div>
              <div className="flex items-center justify-between text-[#737373]">
                <span>INSPECTOR ID:</span>
                <span className="text-[#00FF66] font-bold">{item.provenance.inspector}</span>
              </div>
            </div>

            {/* 3-Point Hands-On Verification Checklist */}
            <div className="flex flex-col gap-1.5 font-mono text-[11px]">
              <span className="text-[#737373] uppercase font-bold text-[10px]">
                AUTHENTICATION CHECKLIST:
              </span>
              <div className="flex items-center gap-2 text-[#00FF66]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>UV Blacklight Inspection: PASSED</span>
              </div>
              <div className="flex items-center gap-2 text-[#00FF66]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Insole Stitch & Glue Geometry: VERIFIED</span>
              </div>
              <div className="flex items-center gap-2 text-[#00FF66]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Box Label & RFID Barcode: 100% MATCH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sizes Available */}
        <div className="p-4 bg-[#151515] border border-[#2B2B2B] flex flex-col gap-2">
          <div className="font-mono text-[11px] text-[#737373] uppercase font-bold">
            AVAILABLE SIZES IN VAULT:
          </div>
          <div className="flex flex-wrap gap-2">
            {item.sizesAvailable.map((size) => (
              <span
                key={size}
                className="px-2.5 py-1 bg-[#1E1E1E] border border-[#404040] font-mono text-[12px] text-white"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => {
              onClose();
              onClaim(item);
            }}
            className="w-full sm:flex-1 py-3.5 bg-white hover:bg-[#D4FF00] text-black font-sans text-[14px] uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>INQUIRE / CLAIM THIS SPECIMEN</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#262626] hover:bg-[#353534] text-[#c4c7c8] font-mono text-[12px] uppercase tracking-wider transition-colors cursor-pointer"
          >
            BACK TO VAULT
          </button>
        </div>
      </div>
    </div>
  );
};
