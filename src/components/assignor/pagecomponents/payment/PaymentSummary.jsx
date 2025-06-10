'use client'

export default function PaymentSummary() {
  const paymentData = {
    totalPaid: '$4,500',
    totalOutstanding: '$1,200',
    pendingPayouts: '$600',
  }

  const summaryCards = [
    { name: 'Total Paid', value: paymentData.totalPaid },
    { name: 'Total Outstanding', value: paymentData.totalOutstanding },
    { name: 'Pending Payouts', value: paymentData.pendingPayouts },
  ]

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {summaryCards.map((card) => (
          <div
            key={card.name}
            className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col items-center justify-center text-center"
          >
            <dt className="text-sm font-medium text-gray-500">{card.name}</dt>
            <dd className="mt-1 text-xl font-semibold text-gray-900">{card.value}</dd>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-gray-500 text-right">
        Last synced with Stripe: June 8, 2025, 9:42 AM
      </p>
    </div>
  )
}