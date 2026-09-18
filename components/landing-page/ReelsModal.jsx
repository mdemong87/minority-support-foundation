'use client'

import { FiPlay, FiShare2, FiX } from 'react-icons/fi'

export default function ReelsModal({ activeReel, onClose }) {
  if (!activeReel) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-[var(--brand-deep)] text-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/50 text-white hover:bg-black transition"
        >
          <FiX />
        </button>

        {/* Reel Video Thumbnail Simulation */}
        <div className="relative aspect-[9/14] w-full overflow-hidden">
          <img
            src={activeReel.image}
            alt={activeReel.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-deep)] via-transparent to-black/40" />

          {/* Simulated Reel Play Overlay */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-deep)] font-bold shadow-xl animate-pulse">
              <FiPlay className="text-2xl ml-1 fill-[var(--brand-deep)]" />
            </div>
          </div>

          {/* Reels Details & Share */}
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-[10px] font-bold text-[var(--brand-deep)]">
              {activeReel.category}
            </span>
            <h3 className="mt-2 font-serif text-xl font-bold leading-snug">
              {activeReel.title}
            </h3>
            <p className="mt-2 text-xs text-white/80 leading-relaxed">
              {activeReel.caption}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-xs">
              <span>FB Reels Archive</span>
              <a
                href="https://web.facebook.com/minoritysupportfoundation/reels/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-bold text-[var(--brand-soft)] hover:underline"
              >
                Open on Facebook <FiShare2 />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
