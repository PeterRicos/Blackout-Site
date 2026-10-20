import React, { useState } from 'react';
import { X, Smartphone, Phone, QrCode, MessageSquare, Check, Send, Sparkles, ExternalLink } from 'lucide-react';
import { VaultItem } from '../types';
import { VAULT_PHONE, VAULT_SMS_NUM } from '../data/items';

interface ClaimModalProps {
  item: VaultItem | null;
  isOpen: boolean;
  onClose: () => void;
}

interface SimulatedMessage {
  id: string;
  sender: 'user' | 'vault';
  text: string;
  time: string;
  isInvoice?: boolean;
}

export const ClaimModal: React.FC<ClaimModalProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    item.sizesAvailable[0] || 'Standard'
  );
  const [activeTab, setActiveTab] = useState<'direct' | 'qr' | 'chat'>('direct');
  const [customInput, setCustomInput] = useState('');
  const [simulatedChat, setSimulatedChat] = useState<SimulatedMessage[]>([
    {
      id: 'init-1',
      sender: 'vault',
      text: `VAULT DISPATCH ONLINE. Looking for ${item.title} (SKU: ${item.sku})? Let us know your size or questions.`,
      time: '10:02 AM'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const smsMessage = `Hi Random Stock, I want to claim ${item.title} (SKU: ${item.sku}) in size ${selectedSize}. Please confirm live price, condition, and shipping ETA.`;
  const smsHref = `sms:${VAULT_SMS_NUM}?&body=${encodeURIComponent(smsMessage)}`;
  const telHref = `tel:${VAULT_SMS_NUM}`;

  const handleSendSimulated = (textToSend?: string) => {
    const text = textToSend || customInput;
    if (!text.trim()) return;

    const userMsg: SimulatedMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setSimulatedChat((prev) => [...prev, userMsg]);
    if (!textToSend) setCustomInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const isClaimRequest =
        text.toLowerCase().includes('claim') ||
        text.toLowerCase().includes('size') ||
        text.toLowerCase().includes('price');

      let replyText = '';
      let isInvoice = false;

      if (isClaimRequest) {
        replyText = `Locked in hand! ${item.title} [Size ${selectedSize}] is verified pristine deadstock (100% pass on UV + stitch check). Vault price locked at ${item.estimatedValue || '$380'}. Dispatch ready via insured FedEx 2-Day. Here is your private vault claim link:`;
        isInvoice = true;
      } else {
        replyText = `Got it. We have 1 unit of SKU ${item.sku} reserved on your line for 20 minutes. Would you like us to generate the express checkout link?`;
      }

      setSimulatedChat((prev) => [
        ...prev,
        {
          id: `vault-${Date.now()}`,
          sender: 'vault',
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isInvoice
        }
      ]);
    }, 1100);
  };

  const copyClaimText = () => {
    navigator.clipboard.writeText(smsMessage);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#1E1E1E] border border-[#404040] p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-[#e5e2e1] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-[#737373] hover:text-white transition-colors cursor-pointer"
          onClick={onClose}
          type="button"
          aria-label="Close Modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col gap-1 pr-6">
          <div className="font-mono text-[11px] text-[#D4FF00] uppercase tracking-widest font-bold">
            DIRECT COMMERCE PROTOCOL
          </div>
          <h3 className="font-sans text-[24px] sm:text-[28px] uppercase font-extrabold text-white leading-tight">
            CLAIM THIS SPECIMEN
          </h3>
          <p className="font-sans text-[14px] text-[#c4c7c8]">
            There is no cart. Call or text our vault directly to confirm pricing, sizing
            availability, and express dispatch.
          </p>
        </div>

        {/* Item Meta Box */}
        <div className="p-4 bg-[#151515] border border-[#2B2B2B] flex items-center gap-4">
          <div className="w-16 h-16 bg-[#0e0e0e] border border-[#2B2B2B] flex-shrink-0 flex items-center justify-center p-1 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-contain filter drop-shadow"
            />
          </div>
          <div className="flex flex-col flex-grow min-w-0">
            <span className="font-mono text-[10px] text-[#737373] uppercase tracking-wider">
              SELECTED ARTIFACT
            </span>
            <div className="font-sans text-[15px] sm:text-[16px] font-bold text-white uppercase truncate">
              {item.title}
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] mt-0.5">
              <span className="text-[#00FF66] font-bold">SKU: {item.sku}</span>
              <span className="text-[#737373]">·</span>
              <span className="text-[#D4FF00]">{item.priceNote}</span>
            </div>
          </div>
        </div>

        {/* Sizing Selector */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between font-mono text-[11px]">
            <span className="text-[#c4c7c8] uppercase font-bold">SELECT YOUR SIZE:</span>
            <span className="text-[#00FF66]">ALL SIZES VERIFIED IN HAND</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {item.sizesAvailable.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1.5 font-mono text-[12px] uppercase transition-colors cursor-pointer border ${
                  selectedSize === size
                    ? 'bg-white text-black border-white font-bold'
                    : 'bg-[#151515] text-[#c4c7c8] border-[#2B2B2B] hover:border-[#737373]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Claiming Method Switcher Tabs */}
        <div className="grid grid-cols-3 border-b border-[#2B2B2B] font-mono text-[11px] uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('direct')}
            className={`pb-2.5 font-bold cursor-pointer transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'direct'
                ? 'border-white text-white'
                : 'border-transparent text-[#737373] hover:text-[#c4c7c8]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Direct Links</span>
          </button>
          <button
            onClick={() => setActiveTab('qr')}
            className={`pb-2.5 font-bold cursor-pointer transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'qr'
                ? 'border-white text-white'
                : 'border-transparent text-[#737373] hover:text-[#c4c7c8]'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>Scan QR</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`pb-2.5 font-bold cursor-pointer transition-colors border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'chat'
                ? 'border-white text-white'
                : 'border-transparent text-[#737373] hover:text-[#c4c7c8]'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Live Vault SMS</span>
          </button>
        </div>

        {/* Tab 1: Direct Actions */}
        {activeTab === 'direct' && (
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={smsHref}
                className="p-4 bg-white hover:bg-[#D4FF00] text-black flex flex-col items-center justify-center text-center gap-1 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  <span className="font-sans text-[14px] uppercase font-black">
                    SEND DIRECT SMS
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#151515] font-semibold">
                  {VAULT_PHONE}
                </span>
              </a>

              <a
                href={telHref}
                className="p-4 bg-[#201f1f] hover:bg-[#262626] text-white flex flex-col items-center justify-center text-center gap-1 transition-colors border border-[#2B2B2B] cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#00FF66]" />
                  <span className="font-sans text-[14px] uppercase font-black">
                    CALL THE VAULT
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#737373]">IMMEDIATE OPERATOR</span>
              </a>
            </div>

            {/* Copy pre-filled message */}
            <div className="flex items-center justify-between p-3 bg-[#151515] border border-[#2B2B2B] font-mono text-[11px]">
              <span className="text-[#737373] truncate mr-2">
                "Hi Random Stock, I want to claim {item.title} ({selectedSize})..."
              </span>
              <button
                type="button"
                onClick={copyClaimText}
                className="text-[#D4FF00] hover:text-white uppercase font-bold flex-shrink-0 cursor-pointer flex items-center gap-1"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#00FF66]" />
                    <span>COPIED</span>
                  </>
                ) : (
                  <span>COPY TEXT</span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: QR Code Scan */}
        {activeTab === 'qr' && (
          <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-[#151515] border border-[#2B2B2B]">
            {/* High-Contrast Vector QR Representation */}
            <div className="w-32 h-32 bg-white p-2.5 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full text-black fill-current">
                {/* QR Pattern geometry */}
                <rect x="0" y="0" width="30" height="30" />
                <rect x="5" y="5" width="20" height="20" fill="white" />
                <rect x="10" y="10" width="10" height="10" />

                <rect x="70" y="0" width="30" height="30" />
                <rect x="75" y="5" width="20" height="20" fill="white" />
                <rect x="80" y="10" width="10" height="10" />

                <rect x="0" y="70" width="30" height="30" />
                <rect x="5" y="75" width="20" height="20" fill="white" />
                <rect x="10" y="80" width="10" height="10" />

                <rect x="40" y="10" width="15" height="10" />
                <rect x="45" y="30" width="10" height="15" />
                <rect x="10" y="45" width="25" height="10" />
                <rect x="40" y="50" width="20" height="10" />
                <rect x="70" y="45" width="20" height="10" />
                <rect x="75" y="70" width="15" height="20" />
                <rect x="50" y="75" width="15" height="15" />
              </svg>
            </div>
            <div className="flex flex-col gap-1.5 font-mono text-[12px]">
              <span className="font-bold text-white uppercase">POINT PHONE CAMERA</span>
              <p className="text-[#c4c7c8] text-[11px] leading-relaxed">
                Scan with your iOS or Android camera app to instantly open your native Messages
                client with your size and SKU prefilled.
              </p>
              <div className="text-[#00FF66] text-[11px] pt-1">
                DISPATCH LINE: {VAULT_PHONE}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Interactive In-App SMS Terminal */}
        {activeTab === 'chat' && (
          <div className="flex flex-col border border-[#2B2B2B] bg-[#151515]">
            {/* Live Message History */}
            <div className="p-3 max-h-52 overflow-y-auto flex flex-col gap-2 font-mono text-[11px]">
              {simulatedChat.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col max-w-[85%] ${
                    msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                  }`}
                >
                  <div
                    className={`p-2.5 ${
                      msg.sender === 'user'
                        ? 'bg-white text-black'
                        : 'bg-[#201f1f] text-[#e5e2e1] border border-[#2B2B2B]'
                    }`}
                  >
                    <div>{msg.text}</div>
                    {msg.isInvoice && (
                      <div className="mt-2 pt-2 border-t border-[#404040] flex items-center justify-between gap-3 text-[10px]">
                        <span className="text-[#00FF66] font-bold">INVOICE #VS-88492</span>
                        <span className="underline text-[#D4FF00] font-bold">CONFIRM & DISPATCH</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-[#737373] mt-0.5">{msg.time}</span>
                </div>
              ))}
              {isTyping && (
                <div className="self-start p-2 bg-[#201f1f] border border-[#2B2B2B] font-mono text-[10px] text-[#00FF66] animate-pulse">
                  Vault Operator is typing...
                </div>
              )}
            </div>

            {/* Quick Claim Action Button */}
            <div className="p-2 border-t border-[#2B2B2B] bg-[#0e0e0e] flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  handleSendSimulated(
                    `Hi, I want to claim ${item.title} (SKU: ${item.sku}) in Size ${selectedSize}. Please confirm price & ship date.`
                  )
                }
                className="flex-1 py-1.5 px-2 bg-[#262626] hover:bg-white hover:text-black font-mono text-[10px] uppercase font-bold text-[#c4c7c8] transition-colors cursor-pointer text-left truncate"
              >
                Send Claim: Size {selectedSize}
              </button>
            </div>

            {/* Chat Input */}
            <div className="p-2 border-t border-[#2B2B2B] flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask operator condition, price, or international shipping..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendSimulated()}
                className="flex-1 bg-transparent px-2 py-1 font-mono text-[11px] text-white placeholder-[#737373] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleSendSimulated()}
                className="p-1.5 bg-[#D4FF00] text-black hover:bg-white transition-colors cursor-pointer"
                title="Send SMS"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Claiming Sequence Guide */}
        <div className="p-4 bg-[#0e0e0e] border border-[#2B2B2B] font-mono text-[11px] text-[#737373] flex flex-col gap-1">
          <span className="text-white font-bold">CLAIMING SEQUENCE:</span>
          <span>01: Send pair title + your shoe size.</span>
          <span>02: We verify current vault inventory & confirm live price.</span>
          <span>03: Payment link sent via direct invoice · Dispatched within 24-48h.</span>
        </div>
      </div>
    </div>
  );
};
