'use client'

import { useState } from 'react'
import PayNowConfirmationModal from '@/components/assignor/pagecomponents/payment/PayNowConfirmationModal'

export default function OutstandingPaymentsList() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(null)

  const outstandingPayments = [
    {
      referee: 'Emily Johnson',
      gameId: 'GAME-003',
      amount: '$50',
      dueDate: '2025-06-09',
      status: 'Pending',
    },
    {
      referee: 'Michael Lee',
      gameId: 'GAME-004',
      amount: '$55',
      dueDate: '2025-06-10',
      status: 'Processing',
    },
    {
      referee: 'Sarah Kim',
      gameId: 'GAME-006',
      amount: '$45',
      dueDate: '2025-06-11',
      status: 'Needs Review',
    },
  ]

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Outstanding Payments</h2>
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {outstandingPayments.map((payment, idx) => (
          <li
            key={idx}
            className="col-span-1 bg-white rounded-lg border border-gray-200 p-4 shadow-sm flex flex-col justify-between"
          >
            <div className="mb-2">
              <h3 className="text-sm font-medium text-gray-900">{payment.referee}</h3>
              <p className="text-xs text-gray-500">Game ID: {payment.gameId}</p>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p>Amount: <span className="font-semibold">{payment.amount}</span></p>
              <p>Due Date: <span className="font-semibold">{payment.dueDate}</span></p>
              <p className="mt-2">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                    payment.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : payment.status === 'Processing'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {payment.status}
                </span>
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedPayment(payment)
                  setIsModalOpen(true)
                }}
                className="mt-4 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Pay Now
              </button>
            </div>
          </li>
        ))}
      </ul>
      <PayNowConfirmationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedPayment(null)
        }}
        paymentData={selectedPayment || {}}
      />
    </div>
  )
}