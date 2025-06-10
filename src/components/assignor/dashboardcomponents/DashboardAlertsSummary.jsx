

'use client'

import React from 'react'
import Link from 'next/link'

export default function DashboardAlertsSummary() {
  // Sample data for prototype — replace with real counts in production
  const unassignedGamesCount = 4
  const urgentGamesCount = 2
  const outstandingPaymentsCount = 3

  const alerts = [
    {
      label: 'Unassigned Games',
      count: unassignedGamesCount,
      href: '/assignor-view/games',
    },
    {
      label: 'Urgent Games',
      count: urgentGamesCount,
      href: '/assignor-view/games',
    },
    {
      label: 'Outstanding Payments',
      count: outstandingPaymentsCount,
      href: '/assignor-view/payments',
    },
  ]

  return (
    <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Alerts Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {alerts.map((alert, idx) => (
          <Link
            key={idx}
            href={alert.href}
            className="flex flex-col items-center justify-center border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="text-3xl font-bold text-indigo-600 mb-2">{alert.count}</div>
            <div className="text-sm font-medium text-gray-700 text-center">{alert.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}