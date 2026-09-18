'use client'

import { FiArrowUpRight, FiHeart, FiLock } from 'react-icons/fi'

export default function DonationBarSection({
  cause,
  setCause,
  amount,
  setAmount,
  isCustom,
  setIsCustom,
  donorName,
  setDonorName,
  donorPhone,
  setDonorPhone,
  donorEmail,
  setDonorEmail,
  onBehalf,
  setOnBehalf,
  agreedTerms,
  setAgreedTerms,
  handlePresetSelect,
  handleDonateSubmit
}) {
  return (
    <section id="donate-now" className="bg-[var(--sand)]">
      <div className="mx-auto max-w-7xl  px-4 py-12 lg:px-8">
        <div className="donation-bar-container">
          {/* Bar Header Banner */}
          <div className="donation-bar-header">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[var(--brand)] font-bold shadow">
                <FiHeart />
              </div>
              <div>
                <h2 className="text-base font-extrabold uppercase tracking-wide text-white">
                  Minority Support Foundation
                </h2>
                <p className="text-xs text-white/80">
                  DIRECT DONATION WIDGET · SECURED PAYMENT
                </p>
              </div>
            </div>

            {/* Cause Dropdown Selector & Preset Amounts Header */}
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={cause}
                onChange={(e) => setCause(e.target.value)}
                className="rounded-xl border border-white/30 bg-white/20 px-3.5 py-2 text-xs font-bold text-white outline-none focus:bg-white focus:text-[var(--brand-deep)] transition"
              >
                <option value="General Donation" className="text-gray-900">
                  General Donation Fund
                </option>
                <option value="Emergency Flood Relief" className="text-gray-900">
                  Emergency Flood Relief
                </option>
                <option value="Legal Aid & Human Rights" className="text-gray-900">
                  Legal Aid & Human Rights Defense
                </option>
                <option value="Youth Education Fund" className="text-gray-900">
                  Minority Youth Education Fund
                </option>
                <option value="Women Empowerment" className="text-gray-900">
                  Women Self-Reliance Grant
                </option>
              </select>

              {/* Preset Chips */}
              <div className="flex flex-wrap items-center gap-1.5">
                {['10000', '5000', '2000', '1000', '500', '250', 'Other'].map(
                  (val) => {
                    const isActive =
                      val === 'Other' ? isCustom : !isCustom && amount === val
                    return (
                      <button
                        key={val}
                        type="button"
                        onClick={() => handlePresetSelect(val)}
                        className={`donation-preset-btn ${isActive ? 'active' : ''}`}
                      >
                        {val === 'Other' ? 'Other' : `৳${Number(val).toLocaleString()}`}
                      </button>
                    )
                  }
                )}
              </div>
            </div>
          </div>

          {/* Bar Form Body */}
          <form onSubmit={handleDonateSubmit} className="p-6 bg-white">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.5fr_1.5fr_1.5fr_1.5fr_auto] items-center">
              {/* Amount Input */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  Donation Amount (BDT)
                </label>
                <div className="relative flex items-center rounded-xl border-2 border-gray-200 bg-gray-50 px-3 py-2.5 focus-within:border-[var(--brand)] focus-within:bg-white transition">
                  <span className="text-sm font-bold text-gray-500 mr-1.5">৳</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => {
                      setIsCustom(true)
                      setAmount(e.target.value)
                    }}
                    placeholder="Amount"
                    className="w-full bg-transparent font-black text-lg text-[var(--brand-deep)] outline-none"
                  />
                </div>
              </div>

              {/* Donor Full Name */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  Full Name (English) *
                </label>
                <input
                  type="text"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="e.g. Rahat Chowdhury"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-xs font-semibold text-gray-900 outline-none focus:border-[var(--brand)] focus:bg-white transition"
                />
              </div>

              {/* Donor Phone */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-xs font-semibold text-gray-900 outline-none focus:border-[var(--brand)] focus:bg-white transition"
                />
              </div>

              {/* Donor Email (Optional) */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-xs font-semibold text-gray-900 outline-none focus:border-[var(--brand)] focus:bg-white transition"
                />
              </div>

              {/* On Behalf of (Optional) */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-500 mb-1">
                  On Behalf Of (Optional)
                </label>
                <input
                  type="text"
                  value={onBehalf}
                  onChange={(e) => setOnBehalf(e.target.value)}
                  placeholder="Family or Organization"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-xs font-semibold text-gray-900 outline-none focus:border-[var(--brand)] focus:bg-white transition"
                />
              </div>

              {/* Action Submit Button */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-transparent mb-1 hidden lg:block">
                  Submit
                </label>
                <button
                  type="submit"
                  className="premium-cta w-full flex items-center justify-center gap-1.5 rounded-xl bg-[var(--brand)] px-6 py-3.5 text-sm font-extrabold text-white shadow-md hover:bg-[var(--brand-hover)] transition shrink-0"
                >
                  DONATE NOW <FiArrowUpRight />
                </button>
              </div>
            </div>

            {/* Terms Checkbox Row */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500 border-t border-gray-100 pt-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                  className="rounded text-[var(--brand)] focus:ring-[var(--brand)] h-4 w-4"
                />
                <span>
                  I agree to the Terms, Privacy Policy &amp; Refund Policy.
                </span>
              </label>
              <span className="flex items-center gap-1.5 text-gray-400 font-medium">
                <FiLock className="text-[var(--brand)]" /> SSL Encrypted &amp; Audit Verified
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
