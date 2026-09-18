import { FiArrowUpRight, FiPlay } from 'react-icons/fi'
import { FIELD_REELS } from './data'

export default function ReelsSection({ onSelectReel }) {
  return (
    <section id="reels" className="py-16 lg:py-24 bg-[var(--brand-deep)] text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-[var(--brand-soft)]">
              FIELD STORIES IN MOTION
            </p>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Watch Our Facebook Video Reels
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-white/75 max-w-xl">
              Direct insights and real video logs captured from our team&apos;s field work across Bangladesh.
            </p>
          </div>
          <a
            href="https://web.facebook.com/minoritysupportfoundation/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-bold text-white hover:bg-white/20 transition"
          >
            Visit Official FB Reels Page <FiArrowUpRight />
          </a>
        </div>

        {/* Reels Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FIELD_REELS.map((reel) => (
            <div
              key={reel.id}
              onClick={() => onSelectReel(reel)}
              className="reel-card group cursor-pointer"
            >
              <img src={reel.image} alt={reel.title} />
              <div className="reel-overlay" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {reel.category}
                </span>
                <span className="rounded-full bg-black/40 px-2.5 py-1 text-[10px] font-bold text-[var(--brand-soft)] backdrop-blur-md">
                  {reel.duration}
                </span>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 grid place-items-center z-10">
                <div className="play-badge">
                  <FiPlay className="text-xl ml-1 fill-[var(--brand-deep)]" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <div className="flex items-center gap-2 text-[10px] text-white/70">
                  <span>{reel.views}</span>
                  <span>•</span>
                  <span>{reel.date}</span>
                </div>
                <h3 className="mt-1 font-serif text-lg font-bold leading-snug line-clamp-2">
                  {reel.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
