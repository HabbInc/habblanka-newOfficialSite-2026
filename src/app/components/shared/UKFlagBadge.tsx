import React from 'react'

export default function UKFlagBadge({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-dark_black/80 border border-orange/30 shadow-sm ${className}`}>
      <svg width="24" height="14" viewBox="0 0 60 30" className="rounded-sm">
        <rect width="60" height="30" fill="#0d2f5f" />
        <path d="M0 0L60 30M60 0L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="2" />
      </svg>
      <span className="text-xs font-bold text-dark_black dark:text-white tracking-wide">UK ENGINEERED</span>
    </span>
  )
}
