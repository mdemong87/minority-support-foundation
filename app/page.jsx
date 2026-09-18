'use client'

import { useState } from 'react'
import { SiteFooter, SiteHeader } from '../components/site-shell'
import {
  CampaignsSection,
  CtaSection,
  DonationBarSection,
  FocusAreasSection,
  HeroSection,
  ImpactStatsSection,
  PaymentModal,
  ReelsModal,
  ReelsSection,
  StoriesSection
} from '../components/landing-page'

export default function HomePage() {
  // Donation Form State
  const [cause, setCause] = useState('General Donation')
  const [amount, setAmount] = useState('1000')
  const [isCustom, setIsCustom] = useState(false)
  const [donorName, setDonorName] = useState('')
  const [donorPhone, setDonorPhone] = useState('')
  const [donorEmail, setDonorEmail] = useState('')
  const [onBehalf, setOnBehalf] = useState('')
  const [agreedTerms, setAgreedTerms] = useState(true)

  // Payment Modal State
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedMethod, setSelectedMethod] = useState('bKash')
  const [trxId, setTrxId] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  // Reels Lightbox Modal State
  const [activeReel, setActiveReel] = useState(null)

  const handlePresetSelect = (val) => {
    if (val === 'Other') {
      setIsCustom(true)
      setAmount('')
    } else {
      setIsCustom(false)
      setAmount(val)
    }
  }

  const handleDonateSubmit = (e) => {
    if (e) e.preventDefault()
    if (!amount || Number(amount) <= 0) {
      alert('Please select or enter a valid donation amount.')
      return
    }
    setPaymentSuccess(false)
    setShowPaymentModal(true)
  }

  const handleCopyNumber = (num) => {
    navigator.clipboard.writeText(num)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleConfirmPayment = (e) => {
    e.preventDefault()
    if (!trxId.trim()) {
      alert('Please enter your payment Transaction ID (TrxID).')
      return
    }
    setPaymentSuccess(true)
  }

  const handleSelectCampaign = (campaignTitle) => {
    setCause(campaignTitle)
    setShowPaymentModal(true)
  }

  return (
    <main className="bg-[var(--paper)] text-[var(--ink)] min-h-screen">
      <SiteHeader onDonateClick={() => setShowPaymentModal(true)} />

      {/* Hero Carousel Section */}
      <HeroSection onDonateClick={() => setShowPaymentModal(true)} />

      {/* Quick Donation Bar Section */}
      <DonationBarSection
        cause={cause}
        setCause={setCause}
        amount={amount}
        setAmount={setAmount}
        isCustom={isCustom}
        setIsCustom={setIsCustom}
        donorName={donorName}
        setDonorName={setDonorName}
        donorPhone={donorPhone}
        setDonorPhone={setDonorPhone}
        donorEmail={donorEmail}
        setDonorEmail={setDonorEmail}
        onBehalf={onBehalf}
        setOnBehalf={setOnBehalf}
        agreedTerms={agreedTerms}
        setAgreedTerms={setAgreedTerms}
        handlePresetSelect={handlePresetSelect}
        handleDonateSubmit={handleDonateSubmit}
      />

      {/* Three Focus Areas */}
      <FocusAreasSection />

      {/* Urgent Causes & Live Campaigns */}
      <CampaignsSection onSelectCampaign={handleSelectCampaign} />

      {/* Facebook Reels & Video Highlights */}
      <ReelsSection onSelectReel={(reel) => setActiveReel(reel)} />

      {/* Impact Statistics & Trust Statement */}
      <ImpactStatsSection />

      {/* Stories of Hope */}
      <StoriesSection />

      {/* Call to Action: Volunteer & Partner */}
      <CtaSection />

      {/* Interactive Reels Lightbox Modal */}
      <ReelsModal activeReel={activeReel} onClose={() => setActiveReel(null)} />

      {/* Interactive Payment Gateway Modal */}
      <PaymentModal
        showPaymentModal={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        cause={cause}
        amount={amount}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
        trxId={trxId}
        setTrxId={setTrxId}
        paymentSuccess={paymentSuccess}
        setPaymentSuccess={setPaymentSuccess}
        copied={copied}
        handleCopyNumber={handleCopyNumber}
        handleConfirmPayment={handleConfirmPayment}
      />

      <SiteFooter />
    </main>
  )
}
