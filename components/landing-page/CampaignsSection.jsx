import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { CAMPAIGNS } from './data'

export default function CampaignsSection({ onSelectCampaign }) {
  return (
    <section className="py-16 lg:py-24 bg-[var(--sand)] border-y border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">URGENT CAUSES</p>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[var(--brand-deep)] leading-tight">
              Featured Live Campaigns
            </h2>
          </div>
          <Link
            href="/programs"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[var(--brand)] hover:underline"
          >
            Browse All Campaigns <FiArrowUpRight />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAMPAIGNS.map((item) => {
            const percentage = Math.min(
              100,
              Math.round((item.raised / item.goal) * 100)
            )
            return (
              <div
                key={item.id}
                className="donation-card flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-sm"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[var(--brand-deep)]/80 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand)]">
                      {item.location}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-[var(--brand-deep)] line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-[var(--ink-muted)] line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Progress bar */}
                    <div className="mt-5">
                      <div className="flex justify-between text-xs font-bold text-gray-700">
                        <span>
                          Raised: ৳{item.raised.toLocaleString()}
                        </span>
                        <span className="text-[var(--brand)]">{percentage}%</span>
                      </div>
                      <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-[var(--brand)] progress-bar-fill"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
                        <span>Target: ৳{item.goal.toLocaleString()}</span>
                        <span>{item.donors} Donors</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectCampaign(item.title)}
                    className="w-full rounded-xl bg-[var(--brand)] py-2.5 text-xs font-bold text-white shadow hover:bg-[var(--brand-hover)] transition"
                  >
                    Donate to Campaign
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
