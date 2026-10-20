import React, { useState, useRef, useEffect } from 'react';
import { HERO_ITEM, TRAVIS_SCOTT_ITEM } from '../data/items';
import { ActivePage, VaultItem } from '../types';
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Upload,
  Check,
  Link as LinkIcon,
  Video,
  Sparkles
} from 'lucide-react';
import { saveUserVideo, getSavedUserVideo } from '../utils/videoStorage';

interface HeroProps {
  onNavigate: (page: ActivePage) => void;
  onOpenClaim: (item: VaultItem) => void;
  onInspectItem: (item: VaultItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenClaim,
  onInspectItem
}) => {
  const [videoSrc, setVideoSrc] = useState<string>('/reel.mp4');
  const [isCustomLoaded, setIsCustomLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [timecode, setTimecode] = useState('10:18:55 EST');

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check for previously saved user original video from IndexedDB on load
  useEffect(() => {
    getSavedUserVideo().then((savedUrl) => {
      if (savedUrl) {
        setVideoSrc(savedUrl);
        setIsCustomLoaded(true);
      }
    });
  }, []);

  // Live surveillance clock ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimecode(now.toLocaleTimeString('en-US', { hour12: false }) + ' EST');
    };
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Ensure autoplay kicks off reliably
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [videoSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = await saveUserVideo(file);
      setVideoSrc(url);
      setIsCustomLoaded(true);
      setIsPlaying(true);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const url = await saveUserVideo(file);
      setVideoSrc(url);
      setIsCustomLoaded(true);
      setIsPlaying(true);
    }
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      setVideoSrc(urlInput.trim());
      setIsCustomLoaded(true);
      setShowUrlInput(false);
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#151515] border-b border-[#2B2B2B]">
      {/* Hidden File Input for loading exact original video */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 z-10">
          {/* Vault Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#201f1f] border border-[#2B2B2B]">
            <span className="w-2 h-2 bg-[#D4FF00] rounded-full animate-ping"></span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#c4c7c8]">
              THE FRIENDS & FAMILY VAULT / SINCE 2021
            </span>
          </div>

          {/* Display Hero Title */}
          <h1 className="font-sans text-[42px] sm:text-[54px] lg:text-[62px] uppercase tracking-[-0.05em] text-white font-extrabold leading-[1.03] max-w-2xl">
            THE PAIRS YOU'VE BEEN LOOKING FOR.
          </h1>

          {/* Subheading Body */}
          <p className="font-sans text-[16px] sm:text-[18px] text-[#c4c7c8] max-w-xl leading-relaxed">
            Authentic sneakers, sourced from collectors, checked by hand, and ready for your rotation.
            This is our friends & family vault: no cart, no checkout. Claim a pair by call or text
            and we confirm the price with you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('shop-sneakers')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-[#D4FF00] text-[#151515] hover:text-[#151515] font-sans text-[14px] uppercase font-extrabold tracking-wider text-center transition-colors duration-150 cursor-pointer"
            >
              SHOP SNEAKERS
            </button>

            <button
              onClick={() => onNavigate('shop-clothing')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#201f1f] hover:bg-[#262626] text-white font-sans text-[14px] uppercase font-bold tracking-wider text-center border border-[#2B2B2B] transition-colors duration-150 cursor-pointer"
            >
              SHOP CLOTHING & ACCESSORIES
            </button>

            <button
              onClick={() => onNavigate('random-shit')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#1E1E1E] hover:bg-[#262626] text-[#c4c7c8] hover:text-white font-sans text-[14px] uppercase font-bold tracking-wider text-center border border-[#2B2B2B] transition-colors duration-150 cursor-pointer"
            >
              RANDOM SHIT
            </button>
          </div>

          {/* Metric Strip */}
          <div className="grid grid-cols-3 gap-6 pt-6 w-full max-w-lg border-t border-[#2B2B2B]">
            <div>
              <div className="font-mono text-[12px] font-bold text-[#D4FF00] uppercase tracking-wider">
                IN HAND
              </div>
              <div className="font-sans text-[18px] font-extrabold text-white">85+ PAIRS</div>
            </div>
            <div>
              <div className="font-mono text-[12px] font-bold text-[#D4FF00] uppercase tracking-wider">
                HAND INSPECT
              </div>
              <div className="font-sans text-[18px] font-extrabold text-white">100% PASS</div>
            </div>
            <div>
              <div className="font-mono text-[12px] font-bold text-[#D4FF00] uppercase tracking-wider">
                DISPATCH
              </div>
              <div className="font-sans text-[18px] font-extrabold text-white">24-48 HRS</div>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Video Frame (Plays on Loop) */}
        <div className="lg:col-span-5 relative w-full flex flex-col items-center lg:items-end">
          {/* Top Video Header Bar */}
          <div className="w-full max-w-md lg:max-w-none mb-2.5 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
            <div className="flex items-center gap-1.5 text-[#00FF66]">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></span>
              <span className="font-bold">
                {isCustomLoaded ? 'ORIGINAL VIDEO // LOOPING' : 'HERO VIDEO // LOOPING'}
              </span>
            </div>

            {/* Quick Video Actions */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1 px-2 py-0.5 bg-[#1E1E1E] border border-[#2B2B2B] hover:border-[#D4FF00] text-[#c4c7c8] hover:text-white transition-colors cursor-pointer text-[10px]"
                title="Select your original video file directly from your computer"
              >
                <Upload className="w-3 h-3 text-[#D4FF00]" />
                <span>{isCustomLoaded ? 'SWAP FILE' : 'LOAD VIDEO FILE'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowUrlInput(!showUrlInput)}
                className="flex items-center gap-1 px-2 py-0.5 bg-[#1E1E1E] border border-[#2B2B2B] hover:border-white text-[#c4c7c8] hover:text-white transition-colors cursor-pointer text-[10px]"
                title="Paste video URL"
              >
                <LinkIcon className="w-3 h-3 text-[#737373]" />
                <span>URL</span>
              </button>
            </div>
          </div>

          {/* URL Input Bar if opened */}
          {showUrlInput && (
            <form
              onSubmit={handleUrlSubmit}
              className="w-full max-w-md lg:max-w-none mb-2.5 p-2 bg-[#1E1E1E] border border-[#404040] flex items-center gap-2 font-mono text-[11px]"
            >
              <input
                type="url"
                placeholder="Paste direct MP4 video URL..."
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="flex-1 bg-[#151515] border border-[#2B2B2B] px-2 py-1 text-white placeholder-[#737373] focus:outline-none"
              />
              <button
                type="submit"
                className="px-2.5 py-1 bg-[#D4FF00] text-black font-bold uppercase"
              >
                LOAD
              </button>
            </form>
          )}

          {/* Main Video Frame */}
          <div
            ref={containerRef}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={handleDrop}
            className={`relative w-full max-w-md lg:max-w-none aspect-[4/5] bg-black border ${
              isDragOver ? 'border-[#D4FF00] scale-[1.01]' : 'border-[#404040] hover:border-white'
            } overflow-hidden shadow-2xl flex items-center justify-center group transition-all duration-200`}
          >
            {/* The Video Element playing on infinite loop */}
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster="/hero-vault-poster.jpg"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
              onClick={togglePlay}
            />

            {/* Drag & Drop Overlay */}
            {isDragOver && (
              <div className="absolute inset-0 bg-black/90 backdrop-blur-sm z-30 flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-[#D4FF00]">
                <Upload className="w-12 h-12 text-[#D4FF00] animate-bounce mb-3" />
                <span className="font-mono text-[14px] text-white font-bold uppercase">
                  DROP YOUR ORIGINAL VIDEO HERE
                </span>
                <span className="font-mono text-[12px] text-[#c4c7c8] mt-1">
                  Will instantly insert into hero & play on loop
                </span>
              </div>
            )}

            {/* Subtle cinematic vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/30 pointer-events-none" />

            {/* Top Surveillance OSD Overlay */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
              <div className="flex items-center gap-2 bg-[#0e0e0e]/85 backdrop-blur-md px-2.5 py-1 border border-[#2B2B2B] font-mono text-[10px] text-white">
                <span className="w-2 h-2 rounded-full bg-[#FF3333] animate-ping"></span>
                <span className="font-bold tracking-widest text-[#FF3333]">REC</span>
                <span className="text-[#737373]">|</span>
                <span className="text-[#c4c7c8]">VAULT FEED // {timecode}</span>
              </div>

              <div className="bg-[#0e0e0e]/90 backdrop-blur-md px-3 py-1.5 border border-[#00FF66] shadow-xl transform rotate-6">
                <div className="font-mono text-[10px] font-bold text-[#00FF66] tracking-widest text-center leading-tight">
                  VERIFIED<br />100%<br />AUTHENTIC
                </div>
              </div>
            </div>

            {/* Video Play / Mute / Fullscreen Controls */}
            <div className="absolute bottom-20 right-4 flex items-center gap-1.5 z-20 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="w-8 h-8 bg-[#151515]/90 hover:bg-white text-white hover:text-black border border-[#404040] flex items-center justify-center transition-colors cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="w-8 h-8 bg-[#151515]/90 hover:bg-white text-white hover:text-black border border-[#404040] flex items-center justify-center transition-colors cursor-pointer"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5 text-[#D4FF00]" />
                )}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                className="w-8 h-8 bg-[#151515]/90 hover:bg-white text-white hover:text-black border border-[#404040] flex items-center justify-center transition-colors cursor-pointer"
                title="Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Meta Bar with Claim Trigger */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#201f1f]/95 backdrop-blur-sm p-3.5 border border-[#2B2B2B] flex items-center justify-between z-20">
              <div className="min-w-0 mr-2">
                <span className="block font-mono text-[10px] text-[#737373] uppercase tracking-wider truncate">
                  INSPECTION SPECIMEN // TRAVIS SCOTT
                </span>
                <span
                  onClick={() => onInspectItem(TRAVIS_SCOTT_ITEM)}
                  className="font-sans text-[14px] sm:text-[15px] font-bold text-white uppercase truncate block hover:text-[#D4FF00] transition-colors cursor-pointer"
                  title={TRAVIS_SCOTT_ITEM.title}
                >
                  {TRAVIS_SCOTT_ITEM.title}
                </span>
              </div>
              <div className="flex items-center gap-2.5 flex-shrink-0">
                <span className="font-mono text-[11px] text-[#D4FF00] hidden sm:inline">
                  SKU: {TRAVIS_SCOTT_ITEM.sku}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenClaim(TRAVIS_SCOTT_ITEM);
                  }}
                  className="px-2.5 py-1 bg-white hover:bg-[#D4FF00] text-black font-mono text-[11px] font-bold uppercase transition-colors flex items-center gap-1 cursor-pointer"
                  title="Claim this exact pair"
                >
                  <span>CLAIM</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
