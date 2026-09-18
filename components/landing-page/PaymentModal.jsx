'use client'

import { FiCheck, FiCheckCircle, FiCopy, FiHeart, FiX } from 'react-icons/fi'

export default function PaymentModal({
  showPaymentModal,
  onClose,
  cause,
  amount,
  selectedMethod,
  setSelectedMethod,
  trxId,
  setTrxId,
  paymentSuccess,
  setPaymentSuccess,
  copied,
  handleCopyNumber,
  handleConfirmPayment
}) {
  if (!showPaymentModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-[var(--brand-deep)] px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-deep)] font-bold">
              <FiHeart />
            </div>
            <div>
              <h3 className="font-bold text-sm">Secured Payment Gateway</h3>
              <p className="text-[11px] text-white/70">
                Cause: {cause} · Amount: ৳{Number(amount || 0).toLocaleString()}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full bg-white/10 hover:bg-white/20 text-white transition"
          >
            <FiX />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {paymentSuccess ? (
            <div className="py-8 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 text-3xl font-bold">
                <FiCheckCircle />
              </div>
              <h4 className="mt-4 font-serif text-2xl font-bold text-[var(--brand-deep)]">
                Thank You For Your Support!
              </h4>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed max-w-md mx-auto">
                Your payment notification (TrxID: <strong>{trxId}</strong>) has been submitted for automated audit verification. A receipt will be sent shortly.
              </p>
              <button
                onClick={() => {
                  onClose()
                  setPaymentSuccess(false)
                  setTrxId('')
                }}
                className="mt-6 rounded-full bg-[var(--brand)] px-6 py-3 text-xs font-bold text-white shadow hover:bg-[var(--brand-hover)]"
              >
                Done &amp; Close Window
              </button>
            </div>
          ) : (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                Select Payment Method:
              </p>

              {/* Tabs */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {['bKash', 'Nagad', 'Rocket', 'Bank'].map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => setSelectedMethod(method)}
                    className={`rounded-xl py-2.5 text-xs font-bold transition border ${selectedMethod === method
                        ? 'border-[var(--brand)] bg-[var(--sage)] text-[var(--brand-deep)] shadow-sm'
                        : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {method}
                  </button>
                ))}
              </div>

              {/* Payment Details Box */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-gray-400">
                      {selectedMethod} Merchant Account Number
                    </span>
                    <p className="font-mono text-lg font-bold text-gray-900 mt-0.5">
                      01712-345678
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopyNumber('01712345678')}
                    className="flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-[var(--brand)] border border-gray-200 shadow-sm hover:bg-gray-50"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <ol className="mt-3 list-decimal list-inside text-[11px] text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
                  <li>Go to your {selectedMethod} App or Dial *247#</li>
                  <li>
                    Select <strong>Make Payment</strong> or Send Money to{' '}
                    <strong>01712-345678</strong>
                  </li>
                  <li>
                    Enter Amount: <strong>৳{Number(amount || 0).toLocaleString()}</strong>
                  </li>
                  <li>Enter Reference: <strong>MSF</strong></li>
                  <li>Copy the Transaction ID (TrxID) and enter below:</li>
                </ol>
              </div>

              {/* Transaction ID Submission Form */}
              <form onSubmit={handleConfirmPayment} className="mt-5">
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Enter Transaction ID (TrxID) *
                </label>
                <input
                  type="text"
                  required
                  value={trxId}
                  onChange={(e) => setTrxId(e.target.value)}
                  placeholder="e.g. 9J28XKL01"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-mono font-bold text-gray-900 uppercase outline-none focus:border-[var(--brand)]"
                />

                <button
                  type="submit"
                  className="mt-4 w-full rounded-xl bg-[var(--brand)] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[var(--brand-hover)] transition"
                >
                  Confirm Payment &amp; Submit Receipt
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
