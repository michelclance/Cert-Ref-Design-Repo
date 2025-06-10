'use client'

import { useState } from 'react'

export default function PaymentPage() {
  const [payoutMethodLinked, setPayoutMethodLinked] = useState(false)

  const paymentHistory = [
    {
      gameId: 'GAME-001',
      gameDate: 'June 8, 2025',
      amount: '$45',
      status: 'Paid',
      payoutDate: 'June 10, 2025',
    },
    {
      gameId: 'GAME-002',
      gameDate: 'June 9, 2025',
      amount: '$35',
      status: 'Processing',
      payoutDate: '-',
    },
    {
      gameId: 'GAME-003',
      gameDate: 'June 10, 2025',
      amount: '$40',
      status: 'Pending',
      payoutDate: '-',
    },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Payments</h1>

      {/* Payout Method Status */}
      <div className="mb-6 p-4 border rounded-md bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Payout Method</h2>
        {payoutMethodLinked ? (
          <p className="text-green-700">✅ Bank account linked (ending in 1234)</p>
        ) : (
          <button
            type="button"
            onClick={() => setPayoutMethodLinked(true)}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Link Bank Account
          </button>
        )}
      </div>

      <div className="flex justify-end mb-6">
        <button
          type="button"
          onClick={() => console.log('Navigating to Payment Settings')}
          className="text-sm text-indigo-600 hover:text-indigo-800 underline"
        >
          Manage Payment Settings
        </button>
      </div>

      {/* Summary */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 border rounded-md bg-white shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Total Earnings (June)</p>
          <p className="text-xl font-bold text-gray-900">$275</p>
        </div>
        <div className="p-4 border rounded-md bg-white shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Next Payout Date</p>
          <p className="text-xl font-bold text-gray-900">June 15, 2025</p>
        </div>
        <div className="p-4 border rounded-md bg-white shadow-sm">
          <p className="text-sm text-gray-500 mb-1">Pending Balance</p>
          <p className="text-xl font-bold text-gray-900">$75</p>
        </div>
      </div>

      {/* Payment History */}
      <div className="p-4 border rounded-md bg-white shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Payment History</h2>
        <table className="min-w-full text-sm">
          <thead className="border-b text-left text-gray-600">
            <tr>
              <th className="py-2">Game ID</th>
              <th className="py-2">Game Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
              <th className="py-2">Payout Date</th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-700">
            {paymentHistory.map((payment) => (
              <tr key={payment.gameId}>
                <td className="py-2">{payment.gameId}</td>
                <td className="py-2">{payment.gameDate}</td>
                <td className="py-2">{payment.amount}</td>
                <td className="py-2">{payment.status}</td>
                <td className="py-2">{payment.payoutDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}